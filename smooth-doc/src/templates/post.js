import { graphql } from "gatsby"

export const postQuery = graphql`
  query PostPage($id: String!) {
    mdx(id: { eq: $id }) {
      fields {
        pageType
        title
      }
    }
  }
`

function PostTemplate({ children }) {
  return children
}

export default PostTemplate
