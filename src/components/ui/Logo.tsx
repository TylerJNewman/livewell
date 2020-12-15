import React from 'react'
import {Box, Text, HStack, Icon} from '@chakra-ui/react'
import LogoSvg from 'src/components/LogoSvg'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/app">
      <HStack spacing="16px" cursor="pointer">
        {/* <Image boxSize="1.875rem" src={logo} /> */}
        <Icon as={LogoSvg} boxSize="1.875rem" />
        <Box>
          <Text fontSize="2xl" fontWeight="bold">
            livewell.ai
          </Text>
        </Box>
      </HStack>
    </Link>
  )
}
