import React from 'react'
import { Box } from '../Box'
import { Label } from './Label'
import { Input } from './Input'
import { DefaultTheme } from 'styled-components'

type FieldProps = {
  name: string
  label: string
  type?: string
  disabled?: boolean
  error?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
} & DefaultTheme

export const Field: React.FC<FieldProps> = ({
  name,
  label,
  type,
  disabled,
  error,
  ...props
}) => (
  <Box mb={3} flexbox flexDirection="column" justifyContent="center" {...props}>
    <Label htmlFor={name}>{label}</Label>
    <Input
      type={type}
      name={name}
      id={name}
      onChange={props.onChange}
      disabled={disabled}
    />
    {error && (
      <Box color="red" py={1} px={3} fontSize={2}>
        error
      </Box>
    )}
  </Box>
)
