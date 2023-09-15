import React from 'react'
import { DocLayout } from './DocLayout'
import { PostLayout } from './PostLayout'
import {PageLayout} from "./PageLayout";
import {HomeLayout} from "./HomeLayout";

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
          editLink={mdx.fields.editLink}
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
