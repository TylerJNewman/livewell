import React from 'react'
import {Box, Text, HStack, Icon} from '@chakra-ui/react'
import LogoSvg from 'src/components/LogoSvg'

export default function Logo() {
  return (
    <HStack spacing="16px">
      {/* <Image boxSize="1.875rem" src={logo} /> */}
      <Icon as={LogoSvg} boxSize="1.875rem" />
      <Box>
        <Text fontSize="3xl" fontWeight="bold">
          livewell.ai
        </Text>
      </Box>
    </HStack>
  )
}
