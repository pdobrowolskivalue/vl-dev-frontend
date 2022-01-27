import React from 'react'
import { Text } from '@chakra-ui/react'

function Alert({ children, ...field }: { children: string }) {
  return (
    <Text mt={3} fontSize="12px" color="red" {...field}>
      {children}
    </Text>
  )
}

export default Alert
