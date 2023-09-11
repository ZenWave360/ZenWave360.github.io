/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import styled, { useColorMode, th, x } from '@xstyled/styled-components'

const ImageContainer = styled.div`
   text-align: ${props => props.align};
`
const InnerImage = styled.img`
  display: inline-block;
`
const src = (props, colorMode) => {
    console.log('colorMode', colorMode)
    return colorMode === 'dark'? props.dark || props.src : props.light || props.src;
}
export const Image = React.forwardRef((props, ref) => (
    <ImageContainer align={props.align || 'center'}>
        <InnerImage ref={ref} src={src(props, useColorMode()[0])} {...props} />
    </ImageContainer>
))
