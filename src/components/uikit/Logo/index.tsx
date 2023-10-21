import React from 'react'
import { ReactComponent as Svg } from './logo.svg'
import { Box } from '../Box'

type LogoProps = object & React.ComponentProps<typeof Box>

export const Logo: React.FC<LogoProps> = props => (
  <Box {...props}>
    <Svg />
  </Box>
)
