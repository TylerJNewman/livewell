import React from 'react'
import {
  AspectRatio,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react'
import Link from 'next/link'

interface Desc {
  description: any[]
}

interface Props {
  title: any[]
  description: any[]
  videolink1: any
}

function Description({description}: Desc) {
  return (
    <>
      {description.map((desc) => {
        return <div>{desc.text}</div>
      })}
    </>
  )
}

function Feature({title, description, videolink1}: Props) {
  console.log(description)
  return (
    <Box px={['0px', '0px', '50px', '50px']}>
      <AspectRatio ratio={1065 / 600}>
        <iframe title={title[0].text} src={videolink1.url} allowFullScreen />
      </AspectRatio>
      <Flex
        justify="center"
        align="center"
        direction="column"
        px={['15px', '30px', '0px']}
        mt={['25px', '25px', '45px']}
      >
        <Heading as="h2" size="2xl" w="100%">
          {title[0].text}
        </Heading>
        <Text mt={4} w="100%">
          <Description description={description} />
        </Text>
        <Center mb="100px">
          <Link href="/complete">
            <Button
              width={['100%', '100%', '100%', 'auto']}
              variant="solid"
              mt={8}
              colorScheme="gray"
              size="lg"
              px={16}
            >
              <Heading as="h4" size="md">
                Complete
              </Heading>
            </Button>
          </Link>
        </Center>
      </Flex>
    </Box>
  )
}

export default Feature
