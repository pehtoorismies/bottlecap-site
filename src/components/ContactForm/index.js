import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Box, Text, Flex } from 'rebass/styled-components'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import qs from 'qs'
import axios from 'axios'
import { navigate } from 'gatsby'

const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Please check your email address')
    .required('Email is required'),
  message: Yup.string().required('Message is required'),
})

const Heading = styled(Text)`
  font-family: Eczar;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.44;
  letter-spacing: -0.17px;
  color: #000000;
`

const RED = 'rgb(167, 88, 93)'

const common = css`
  font-family: 'Roboto Mono';
  font-size: 14px;
  line-height: 1.71;
  border: solid 2px ${(props) => (props.hasError ? RED : 'black')};
  color: ${(props) => (props.hasError ? RED : 'black')};
  width: 100%;
  padding: 4px 17px;
  box-sizing: border-box;
  background: none;

  &::placeholder {
    color: ${(props) => (props.hasError ? RED : 'black')};
  }

  &:focus {
    outline: none;
  }
`

const InputField = styled.input`
  ${common}
  height: 56px;
`

const TextArea = styled.textarea`
  ${common}
  height: 140px;
  max-width: 100%;
`

const SubmitButton = styled.button`
  width: 100%;
  background: black;
  height: 62px;
  font-family: 'Roboto Mono';
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.75;
  letter-spacing: 2px;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;

  &:disabled {
    background: grey;
    cursor: not-allowed;
  }
`

const ErrorNote = styled(Text)`
  font-family: 'Roboto Mono';
  color: ${RED};
  font-size: 14px;
  padding: 2px 0;
`

const PropTypes = {}
const DefaultProps = {}

const CustomInputComponent = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors },
  placeholder,
  isTextArea = false,
}) => {
  const hasError = touched[field.name] && errors[field.name]
  const InputCmp = isTextArea ? TextArea : InputField
  return (
    <Box my={2}>
      <InputCmp {...field} placeholder={placeholder} hasError={hasError} />
      {touched[field.name] && errors[field.name] && (
        <ErrorNote>{errors[field.name]}</ErrorNote>
      )}
    </Box>
  )
}

// name="contact" method="POST" data-netlify="true"

const ContactForm = () => {
  const [generalError, setGeneralError] = useState(null)

  return (
    <Box width="100%">
      <Flex justifyContent="flex-end">
        <Heading>Contact</Heading>
      </Flex>
      <Formik
        initialValues={{
          'bot-field': '',
          'form-name': 'contact',
          email: '',
          name: '',
          company: '',
          message: '',
        }}
        validationSchema={ContactSchema}
        onSubmit={(values, actions) => {
          const data = qs.stringify(values)

          const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data,
            url: '/',
          }

          axios(options)
            .then(() => {
              actions.resetForm()
              navigate('/contact-success')
            })
            .catch((error) => {
              // eslint-disable-next-line no-console
              console.error(error)
              setGeneralError('Problems sending form, try again later')
            })
            .finally(() => {
              actions.setSubmitting(false)
            })
        }}
        render={({ isSubmitting }) => (
          <Form
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            name="contact"
          >
            <Field type="hidden" name="bot-field" />
            <Field hidden name="form-name" />
            <Field
              component={CustomInputComponent}
              placeholder="Name*"
              name="name"
            />
            <Field
              component={CustomInputComponent}
              placeholder="Email address*"
              type="email"
              name="email"
            />
            <Field
              component={CustomInputComponent}
              placeholder="Company"
              name="company"
            />
            <Field
              component={CustomInputComponent}
              placeholder="Message*"
              name="message"
              isTextArea
            />
            <ErrorNote my={3}>{generalError}</ErrorNote>
            <SubmitButton type="submit" disabled={isSubmitting}>
              send
            </SubmitButton>
          </Form>
        )}
      />
    </Box>
  )
}

ContactForm.propTypes = PropTypes
ContactForm.defaultProps = DefaultProps

export default ContactForm
