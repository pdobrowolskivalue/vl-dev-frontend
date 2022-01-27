import React from 'react'
import { Input } from '@chakra-ui/react'
import { IInputProps } from 'types'

function InputField({ id, placeholder, mr, ...field }: IInputProps) {
  return (
    <Input
      {...field}
      id={id}
      placeholder={placeholder}
      h="58px"
      mb={6}
      mr={mr}
      border="1px solid #CCD0D7"
      borderRadius="6px"
      boxShadow="0 3px 4px rgba(0, 0, 0, 0.06)"
      fontSize="14px"
      _focus={{ boxShadow: 'none' }}
      _placeholder={{ color: 'formTextGrey' }}
    />
  )
}

export default InputField
