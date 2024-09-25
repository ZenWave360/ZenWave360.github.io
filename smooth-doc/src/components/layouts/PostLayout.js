import React from 'react'
import styled, { x, css, up, down, th } from '@xstyled/styled-components'
import { Article } from '../Article'
import { WebSiteLayout } from "./WebSiteLayout";
import { TableOfContents } from "../TableOfContents";
import PostHero from "../blog/PostHero";
import PostTitle from "../blog/PostTitle";
import PostDate from "../blog/PostDate";

const Container = styled.div`
  background-color: background;
  flex: 1;

  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;
  
  z-index: 0;
  position: relative;

  ${up(
    'md',
    css`
      display: grid;
      grid-template-columns: minmax(0, 1fr);
      // grid-gap: ${th.space(5)};

      .sidebar-container {
        display: none;
      }
    `,
)}

  ${up(
    'xl',
    css`
      grid-template-columns: minmax(0, 1fr) 288px;

      .sidebar-container {
        display: none;
      }
    `,
)}
`

const TocContainer = styled.div`
  ${down(
          'xl',
          css`
      display: none;
    `,
  )}
`

export function PostLayout({ children, tableOfContents, ...props }) {
    const post = children?.props?.pageContext?.frontmatter || {}
    const canonical = post.canonical || ''
    // console.log(`PostLayout.js`, `post ${JSON.stringify(post)}`)
    return (
        <WebSiteLayout {...props} canonical={canonical}>
            <Container>
                <x.div pb={6} px={3}>
                    <Article>
                        <header>
                            <p>{post.title}</p>
                            <p>{post.date}</p>
                        </header>
                        {children}
                    </Article>
                </x.div>
                <TocContainer>
                    <TableOfContents />
                </TocContainer>
            </Container>
        </WebSiteLayout>
    )
}
