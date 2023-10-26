import React from 'react'
import styled, { DefaultTheme } from 'styled-components'
import { Box, font, Logo } from 'components'
import { ReactComponent as Ilustra } from './ilustra.svg'
import { Form } from './Form'
import axios from 'axios'

type LoginProps = {
  onSuccess: (logged: boolean) => void
}

type FormProps = {
  username: string
  password: string
}

type CenteredBoxProps = {
  children: React.ReactElement
} & DefaultTheme

const Main = styled(Box)`
  display: flex;
  flex: 1;
`

const Title = styled.h2<DefaultTheme>`
  ${font}
`

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

const Login: React.FC<LoginProps> = ({ onSuccess }) => {
  const onSubmit = async (values: FormProps) => {
    try {
      const response = await axios.get('http://localhost:3001/login', {
        auth: values,
      })

      onSuccess(response.data)
      console.log(response)
    } catch (error: unknown) {
      console.log(error)
    }
  }

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

          <Form onSubmit={onSubmit} />
        </>
      </CenteredBox>
    </Main>
  )
}

export default Login
