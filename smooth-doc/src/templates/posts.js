import { graphql } from "gatsby"
import BlogLayout from "../components/layouts/BlogLayout"

export default BlogLayout

export const query = graphql`
  query PostsQuery($limit: Int!, $filter: BlogPostFilterInput) {
    site {
      siteMetadata {
        title
      }
    }
    allBlogPost(
      sort: { fields: [date, title], order: DESC }
      filter: $filter
      limit: $limit
    ) {
      nodes {
        id
        title
        slug
        date(formatString: "MMMM DD, YYYY")
        image
        tags
        excerpt
      }
    }
  }
`
