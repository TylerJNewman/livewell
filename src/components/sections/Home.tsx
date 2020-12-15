import React from 'react'
import {Box, Flex, Heading} from '@chakra-ui/react'

const title = 'I want'

export default function Home() {
  // const boxSize = useBreakpointValue({base: '160px', md: '240px'})

  return (
    <Flex align="center" direction="column" wrap="nowrap" maxW="1200px" px={8}>
      <Heading as="h1" size="xl" fontWeight="bold" display="block">
        {title}
      </Heading>
      <Flex direction="row" px={8} py={8} justify="center">
        <Flex
          w={[160, 240]}
          h={[160, 240]}
          boxShadow="2xl"
          p="6"
          rounded="xl"
          bg="orange.400"
          mx={[3, 6]}
          my={[4, 4]}
          justify="center"
          align="center"
        >
          <Heading as="h2" size="xl" color="white">
            Mind
          </Heading>
        </Flex>
        <Flex
          w={[160, 240]}
          h={[160, 240]}
          boxShadow="2xl"
          p="6"
          rounded="xl"
          bg="yellow.400"
          mx={[3, 6]}
          my={[4, 4]}
          justify="center"
          align="center"
        >
          <Heading as="h2" size="xl" color="white">
            Body
          </Heading>
        </Flex>
        {/* <Box
          mx="1.5em"
          my="1em"
          w="15em"
          h="15em"
          bg="yellow.200"
          boxShadow="2xl"
          p="6"
          rounded="md"
        >
          1
        </Box>
        <Box
          mx="1.5em"
          my="1em"
          w="15em"
          h="15em"
          bg="yellow.200"
          boxShadow="2xl"
          p="6"
          rounded="md"
        >
          1
        </Box> */}
      </Flex>
    </Flex>
  )
}
