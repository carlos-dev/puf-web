import styled from 'styled-components'
import { th } from 'components/Theme/styled'

export const Input = styled('input')`
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 200px;
  color: ${th.color('white')};
  padding: ${th.space(2)}px ${th.space(3)}px;
  font-size: inherit;
`
