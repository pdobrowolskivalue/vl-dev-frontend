import React, { useState } from 'react'
import { Flex, Heading, Button, Text, Stack, Checkbox, Box, Avatar } from '@chakra-ui/react'
import { Formik, Form, Field } from 'formik'
import { InputField, Alert } from 'components'
import { IFieldProps, IFormValues } from 'types'
import { NewsletterSignupSchema, http, initialValues } from 'utils'

function App() {
  const [isSubmitted, setSubmitted] = useState<boolean>(false)
  const [timeoutError, setTimeoutError] = useState<boolean>(false)
  const [isSent, setSend] = useState<boolean>(false)

  const handleFormSubmit = async (values: IFormValues) => {
    setSubmitted(true)

    try {
      await http.post('newsletter_sign', values).then(response => {
        if (response.status === 200) {
          setSubmitted(false)
          setSend(true)
        } 
      })
    } catch (error: unknown) {
      if ((error as Error).message.startsWith('timeout')) {
        setTimeoutError(true)
      }
    }
  }

  return (
    <Flex
      px={7}
      width="100wh"
      height="100vh"
      justify={{ base: 'center', md: 'space-between' }}
      align="center"
      direction={{ base: 'column', md: 'row' }}
      backgroundImage="https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      backgroundSize="cover"
    >
      <Text fontSize="4xl" fontWeight="bold" color="white" ml={{ base: 0, md: 12 }}>
        Zapisz się do newslettera <br /> i otrzymaj bonus powitalny!
      </Text>
      <Stack
        mb={2}
        p={8}
        mr={{ base: 0, md: 10 }}
        mt={{ base: 10, md: 0 }}
        direction="column"
        justify="center"
        align="center"
        bgColor="white"
        borderRadius={15}
      >
        <Avatar bg="black" />
        <Heading color="black">Newsletter</Heading>
        <Box minW={{ base: '368px', md: '368px' }} mr={12} mt={3}>
          <Formik
            initialValues={initialValues}
            onSubmit={async (values: IFormValues) => handleFormSubmit(values)}
            validationSchema={NewsletterSignupSchema}
            validateOnChange={false}
            validateOnBlur={false}
          >
            {({ errors }) => (
              <Form>
                <Flex>
                  <Field name="name">
                    {({ field }: IFieldProps) => (
                      <InputField {...field} id="name" placeholder="Imię" mr={2} />
                    )}
                  </Field>
                  <Field name="surname">
                    {({ field }: IFieldProps) => (
                      <InputField {...field} id="surname" placeholder="Nazwisko" />
                    )}
                  </Field>
                </Flex>
                <Field name="address">
                  {({ field }: IFieldProps) => (
                    <InputField {...field} id="address" placeholder="Adres" />
                  )}
                </Field>
                <Field name="email">
                  {({ field }: IFieldProps) => (
                    <InputField {...field} id="email" placeholder="Email" />
                  )}
                </Field>
                <Field name="termsAndConditionsAcceptance">
                  {({ field }: IFieldProps) => (
                    <Flex align="flex-start">
                      <Checkbox {...field} />
                      <Text ml={2} fontSize="12px" fontWeight="500">
                        Akceptuję regulamin i politykę prywatności
                      </Text>
                    </Flex>
                  )}
                </Field>
                {Object.keys(errors).length !== 0 && <Alert>Wypełnij wszystkie pola</Alert>}
                {timeoutError && <Alert>Zbyt długi czas oczekiwania na odpowiedź z serwera</Alert>}
                {isSent && <Alert>Formularz wysłany, dziękujemy</Alert>}
                <Button
                  type="submit"
                  h="58px"
                  w="100%"
                  py={4}
                  mt={6}
                  borderRadius={89}
                  bg="black"
                  color="white"
                  _focus={{ boxShadow: 'none' }}
                  _hover={{ bg: 'black' }}
                  isLoading={isSubmitted && !timeoutError}
                  disabled={timeoutError || isSent}
                >
                  <Text fontSize="14px">Zapisz się</Text>
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Stack>
    </Flex>
  )
}

export default App
