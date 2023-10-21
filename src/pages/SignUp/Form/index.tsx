import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import styled, { DefaultTheme } from 'styled-components'
import axios from 'axios'
import { Box, Button, Field, font, margin } from 'components'

type FormProps = {
  name: string
  email: string
  password: string
}

const Link = styled(Box)<DefaultTheme>`
  ${font};
  ${margin}
`

const schema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  email: yup.string().email('Email inválido').required('Campo obrigatório'),
  password: yup.string().required('Campo obrigatório'),
})

export const Form: React.FC = () => {
  const onSubmit = async (values: FormProps) => {
    try {
      const response = await axios.post('http://localhost:3001/users', {
        name: values.name,
        email: values.email,
        password: values.password,
      })
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
      name: '',
      email: '',
      password: '',
    },
    onSubmit,
    validationSchema: schema,
  })

  return (
    <form onSubmit={handleSubmit}>
      <Field
        id="name"
        name="name"
        label="Nome"
        type="text"
        value={values.name}
        mb={3}
        flex={1}
        disabled={isSubmitting}
        error={touched.name ? errors.name : undefined}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <Field
        id="email"
        name="email"
        label="Email"
        type="email"
        value={values.email}
        mb={3}
        disabled={isSubmitting}
        error={touched.email ? errors.email : undefined}
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
          Registrar
        </Button>

        <Link href="#" as="a" m={2} fontSize={1} color="gray" fontWeight="bold">
          já sou cadastrado
        </Link>
      </Box>
    </form>
  )
}
