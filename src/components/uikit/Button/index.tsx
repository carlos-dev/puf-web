import styled from 'styled-components'
import { th } from 'components/Theme'

export const Button = styled('button')`
  background-color: ${th.color('white')};
  border: none;
  border-radius: 200px;
  color: ${th.color('black')};
  padding: ${th.space(2)}px ${th.space(8)}px;
  font-size: inherit;
`
