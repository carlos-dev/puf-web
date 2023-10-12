import React from 'react'
import styled from 'styled-components'
import { th } from 'components/Theme'
import { Spinner } from 'components/uikit/Spinner'

type ButtonProps = {
  children: React.ReactNode
  isLoading?: boolean
  disabled?: boolean
}

const StyledButton = styled('button')`
  background-color: ${th.color('white')};
  border: none;
  border-radius: 200px;
  color: ${th.color('black')};
  padding: ${th.space(2)}px ${th.space(8)}px;
  font-size: inherit;

  ${props => props.disabled && `opacity: 0.5;`}
`

export const Button: React.FC<ButtonProps> = ({
  children,
  isLoading,
  disabled,
}) => (
  <StyledButton disabled={disabled || isLoading}>
    {isLoading ? <Spinner /> : children}
  </StyledButton>
)
