import React from 'react'
import styled from '@xstyled/styled-components'
import { AppHeader } from './AppHeader'
import { Head } from './Head'

const StickyHeader = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`

const Main = styled.main`
  background-color: background;
  flex: 1;
  
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;
`

const DocMain = styled.main`
  background-color: background;
  flex: 1;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export function PageLayout({ children, title, isDoc = false }) {
    console.log('PageLayout.js: PageLayout()', isDoc);
  return (
    <>
      <Head title={title} />
      <Container>
        <StickyHeader>
          <AppHeader />
        </StickyHeader>
        {isDoc? <DocMain id="main">{children}</DocMain> : <Main id="main">{children}</Main>}
      </Container>
    </>
  )
}
