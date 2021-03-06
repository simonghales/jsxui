import * as React from 'react'

import { useTokens } from './Tokens'
import { SharedProps } from './index'

export type GraphicProps = {
  name?: string
  scale?: number | 'auto'
  children?: React.ReactNode
} & SharedProps

export function Graphic(props) {
  const {
    children,
    name,
    scale,
    visible = true,
    // width,
    // height,
    ...restProps
  } = props
  const { graphics } = useTokens()
  // if (scale === 'auto') {
  //   style.preserveAspectRatio = 'xMinYMin meet'
  //   style.shapeRendering = 'crispEdges'
  // } else {
  //   style.width = width * scale
  //   style.height = height * scale
  // }
  if (visible === false) {
    return null
  }
  return <svg {...restProps}>{children}</svg>
}
