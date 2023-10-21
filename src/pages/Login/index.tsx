import React from 'react'
import styled, { DefaultTheme } from 'styled-components'
import { Box, font, Logo } from 'components'
import { ReactComponent as Ilustra } from './ilustra.svg'
import { Form } from './Form'

const Main = styled(Box)`
  display: flex;
  flex: 1;
`

const Title = styled.h2<DefaultTheme>`
  ${font}
`

type CenteredBoxProps = {
  children: React.ReactElement
} & DefaultTheme

const CenteredBox = ({ children, ...props }: CenteredBoxProps) => (
  <Box
    {...props}
    flex={1}
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
  >
    <Box style={{ width: 445 }} flexDirection="column">
      {children}
    </Box>
  </Box>
)

const Login: React.FC = () => {
  return (
    <Main as="main">
      <CenteredBox bg="black">
        <>
          <Logo p={6} justifyContent="center" />

          <Ilustra />
        </>
      </CenteredBox>

      <CenteredBox>
        <>
          <Title textAlign="center">Login</Title>

          <Form />
        </>
      </CenteredBox>
    </Main>
  )
}

export default Login
