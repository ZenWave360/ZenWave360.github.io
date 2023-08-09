import * as React from "react"
import PostList from "./PostList"

const Posts = ({ data }) => {
  const posts = data.allBlogPost.nodes
  return (
    <main>
      <PostList posts={posts} />
    </main>
  )
}

export default Posts