import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql, Link, withPrefix } from 'gatsby'
import styled from '@xstyled/styled-components'
// eslint-disable-next-line import/no-unresolved
import { useLocation } from '@reach/router'

const SideNavQuery = graphql`
  query SideNavQuery {
    allMdx(filter: { fields: { pageType: { eq: "doc" }, title: { ne: "" } } }) {
      edges {
        node {
          id
          fields {
            title
            pageType
            section
            order
            slug
          }
          frontmatter {
            hide
          }
        }
      }
    }

    site {
      siteMetadata {
        sections
      }
    }
  }
`

const createOrFindGroup = (name, groups) => {
  const existingGroup = groups.find((group) => group.name === name)
  if (existingGroup) return existingGroup

  const group = { name, nodes: [] }
  groups.push(group)
  return group
}

const DEFAULT_ORDER_VALUE = -9999

const sortNodes = (a, b) => {
  const diff =
    a.fields.order !== DEFAULT_ORDER_VALUE &&
    b.fields.order !== DEFAULT_ORDER_VALUE
      ? a.fields.order - b.fields.order
      : a.fields.order !== DEFAULT_ORDER_VALUE
      ? -1
      : b.fields.order !== DEFAULT_ORDER_VALUE
      ? 1
      : a.fields.title.localeCompare(b.fields.title)
  return diff === 0 ? 0 : diff > 0 ? 1 : -1
}

const groupNodes = (nodes) =>
  nodes.reduce((groups, node) => {
    if (!node.fields.title) return groups
    const group = createOrFindGroup(node.fields.section || '', groups)
    group.nodes.push(node)
    group.nodes.sort(sortNodes)
    return groups
  }, [])

const Nav = styled.nav`
  padding: 0 3 0;
`

const NavGroup = styled.div`
  margin-bottom: 4;
`

const NavGroupTitle = styled.h4`
  font-size: 14;
  font-weight: 500;
  color: on-background-light;
  text-transform: uppercase;
  margin: 0 0 1 0;
    
  // CollapseIcon
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  &:hover {
    color: on-background;
  }
`

const CollapseIcon = styled.span`
  font-size: 12;
  transition: transform 0.2s ease;
  transform: ${props => props.isExpanded ? 'rotate(90deg)' : 'rotate(0deg)'};
`

const NavGroupMenu = styled.ul`
  margin: 0;
  padding: 0;
  border-left: 1;
  border-left-color: layout-border;
  max-height: ${props => props.isExpanded ? '1000px' : '0'};
  overflow: ${props => props.isExpanded ? 'visible' : 'hidden'};
  transition: max-height 0.1s ease;
`

const NavGroupMenuItem = styled.li`
  list-style-type: none;
  margin: 2 0 0 -2px;
  padding: 0;
  font-size: 14;
  font-weight: 500;

  a {
    color: on-background-light;
    display: block;
    transition: fast;
    transition-property: color, border-color;
    padding: 2px 0 2px 2;
    border-left: 3;
    border-color: transparent;
    text-decoration: none;
    opacity: 0.85;

    &:hover {
      color: on-background;
      opacity: 1;
    }

    &[aria-current='page'] {
      font-weight: 600;
      border-color: primary;
      color: on-background;
      opacity: 1;
    }
  }
`

const sortGroupsWithConfig = (section) => (a, b) => {
  const indexA = section.indexOf(a.name)
  const indexB = section.indexOf(b.name)
  const diff = indexA - indexB
  return diff === 0 ? 0 : diff < 0 ? -1 : 1
}

export function useSideNavState() {
  const data = useStaticQuery(SideNavQuery)
  return React.useMemo(() => {
    // Filter out pages with hide: true in frontmatter
    const visibleNodes = data.allMdx.edges
      .map((edge) => edge.node)
      .filter((node) => !node.frontmatter?.hide)
    
    const navGroups = groupNodes(visibleNodes)
    navGroups.sort(sortGroupsWithConfig(data.site.siteMetadata.sections))

    // Filter out specific sections that should not appear in sidebar
    const hiddenSections = ['DDD Examples', 'EDA Examples']
    const filteredNavGroups = navGroups.filter(group => !hiddenSections.includes(group.name))

    return { navGroups: filteredNavGroups }
  }, [data])
}

export function useSideNavPrevNext({ navGroups }) {
  const { pathname } = useLocation()
  // Only include visible nav groups for prev/next navigation
  const hiddenSections = [] // ['DDD Examples', 'EDA Examples']
  const visibleNavGroups = navGroups.filter(group => !hiddenSections.includes(group.name))
  const nodes = visibleNavGroups.flatMap((group) => group.nodes)
  const nodeIndex = nodes.findIndex(
    (node) => withPrefix(node.fields.slug) === pathname,
  )
  return {
    prev: nodeIndex > -1 ? nodes[nodeIndex - 1] : null,
    next: nodeIndex > -1 ? nodes[nodeIndex + 1] : null,
  }
}

export function SideNav({ navGroups }) {
  const { pathname } = useLocation()

  const [expandedSections, setExpandedSections] = useState(() => {
    // Initialize sections: collapsible sections (>3 items) start expanded
    const initial = {}
    navGroups.forEach((group) => {
      const isZenWaveSDK = group.nodes.some(node => node.fields.slug.startsWith('/docs/zenwave-sdk/'))
      const isSDKPlugins = group.nodes.some(node => node.fields.slug.startsWith('/zenwave-sdk/plugins'))

      if (isZenWaveSDK) {
        initial[group.name] = true // ZenWave SDK starts expanded
      } else if (isSDKPlugins) {
        initial[group.name] = false // SDK Plugins starts collapsed
      } else {
        initial[group.name] = group.nodes.length > 3 // Other sections follow original logic
      }
    })
    return initial
  })

  // Update expanded sections when pathname changes
  useEffect(() => {
    setExpandedSections(prev => {
      // console.log(`Pathname changed to: ${pathname}`, prev)
      const newState = { ...prev }
      if(pathname.startsWith('/zenwave-sdk/')) {
        newState['SDK Plugins'] = true
      }
      if(pathname.startsWith('/docs/zenwave-sdk/')) {
        newState['ZenWave SDK'] = true
      }
      return newState
    })
  }, [pathname, navGroups]) // Add upMd to dependencies

  const toggleSection = (groupName) => {
    const currentGroup = navGroups.find(group => group.name === groupName)

    setExpandedSections(prev => {
      const newState = { ...prev }
      newState[groupName] = !prev[groupName]
      return newState
    })
  }

  return (
    <Nav>
      {navGroups.map((navGroup) => {
        const isCollapsible = navGroup.nodes.length > 3
        const isExpanded = expandedSections[navGroup.name]

        return (
          <NavGroup key={navGroup.name}>
            <NavGroupTitle 
              onClick={isCollapsible ? () => toggleSection(navGroup.name) : undefined}
              style={{ cursor: isCollapsible ? 'pointer' : 'default' }}
            >
              {navGroup.name}
              {isCollapsible && (
                <CollapseIcon isExpanded={isExpanded}>
                  ▶
                </CollapseIcon>
              )}
            </NavGroupTitle>
            <NavGroupMenu isExpanded={isCollapsible ? isExpanded : true}>
              {navGroup.nodes.map((page) => (
                <NavGroupMenuItem key={page.id}>
                  <Link to={page.fields.slug}>{page.fields.title}</Link>
                </NavGroupMenuItem>
              ))}
            </NavGroupMenu>
          </NavGroup>
        )
      })}
    </Nav>
  )
}
