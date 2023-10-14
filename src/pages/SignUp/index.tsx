import React, { ChangeEvent, useState } from 'react'
import styled from 'styled-components'
import { Box, Button, Field } from 'components'
import axios from 'axios'

const Main = styled(Box)`
  flex: 1;
`

const SignUp: React.FC = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setValues({ ...values, [name]: value })
  }

  const onSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    try {
      const response = await axios.post('http://localhost:3001/users', {
        name: values.name,
        email: values.email,
        password: values.password,
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Main as="main" flexbox justifyContent="center" alignItems="center">
      <Box style={{ width: 380 }}>
        <form onSubmit={onSubmit}>
          <Field
            name="name"
            label="Nome"
            type="text"
            mb={3}
            flex={1}
            onChange={onChange}
            disabled={isLoading}
          />
          <Field
            name="email"
            label="Email"
            type="email"
            mb={3}
            onChange={onChange}
            disabled={isLoading}
          />

          <Field
            name="password"
            label="Senha"
            type="password"
            onChange={onChange}
            disabled={isLoading}
          />

          <Box flexbox alignItems="center">
            <Button isLoading={isLoading}>Registrar</Button>
          </Box>
        </form>
      </Box>
    </Main>
  )
}

export default SignUp
