import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import styled, { DefaultTheme } from 'styled-components'
import axios, { AxiosResponse } from 'axios'
import { Box, Button, Field, font, margin } from 'components'

type FormProps = {
  username: string
  password: string
}

const Link = styled(Box)<DefaultTheme>`
  ${font};
  ${margin}
`

const schema = yup.object().shape({
  username: yup.string().email('Email inválido').required('Campo obrigatório'),
  password: yup.string().required('Campo obrigatório'),
})

export const Form: React.FC = () => {
  const onSubmit = async (values: FormProps) => {
    try {
      const response: AxiosResponse<FormProps> = await axios.post(
        'http://localhost:3001/users',
        {
          auth: values,
        }
      )
      console.log(response)
    } catch (error: unknown) {
      console.log(error)
    }
  }

  const {
    values,
    errors,
    isSubmitting,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useFormik<FormProps>({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit,
    validationSchema: schema,
  })

  return (
    <form onSubmit={handleSubmit}>
      <Field
        id="email"
        name="username"
        label="Email"
        type="email"
        value={values.username}
        mb={3}
        disabled={isSubmitting}
        error={touched.username ? errors.username : undefined}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <Field
        id="password"
        label="Senha"
        name="password"
        type="password"
        value={values.password}
        error={touched.password ? errors.password : undefined}
        disabled={isSubmitting}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <Box flexDirection="column" justifyContent="center" alignItems="center">
        <Button isLoading={isSubmitting} type="submit" m={2}>
          Entrar
        </Button>

        <Box fontSize={1} color="gray">
          Não possui cadastro?{' '}
          <Link
            href="#"
            as="a"
            m={2}
            fontSize={1}
            color="gray"
            fontWeight="bold"
          >
            Cadastre-se
          </Link>
        </Box>
      </Box>
    </form>
  )
}
