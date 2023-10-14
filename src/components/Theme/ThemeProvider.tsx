import React from 'react'
import { ThemeProvider } from 'styled-components'
import { definitions } from './definitions'
import { GlobalStyle } from './GlobalStyle'

type ThemeProps = {
  children: React.ReactNode
}

export const Theme: React.FC<ThemeProps> = ({ children }) => {
  return (
    <ThemeProvider theme={definitions}>
      <GlobalStyle bg="raisinBlack" color="white" fontSize={3} />
      {children}
    </ThemeProvider>
  )
}
