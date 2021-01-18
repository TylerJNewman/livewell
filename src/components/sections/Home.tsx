import React from 'react'
import {Center, Flex, Heading, Wrap, WrapItem} from '@chakra-ui/react'
import Link from 'next/link'
import OptionsWrapper from '../ui/OptionsWrapper'

const title = 'I want'
const options = [
  {content: 'Body', color: 'yellow.400'},
  {content: 'Mind', color: 'orange.400'},
]
interface Props {
  content: string
  color: string
}

const Option = ({content, color}: Props) => {
  return (
    <Link href={`/range/?category=${content}`} key={content}>
      <WrapItem
        w={[160, 240]}
        h={[160, 240]}
        boxShadow="2xl"
        rounded="xl"
        bg={color}
        mx={[3, 6]}
        my={[4, 4]}
        justify="center"
        align="center"
      >
        <Center w="100%" h="100%">
          <Heading as="h2" size="xl" color="white">
            {content}
          </Heading>
        </Center>
      </WrapItem>
    </Link>
  )
}

export default function Home() {
  return (
    <OptionsWrapper>
      <Flex
        align="center"
        justify="center"
        direction="column"
        wrap="nowrap"
        maxW="1200px"
        px={8}
      >
        <Heading as="h1" size="xl" fontWeight="bold" display="block">
          {title}
        </Heading>
        <Wrap direction="row" px={8} py={8} justify="center">
          {options.map(({content, color}) => (
            <Option key={content} content={content} color={color} />
          ))}
        </Wrap>
      </Flex>
    </OptionsWrapper>
  )
}
