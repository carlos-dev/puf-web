import React from 'react'
import styled, { DefaultTheme } from 'styled-components'
import { Box, font, Logo } from 'components'
import { ReactComponent as Ilustra } from './ilustra.svg'
import { Form } from './Form'
import axios from 'axios'
import { useAuth } from 'hooks/auth'
import { useNavigate } from 'react-router-dom'

export type IFormData = {
  name: string
  email: string
  password: string
}

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

export const SignUp: React.FC = () => {
  const { login: setAuth } = useAuth()
  const navigate = useNavigate()

  const onSubmit = async (values: IFormData) => {
    try {
      const response = await axios.post('http://localhost:3001/users', {
        name: values.name,
        email: values.email,
        password: values.password,
      })
      setAuth(response.data)
      navigate('/', { replace: true })
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
          <Title textAlign="center">Cadastro</Title>

          <Form onSubmit={onSubmit} />
        </>
      </CenteredBox>
    </Main>
  )
}
