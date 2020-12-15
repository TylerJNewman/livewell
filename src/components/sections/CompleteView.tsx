import React from 'react'
import {Center, Flex, Heading} from '@chakra-ui/react'
import CompleteWrapper from '../ui/CompleteWrapper'

const CompleteCard = () => {
  return (
    <Flex
      flexGrow={0}
      flexShrink={1}
      maxW="650px"
      boxShadow="2xl"
      rounded="xl"
      mx={[3, 6]}
      my={[4, 4]}
      justify="center"
      align="center"
      py={[32, 32, 48, 48]}
      w="100%"
    >
      <Center w="100%" h="100%" p="1em 2em">
        <Heading as="h2" size="xl">
          +10 Recovery XP!
        </Heading>
      </Center>
    </Flex>
  )
}

const Title = ({title}: {title: string}) => {
  return (
    <Heading
      as="h1"
      size="xl"
      fontWeight="bold"
      color="primary.800"
      textAlign={['center', 'center', 'left', 'left']}
    >
      {title}
    </Heading>
  )
}

export default function Home() {
  return (
    <CompleteWrapper>
      <Title title="Congrats!" />
      <CompleteCard />
    </CompleteWrapper>
  )
}
