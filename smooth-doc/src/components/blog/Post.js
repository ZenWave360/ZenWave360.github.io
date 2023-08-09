import * as React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import PostTitle from "./PostTitle"
import PostDate from "./PostDate"
import PostHero from "./PostHero"

const Post = ({ data }) => {
  // const post = data.blogPost
  const post = data || {}
  return (
    <main>
      <article className="post">
        <header>
          <PostHero post={post} />
          <PostTitle>{post.title}</PostTitle>
          <PostDate>{post.date}</PostDate>
        </header>
        <section className="post-body">
          <MDXRenderer>{post.body}</MDXRenderer>
          <MDXRenderer>{post}</MDXRenderer>
        </section>
      </article>
    </main>
  )
}

export default Post
