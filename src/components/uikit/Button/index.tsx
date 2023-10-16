import React from 'react'
import styled, { DefaultTheme } from 'styled-components'
import { margin, th } from 'components/Theme'
import { Spinner } from 'components/uikit/Spinner'

type ButtonProps = {
  children: React.ReactNode
  isLoading?: boolean
  disabled?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  DefaultTheme

const StyledButton = styled('button')<DefaultTheme>`
  background-color: ${th.color('white')};
  border: none;
  border-radius: 200px;
  color: ${th.color('black')};
  padding: ${th.space(3)}px ${th.space(9)}px;
  font-size: inherit;
  ${margin}
  ${props => props.disabled && `opacity: 0.5;`}
`

export const Button: React.FC<ButtonProps> = ({
  children,
  isLoading,
  disabled,
  ...props
}) => (
  <StyledButton disabled={disabled || isLoading} {...props}>
    {isLoading ? <Spinner /> : children}
  </StyledButton>
)
