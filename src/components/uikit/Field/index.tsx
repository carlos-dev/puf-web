import React from 'react'
import { Box } from '../Box'
import { Label } from './Label'
import { Input } from './Input'
import { DefaultTheme } from 'styled-components'

type FieldProps = {
  name: string
  label: string
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'
  value: string
  disabled?: boolean
  error?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
} & DefaultTheme

export const Field: React.FC<FieldProps> = ({
  name,
  label,
  type,
  disabled,
  error,
  value,
  onChange,
  onBlur,
  ...props
}) => (
  <Box mb={3} flexbox flexDirection="column" justifyContent="center" {...props}>
    <Label htmlFor={name}>{label}</Label>
    <Input
      value={value}
      type={type}
      name={name}
      id={name}
      disabled={disabled}
      onChange={onChange}
      onBlur={onBlur}
      hasError={!!error}
    />
    {error && (
      <Box color="red" py={1} px={3} fontSize={2}>
        {error}
      </Box>
    )}
  </Box>
)
