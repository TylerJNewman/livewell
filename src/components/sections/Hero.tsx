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

interface Props {
  title: string
  subtitle: string
  image: string
  ctaText: string
  ctaLink: string
}

export default function Hero({
  title,
  subtitle,
  image,
  ctaLink,
  ctaText,
  ...rest
}: Props) {
  return (
    <Flex
      align="center"
      justify={{base: 'center', md: 'space-around', xl: 'space-between'}}
      direction={{base: 'column-reverse', md: 'row'}}
      wrap="nowrap"
      minH="60vh"
      px={8}
      {...rest}
    >
      <Stack
        spacing={4}
        w={{base: '80%', md: '40%'}}
        align={['center', 'center', 'flex-start', 'flex-start']}
      >
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
        <ChakraLink isExternal href={ctaLink} flexGrow={1} mx={2}>
          <Button width="100%" variant="solid" colorScheme="gray">
            {ctaText}
          </Button>
        </ChakraLink>
      </Stack>
      <Box w={{base: '80%', sm: '60%', md: '50%'}} mb={{base: 12, md: 0}}>
        <Image src={image} size="100%" rounded="1rem" shadow="2xl" />
      </Box>
    </Flex>
  )
}

Hero.defaultProps = {
  title: 'React landing page with Chakra UI',
  subtitle:
    'This is the subheader section where you describe the basic benefits of your product',
  image: 'https://source.unsplash.com/collection/404339/800x600',
  ctaText: 'Create your account now',
  ctaLink: '/signup',
}
