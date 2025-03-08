import * as React from "react"
import { Link } from "gatsby"
import PostHero from "./PostHero";

const postLinkStyle = {
    display: 'flex',
    marginBottom: '3rem',
}

const aStyle = {
    textDecoration: 'none',
    color: 'inherit',
}

function joinPath(path, file) { return `${path}/${file}`.replaceAll('//', '/') }

const PostLink = (post) => (
  <article className="post-link" style={postLinkStyle}>
      <Link to={post.slug} style={aStyle}>
          <img 
            src={post.image?.startsWith('https://') ? post.image : joinPath(post.slug, post.image)} 
            alt={post.excerpt} 
            style={{float: 'left', width: '30%', marginRight: '20px'}} 
          />
          <h2 style={{fontSize: '1.3em', marginBottom: '5px'}}>{post.title || post.slug} / <small style={{fontSize: '0.6em'}}>{post.date}</small></h2>
          <section className="post-link-excerpt" style={{ marginTop: '10px'}}>
              <p>{post.excerpt}</p>
          </section>
      </Link>
  </article>
)

export default PostLink
