import React from 'react'
import ReactDOM from 'react-dom'

import { ChakraProvider, Flex, Heading } from '@chakra-ui/react'

import '@/main/index.css'

ReactDOM.render(
  <ChakraProvider>
    <Flex align="center" justify="center" height="100vh">
      <Heading>
        Hello Crypto
      </Heading>
    </Flex>
  </ChakraProvider>,
  document.getElementById('root')
)
