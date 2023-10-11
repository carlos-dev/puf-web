import React, { ChangeEvent, useState } from 'react'
import styled from 'styled-components'
import { Box, Button, Field } from 'components'

const Main = styled(Box)`
  flex: 1;
`

const SignUp: React.FC = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  })

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    console.log(name, value)

    setValues({ ...values, [name]: value })
  }

  const onSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(values)
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
          />
          <Field
            name="email"
            label="Email"
            type="email"
            mb={3}
            onChange={onChange}
          />

          <Field
            name="password"
            label="password"
            type="Senha"
            onChange={onChange}
          />

          <Box flexbox alignItems="center">
            <Button type="submit">Registrar</Button>
          </Box>
        </form>
      </Box>
    </Main>
  )
}

export default SignUp
