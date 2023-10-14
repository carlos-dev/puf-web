import styled, { DefaultTheme } from 'styled-components'
import { flexbox, font, margin, padding } from 'components/Theme/styled'

export const Box = styled('div')<DefaultTheme>`
  ${margin};
  ${padding};
  ${flexbox};
  ${font};
`
