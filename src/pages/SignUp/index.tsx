import React from 'react'
import styled from 'styled-components'
import { Box, Button, Field } from 'components'
import axios from 'axios'
import * as yup from 'yup'
import { useFormik } from 'formik'

type ISignUpForm = {
  name: string
  email: string
  password: string
}

const Main = styled(Box)`
  flex: 1;
`

const schema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  email: yup.string().email('Email inválido').required('Campo obrigatório'),
  password: yup.string().required('Campo obrigatório'),
})

const SignUp: React.FC = () => {
  const onSubmit = async (values: ISignUpForm) => {
    try {
      const response = await axios.post('http://localhost:3001/users', {
        name: values.name,
        email: values.email,
        password: values.password,
      })
      console.log(response)
    } catch (error: unknown) {
      console.log(error)
      if (error instanceof yup.ValidationError) {
        // const validationError = error as yup.ValidationError
        // setErrors({
        //   ...errors,
        //   [validationError.path as string]: validationError.message,
        // })
      }
    } finally {
      // setSubmitting(false)
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
  } = useFormik<ISignUpForm>({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit,
    validationSchema: schema,
  })
  console.log({ errors, touched })

  return (
    <Main as="main" flexbox justifyContent="center" alignItems="center">
      <Box style={{ width: 380 }}>
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

          <Box flexbox justifyContent="center">
            <Button isLoading={isSubmitting} type="submit">
              Registrar
            </Button>
          </Box>
        </form>
      </Box>
    </Main>
  )
}

export default SignUp
