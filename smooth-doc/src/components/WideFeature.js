import styled, {up, css, x, useColorMode} from '@xstyled/styled-components'
import React from "react";

export const WideFeatureSection = React.forwardRef((props, ref) => (
    <x.section
        ref={ref}
        py={4}
        borderTop={1}
        borderBottom={1}
        borderColor="layout-border"
        {...props}
    />
))

export const WideFeature = styled.divBox`
  display: block;
  ${up(
      'md',
      css`
        margin: 0 20px;
        border-top: 1px dashed;
        border-bottom: 1px dotted;
        border-color: var(--xstyled-colors-layout-border,#d4d4d8);
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
      `,
  )})
`

export const WideFeatureText = styled.divBox`
  padding: 1rem;
  grid-column-start: span 2;

  font-size: 18;
  ${up(
      'md',
      css`
        font-size: 20;
        padding: 3rem;
        padding-top: 2rem;
      `,
  )}

  ${up(
      'xl',
      css`
      font-size: 24;
    `,
  )}
`
const WideFeatureImageContainer = styled.divBox`
  padding: 1rem;
  text-align: center;
`

const InnerImage = styled.imgBox`
  display: inline-block;
  //max-width: 300px;
`

const src = (props, colorMode) => {
  return colorMode === 'dark'? props.dark || props.src : props.light || props.src;
}
export const WideFeatureImage = React.forwardRef((props, ref) => (
    <WideFeatureImageContainer className={props.className}>
      <InnerImage ref={ref} src={src(props, useColorMode()[0])} {...props} />
    </WideFeatureImageContainer>
))
