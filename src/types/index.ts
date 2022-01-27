import { FieldInputProps } from 'formik'

export interface IFieldProps {
  field: FieldInputProps<string>
}

export interface IFormValues {
  address: string
  email: string
  name: string
  surname: string
  termsAndConditionsAcceptance: boolean
}

export interface IInputProps {
  id: string
  placeholder: string
  mr?: number
}
