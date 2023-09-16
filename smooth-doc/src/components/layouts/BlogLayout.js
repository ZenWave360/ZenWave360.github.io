import * as React from "react"
import {WebSiteLayout} from "./WebSiteLayout";
import styled from '@xstyled/styled-components'
import PostLink from "../blog/PostLink";

const Container = styled.div`
  background-color: background;
  flex: 1;
  
  width: 60%;
  max-width: 1440px;
  margin: 40px auto;
  padding-left: 48px;
  padding-right: 48px;
`

const BlogLayout = ({ data, ...props }) => {
    console.log(`BlogLayout.js`)
  const posts = data.allBlogPost.nodes
    return (
        <WebSiteLayout {...props}>
            <Container>
                {posts.map((node) => (
                    <PostLink key={node.slug} {...node} />
                ))}
            </Container>
        </WebSiteLayout>
    )
}

export default BlogLayout
