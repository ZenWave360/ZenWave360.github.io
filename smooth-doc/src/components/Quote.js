import React from 'react'
import styled, { up, css, x } from '@xstyled/styled-components'
import { ScreenContainer } from './ScreenContainer'

const Cite = styled(x.cite)`
    display: block;
    text-align: right;
    margin-top: 1rem;
`

export const Quote = React.forwardRef((props, ref) => {
    return <x.blockquote ref={ref} className="quote" {...props} />
})

export const QuoteAuthor = React.forwardRef((props, ref) => {
    return <Cite ref={ref} {...props} />
})
