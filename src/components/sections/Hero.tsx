import React from 'react'
import {
  Box,
  Button,
  Flex,
  Image,
  Heading,
  Stack,
  Link as ChakraLink,
} from '@chakra-ui/react'

const header = 'Recover in Minutes'
const title = 'Practice the Best You'
const subtitle =
  'Our app-based program applies principles of modern science to make your body and mind operate in peak condition.'
const image = '/sands.jpg'

export default function Hero() {
  return (
    <Flex
      align="center"
      justify={{base: 'center', md: 'space-around', xl: 'space-between'}}
      direction={{base: 'column-reverse', md: 'row'}}
      wrap="nowrap"
      minH="60vh"
      maxW="1200px"
      px={8}
      mt={175}
    >
      <Stack
        spacing={4}
        w={{base: '80%', md: '40%'}}
        align={['center', 'center', 'flex-start', 'flex-start']}
      >
        <Heading
          as="h3"
          size="sm"
          color="primary.800"
          textAlign={['center', 'center', 'left', 'left']}
        >
          {header}
        </Heading>
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="primary.800"
          textAlign={['center', 'center', 'left', 'left']}
        >
          {title}
        </Heading>
        <Heading
          as="h2"
          size="md"
          color="primary.800"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={['center', 'center', 'left', 'left']}
        >
          {subtitle}
        </Heading>
        <ChakraLink href="/" flexGrow={1} mx={2}>
          <Button size="lg" colorScheme="orange">
            Try for free
          </Button>
        </ChakraLink>
      </Stack>
      <Box w={{base: '80%', sm: '60%', md: '50%'}} mb={{base: 12, md: 0}}>
        <Image src={image} size="100%" rounded="1rem" shadow="2xl" />
      </Box>
    </Flex>
  )
}
