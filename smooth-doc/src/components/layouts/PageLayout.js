import React from 'react'
import styled, { x, css, up, down, th } from '@xstyled/styled-components'
import { Article } from '../Article'
import { WebSiteLayout } from "./WebSiteLayout";
import { TableOfContents } from "../TableOfContents";

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

export function PageLayout({ children, tableOfContents, editLink, ...props }) {
    console.log(`PageLayout.js`)
    return (
        <WebSiteLayout {...props}>
            <Container>
                <x.div pb={6} px={3}>
                    <Article>{children}</Article>
                </x.div>
                <TocContainer>
                    <TableOfContents />
                </TocContainer>
            </Container>
        </WebSiteLayout>
    )
}
