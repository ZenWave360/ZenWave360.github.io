const fs = require('fs')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { getSiteUrl } = require('./src/theme-options')
const { createContentDigest, slash } = require(`gatsby-core-utils`)

function createSchemaCustomization({ actions, schema }) {
  const { createTypes } = actions
  const typeDefs = `
    type NavItem {
      title: String!
      url: String!
    }

    type AlgoliaDocSearchMetadata {
      apiKey: String!
      indexName: String!
      appId: String
    }

    type SiteSiteMetadata {
      title: String!
      description: String!
      siteUrl: String!
      author: String
      twitterAccount: String
      githubRepositoryURL: String
      sections: [String!]
      navItems: [NavItem!]
      carbonAdsURL: String
      docSearch: AlgoliaDocSearchMetadata
    }

    type MdxFrontmatter {
      title: String!
      description: String
      slug: String
      section: String
      order: Int
      redirect: String
    }

    type BlogPost implements Node {
      id: ID!
      title: String!
      author: String!
      body: String!
      slug: String!
      date: Date! @dateformat
      tags: [String]!
      excerpt: String!
      image: String
      imageAlt: String
      imageCaptionText: String
      imageCaptionLink: String
      socialImage: File
    }
  `
  createTypes(typeDefs)

}

function processRelativeImage(source, context, type) {
  // Image is a relative path - find a corresponding file
  const mdxFileNode = context.nodeModel.findRootNodeAncestor(
    source,
    (node) => node.internal && node.internal.type === `File`
  )
  if (!mdxFileNode) {
    return
  }
  const imagePath = slash(path.join(mdxFileNode.dir, source[type]))

  const fileNodes = context.nodeModel.getAllNodes({ type: `File` })
  for (const file of fileNodes) {
    if (file.absolutePath === imagePath) {
      return file
    }
  }
}

const mdxResolverPassthrough =
  (fieldName) => async (source, args, context, info) => {
    const type = info.schema.getType(`Mdx`)
    const mdxNode = context.nodeModel.getNodeById({
      id: source.parent,
    })
    const resolver = type.getFields()[fieldName].resolve
    const result = await resolver(mdxNode, args, context, {
      fieldName,
    })
    return result
  }

function createDirectoryIfNotExists({ reporter }, pathname) {
  if (!fs.existsSync(pathname)) {
    reporter.info(`creating the ${pathname} directory`)
    fs.mkdirSync(pathname)
  }
}

async function onPreBootstrap(options) {
  // Create all required directories
  createDirectoryIfNotExists(options, 'pages')
  createDirectoryIfNotExists(options, 'pages/docs')
  createDirectoryIfNotExists(options, 'pages/posts')
  createDirectoryIfNotExists(options, 'images')
}

function getPageType(contentFilePath) {
  if (/\/pages\/docs\//.test(contentFilePath)) {
    return 'doc'
  }
  if (/\/pages\/posts\//.test(contentFilePath)) {
    return 'post'
  }
  return 'page'
}

async function onCreateMdxNode({ node, getNode, actions, createNodeId }, options) {
  const { createNodeField, createNode, createParentChildLink } = actions
  const slug = node.frontmatter.slug || createFilePath({ node, getNode })
  const pageType = getPageType(node.internal.contentFilePath);

  createNodeField({
    name: 'id',
    node,
    value: node.id,
  })

  createNodeField({
    name: 'pageType',
    node,
    value: pageType,
  })

  createNodeField({
    name: 'title',
    node,
    value: node.frontmatter.title,
  })

  createNodeField({
    name: 'description',
    node,
    value: node.frontmatter.description || '',
  })

  createNodeField({
    name: 'slug',
    node,
    value: slug,
  })

  createNodeField({
    name: 'section',
    node,
    value: node.frontmatter.section || '',
  })

  createNodeField({
    name: 'redirect',
    node,
    value: node.frontmatter.redirect || '',
  })

  function getOrderField() {
    if (!Number.isNaN(Number(node.frontmatter.order))) {
      return node.frontmatter.order
    }
    return -9999
  }

  createNodeField({
    name: 'order',
    node,
    value: getOrderField(),
  })

  const url = new URL(getSiteUrl(options))
  url.pathname = slug

  createNodeField({
    name: 'url',
    node,
    value: url.toString(),
  })

  if(pageType === 'post') {
    const fieldData = {
      title: node.frontmatter.title,
      tags: node.frontmatter.tags || [],
      author: node.frontmatter.author || '',
      slug,
      excerpt: node.frontmatter.excerpt || '',
      date: node.frontmatter.date,
      image: node.frontmatter.image,
      imageAlt: node.frontmatter.imageAlt,
      imageCaptionText: node.frontmatter.imageCaptionText,
      imageCaptionLink: node.frontmatter.imageCaptionLink,
      socialImage: node.frontmatter.socialImage,
    }
    const mdxBlogPostId = createNodeId(`${node.id} >>> BlogPost`)
    console.log('mdxBlogPostId', mdxBlogPostId )
    await createNode({
      ...fieldData,
      // Required fields.
      id: mdxBlogPostId,
      parent: node.id,
      children: [],
      internal: {
        type: `BlogPost`,
        contentDigest: createContentDigest(fieldData),
        content: JSON.stringify(fieldData),
        description: `Mdx implementation of the BlogPost interface`,
      },
    })
    createParentChildLink({ parent: node, child: getNode(mdxBlogPostId) })
  }
}

function onCreateNode(...args) {
  if (args[0].node.internal.type === 'Mdx') {
    onCreateMdxNode(...args)
  }
}

async function createPages({ graphql, actions, reporter }) {
  const { createPage, createRedirect } = actions

  const { data, errors } = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
              pageType
              redirect
            }
            parent {
              ... on File {
                sourceInstanceName
              }
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `)

  if (errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    console.log(errors)
    return
  }

  const filteredEdges = data.allMdx.edges.filter((edge) => {
    if (edge.node.parent.sourceInstanceName === 'default-page') {
      const { slug } = edge.node.fields
      const hasCustom404 = data.allMdx.edges.find(
        (_edge) => edge !== _edge && _edge.node.fields.slug === slug,
      )
      return !hasCustom404
    }
    return true
  })

  // Create pages
  filteredEdges.forEach(({ node }) => {
    if (node.fields.redirect) {
      createRedirect({
        fromPath: node.fields.slug,
        toPath: node.fields.redirect,
        redirectInBrowser: true,
      })
      return
    }

    createPage({
      path: node.fields.slug,
      component: path.resolve(
        __dirname,
        `./src/templates/${node.fields.pageType}.js?__contentFilePath=${node.internal.contentFilePath}`,
      ),
      context: {
        id: node.id,
        frontmatter: node.frontmatter,
        contentFilePath: node.internal.contentFilePath,
      },
    })
  })

  createPage({
    path: '/blog/',
    component: require.resolve("./src/templates/posts.js"),
    context: { filter: {}, limit: 100 },
  })
}

const pluginOptionsSchema = (/** @type {{ Joi: import('joi') }} */ { Joi }) => {
  return Joi.object({
    // Validate that the anonymize option is defined by the user and is a boolean
    name: Joi.string().required(),
    description: Joi.string().required(),
    siteUrl: Joi.string(),
    shortName: Joi.string(),
    sections: Joi.array().items(Joi.string()),
    navItems: Joi.array().items(
      Joi.object({
        title: Joi.string().required(),
        url: Joi.string().required(),
      }),
    ),
    baseDirectory: Joi.string(),
    twitterAccount: Joi.string(),
    githubRepositoryURL: Joi.string(),
    githubDocRepositoryURL: Joi.string(),
    githubDefaultBranch: Joi.string(),
    author: Joi.string(),
    carbonAdsURL: Joi.string(),
    docSearch: Joi.object({
      apiKey: Joi.string().required(),
      indexName: Joi.string().required(),
      appId: Joi.string(),
    }),
    sitemap: Joi.object(),
  })
}

const onCreateWebpackConfig = ({ stage, rules, loaders, plugins, actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.mdx$/,
          use: require.resolve('@mdx-js/loader'),
        },
      ],
    },
  })
}

module.exports = {
  createSchemaCustomization,
  onPreBootstrap,
  onCreateNode,
  createPages,
  pluginOptionsSchema,
  onCreateWebpackConfig,
}
