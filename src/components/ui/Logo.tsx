import React from 'react'
import {Box, Text, Image, HStack} from '@chakra-ui/react'

const logo = '/logo.png'

export default function Logo() {
  return (
    <HStack spacing="16px">
      <Image boxSize="1.875rem" src={logo} />
      <Box>
        <Text fontSize="3xl" fontWeight="bold">
          livewell.ai
        </Text>
      </Box>
    </HStack>
  )
}
