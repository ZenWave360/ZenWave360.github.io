/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { x } from '@xstyled/styled-components'

export const Orange = React.forwardRef((props, ref) => {
  return <x.strong ref={ref} className="orange" {...props} />
})
