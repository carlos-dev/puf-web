import styled, { DefaultTheme } from 'styled-components'
import { flexbox, margin, padding } from 'components/Theme/styled'

export const Box = styled('div')<DefaultTheme>`
  ${margin};
  ${padding};
  ${flexbox};
  flex-direction: column;
`
