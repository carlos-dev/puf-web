import styled, { DefaultTheme } from 'styled-components'
import {
  background,
  flexbox,
  font,
  margin,
  padding,
} from 'components/Theme/styled'

export const Box = styled('div')<DefaultTheme>`
  display: flex;
  ${margin};
  ${padding};
  ${flexbox};
  ${font};
  ${background};
`
