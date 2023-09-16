import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function joinPath(path, file) { return `${path}/${file}`.replaceAll('//', '/') }
const PostHero = (post) => {
  if(post?.image) {
    return <img src={joinPath(post.slug, post.image)} alt={post.excerpt} width="30%" />
  }
}

export default PostHero
