import React from 'react'
import { DocLayout } from './layouts/DocLayout'
import { PostLayout } from './layouts/PostLayout'
import {PageLayout} from "./layouts/PageLayout";
import {HomeLayout} from "./layouts/HomeLayout";

export function PageWrapper({
  children,
  props: {
    data: { mdx },
  },
}) {
  console.log(`PageWrapper.js ${mdx?.fields?.pageType}`)
  if (!mdx?.fields?.pageType) return children
  switch (mdx.fields.pageType) {
    case 'doc':
      return (
        <DocLayout
          title={mdx.fields.title}
          tableOfContents={mdx.tableOfContents}
        >
          {children}
        </DocLayout>
      )
    case 'page':
      console.log("PageWrapper", children);
      if(children.key === '/') {
        return <HomeLayout title={mdx.fields.title}>{children}</HomeLayout>
      } else {
        return <PageLayout title={mdx.fields.title}>{children}</PageLayout>
      }
    case 'post':
      return <PostLayout title={mdx.fields.title}>{children}</PostLayout>
    default:
      return children
  }
}
