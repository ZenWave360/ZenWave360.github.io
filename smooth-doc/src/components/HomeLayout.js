import React from 'react'
import styled from '@xstyled/styled-components'
import { WebSiteLayout } from "./WebSiteLayout";

const HomeMain = styled.main`
  background-color: background;
  flex: 1;
  
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;
`

export function HomeLayout({ children, tableOfContents, editLink, ...props }) {
    props.isDoc = false;
    props.isHome = children.key === '/';
    return <WebSiteLayout {...props}>
        <HomeMain id="main">{children}</HomeMain>
    </WebSiteLayout>
}
