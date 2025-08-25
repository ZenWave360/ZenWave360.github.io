const fs = require('fs')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { getSiteUrl } = require('./src/theme-options')
const { createContentDigest, slash } = require(`gatsby-core-utils`)
const fetch = require('node-fetch')

// Cache for remote content to avoid duplicate fetches
const remoteContentCache = new Map()

// Function to transform GitHub blob URLs to raw URLs
function transformGitHubUrl(url) {
  // Transform GitHub blob URLs to raw URLs
  // From: https://github.com/user/repo/blob/branch/path/file.ext
  // To: https://raw.githubusercontent.com/user/repo/refs/heads/branch/path/file.ext
  const githubBlobRegex = /^https:\/\/github\.com\/([^\/]+)\/([^\/]+)\/blob\/([^\/]+)\/(.+)$/
  const match = url.match(githubBlobRegex)

  if (match) {
    const [, user, repo, branch, filePath] = match
    return `https://raw.githubusercontent.com/${user}/${repo}/refs/heads/${branch}/${filePath}`
  }

  return url // Return original URL if not a GitHub blob URL
}

// Function to create GitHub source URL with line range
function createGitHubSourceUrl(originalUrl, visibleRange) {
  // Only create source URL if original was a GitHub blob URL
  const githubBlobRegex = /^https:\/\/github\.com\/([^\/]+)\/([^\/]+)\/blob\/([^\/]+)\/(.+)$/
  if (!githubBlobRegex.test(originalUrl)) {
    return originalUrl
  }

  if (visibleRange) {
    const [start, end] = visibleRange.split(',').map(num => parseInt(num.trim(), 10))
    return `${originalUrl}#L${start}-L${end}`
  }

  return originalUrl
}

// Function to fetch and process remote content
async function fetchRemoteContent(url, visibleRange, originalUrl = null) {
  const fetchUrl = transformGitHubUrl(url)
  const cacheKey = `${fetchUrl}:${visibleRange || 'full'}`

  if (remoteContentCache.has(cacheKey)) {
    console.log(`Using cached content for: ${fetchUrl}`)
    return remoteContentCache.get(cacheKey)
  }

  try {
    console.log(`Fetching remote content from: ${fetchUrl}`)
    const response = await fetch(fetchUrl)

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }

    let content = await response.text()
    console.log(`Fetched content from: ${fetchUrl}`)

    // Apply visibleRange if provided (format: "start,end" with 1-based indexing)
    if (visibleRange) {
      const lines = content.split('\n')
      const [start, end] = visibleRange.split(',').map(num => parseInt(num.trim(), 10))
      // Convert from 1-based to 0-based indexing for array slicing
      const startIndex = Math.max(0, start - 1)
      const endIndex = Math.min(lines.length, end)
      content = lines.slice(startIndex, endIndex).join('\n')
    }

    remoteContentCache.set(cacheKey, content)
    return content
  } catch (error) {
    console.error(`Failed to fetch content from ${fetchUrl}:`, error.message)
    const errorContent = `// Error fetching content from ${fetchUrl}\n// ${error.message}`
    remoteContentCache.set(cacheKey, errorContent)
    return errorContent
  }
}

// Function to extract RemoteCode components from MDX content
function extractRemoteCodeComponents(mdxContent) {
  const components = []

  // Extract explicit RemoteCode components
  const remoteCodeRegex = /<RemoteCode[^>]*>/g
  let match

  while ((match = remoteCodeRegex.exec(mdxContent)) !== null) {
    const componentStr = match[0]

    // Extract props using regex
    const urlMatch = componentStr.match(/url=["']([^"']+)["']/)
    const languageMatch = componentStr.match(/language=["']([^"']+)["']/)
    const visibleRangeMatch = componentStr.match(/visibleRange=["']([^"']+)["']/)

    if (urlMatch) {
      components.push({
        url: urlMatch[1],
        language: languageMatch ? languageMatch[1] : 'text',
        visibleRange: visibleRangeMatch ? visibleRangeMatch[1] : null,
        originalComponent: componentStr
      })
    }
  }

  // Extract CodeGeneration components and their sourceUrl/outputUrl properties
  const codeGenerationRegex = /<CodeGeneration[^>]*(?:\/>|>[\s\S]*?<\/CodeGeneration>)/g
  let codeGenMatch

  while ((codeGenMatch = codeGenerationRegex.exec(mdxContent)) !== null) {
    const componentStr = codeGenMatch[0]

    // Extract sourceUrl and related props
    const sourceUrlMatch = componentStr.match(/sourceUrl=["']([^"']+)["']/)
    const sourceLanguageMatch = componentStr.match(/sourceLanguage=["']([^"']+)["']/)
    const sourceVisibleRangeMatch = componentStr.match(/sourceVisibleRange=["']([^"']+)["']/)

    if (sourceUrlMatch) {
      components.push({
        url: sourceUrlMatch[1],
        language: sourceLanguageMatch ? sourceLanguageMatch[1] : 'text',
        visibleRange: sourceVisibleRangeMatch ? sourceVisibleRangeMatch[1] : null,
        originalComponent: `CodeGeneration.sourceUrl: ${componentStr}`
      })
    }

    // Extract outputUrl and related props
    const outputUrlMatch = componentStr.match(/outputUrl=["']([^"']+)["']/)
    const outputLanguageMatch = componentStr.match(/outputLanguage=["']([^"']+)["']/)
    const outputVisibleRangeMatch = componentStr.match(/outputVisibleRange=["']([^"']+)["']/)

    if (outputUrlMatch) {
      components.push({
        url: outputUrlMatch[1],
        language: outputLanguageMatch ? outputLanguageMatch[1] : 'text',
        visibleRange: outputVisibleRangeMatch ? outputVisibleRangeMatch[1] : null,
        originalComponent: `CodeGeneration.outputUrl: ${componentStr}`
      })
    }
  }

  return components
}

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
      discordInvite: String
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

    type RemoteCodeContent implements Node {
      id: ID!
      url: String!
      originalUrl: String!
      sourceUrl: String!
      language: String!
      visibleRange: String
      content: String!
      cacheKey: String!
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

  // Create node fields FIRST to ensure pages work even if remote content processing fails
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
    // console.log('mdxBlogPostId', mdxBlogPostId )
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

  // Process RemoteCode components in MDX content AFTER all fields are created
  // This ensures that if remote content processing fails, the page fields are still created
  if (node.internal.type === 'Mdx' && node.body) {
    try {
      const remoteCodeComponents = extractRemoteCodeComponents(node.body)

      for (const component of remoteCodeComponents) {
        try {
          const originalUrl = component.url
          const fetchUrl = transformGitHubUrl(originalUrl)
          const sourceUrl = createGitHubSourceUrl(originalUrl, component.visibleRange)
          const cacheKey = `${fetchUrl}:${component.visibleRange || 'full'}`
          const content = await fetchRemoteContent(originalUrl, component.visibleRange, originalUrl)

          const remoteCodeNodeId = createNodeId(`${node.id} >>> RemoteCodeContent >>> ${cacheKey}`)

          const remoteCodeData = {
            url: fetchUrl,
            originalUrl: originalUrl,
            sourceUrl: sourceUrl,
            language: component.language,
            visibleRange: component.visibleRange,
            content: content,
            cacheKey: cacheKey
          }

          await createNode({
            ...remoteCodeData,
            id: remoteCodeNodeId,
            parent: node.id,
            children: [],
            internal: {
              type: 'RemoteCodeContent',
              contentDigest: createContentDigest(remoteCodeData),
              content: JSON.stringify(remoteCodeData),
              description: 'Remote code content fetched at build time'
            }
          })

          createParentChildLink({ parent: node, child: getNode(remoteCodeNodeId) })
        } catch (componentError) {
          console.error(`Failed to process remote code component for ${component.url}:`, componentError.message)
          // Continue processing other components even if one fails
        }
      }
    } catch (extractionError) {
      console.error(`Failed to extract remote code components from ${node.internal.contentFilePath}:`, extractionError.message)
      // Don't fail the entire node creation if remote content processing fails
    }
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
    discordInvite: Joi.string(),
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
    resolve: {
      fallback: {
        path: require.resolve('path-browserify'),
        url: require.resolve('url/'),
        util: require.resolve('util/'),
        fs: false,
        stream: require.resolve('stream-browserify'),
        buffer: require.resolve('buffer/'),
        process: require.resolve('process/browser'),
        os: false,
        crypto: false,
      },
    },
    plugins: [
      new (require('webpack')).ProvidePlugin({
        process: 'process/browser',
        Buffer: ['buffer', 'Buffer'],
      }),
    ],
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
