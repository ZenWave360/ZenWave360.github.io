import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { RiDiscordFill, RiGithubFill, RiTwitterFill } from 'react-icons/ri'
import { Nav, NavList, NavListItem, NavLink } from './Nav'
import { ColorModeSwitcher } from './ColorModeSwitcher'

const AppNavQuery = graphql`
  query AppNav {
    site {
      siteMetadata {
        twitterAccount
        githubRepositoryURL
        discordInvite
        navItems {
          title
          url
        }
      }
    }
  }
`

export function AppNav() {
  const data = useStaticQuery(AppNavQuery)

  return (
    <Nav>
      <NavList>
        {(data.site.siteMetadata.navItems || []).map(
          ({ title, url }, index) => (
            <NavListItem key={index}>
              <NavLink to={url}>{title}</NavLink>
            </NavListItem>
          ),
        )}
        {data.site.siteMetadata.discordInvite ? (
          <NavListItem>
            <NavLink
              as="a"
              href={data.site.siteMetadata.discordInvite}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
            >
              <RiDiscordFill style={{ width: 30, height: 30 }} />
            </NavLink>
          </NavListItem>
        ) : null}
        {data.site.siteMetadata.githubRepositoryURL ? (
          <NavListItem>
            <NavLink
              as="a"
              href={data.site.siteMetadata.githubRepositoryURL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <RiGithubFill style={{ width: 24, height: 24 }} />
            </NavLink>
          </NavListItem>
        ) : null}
        {data.site.siteMetadata.twitterAccount ? (
          <NavListItem>
            <NavLink
              as="a"
              href={`https://twitter.com/${data.site.siteMetadata.twitterAccount}`}
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiTwitterFill style={{ width: 24, height: 24 }} />
            </NavLink>
          </NavListItem>
        ) : null}
        <NavListItem>
          <NavLink aria-label="Switch Theme" as={ColorModeSwitcher} />
        </NavListItem>
      </NavList>
    </Nav>
  )
}
