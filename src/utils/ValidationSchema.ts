import * as Yup from 'yup'
import { IFormValues } from 'types'

const NewsletterSignupSchema: Yup.SchemaOf<IFormValues> = Yup.object().shape({
  name: Yup.string().required('Required'),
  surname: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
  email: Yup.string().required('Required'),
  termsAndConditionsAcceptance: Yup.boolean().required('Required').oneOf([true]),
})

export default NewsletterSignupSchema
