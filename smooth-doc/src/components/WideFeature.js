import styled, {up, css, x, useColorMode} from '@xstyled/styled-components'
import React from "react";

export const WideFeatureText = styled.divBox`
  width: 66%;
  font-size: 18;
  margin: 3 0;
  
  list-style: circle;

  ${up(
      'md',
      css`
        font-size: 20;
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
  display: inline-block;
`

const InnerImage = styled.imgBox`
  display: inline-block;
  max-width: 400px;
`

const src = (props, colorMode) => {
  return colorMode === 'dark'? props.dark || props.src : props.light || props.src;
}
export const WideFeatureImage = React.forwardRef((props, ref) => (
    <WideFeatureImageContainer>
      <InnerImage ref={ref} src={src(props, useColorMode()[0])} {...props} />
    </WideFeatureImageContainer>
))
