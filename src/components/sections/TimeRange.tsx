import React from 'react'
import {Flex, Heading, Wrap, WrapItem} from '@chakra-ui/react'
import Link from 'next/link'
import OptionsWrapper from '../ui/OptionsWrapper'

const title = 'I want'
const options = ['1', '2', '15']
interface Props {
  minutes: string
}

const Option = ({minutes}: Props) => {
  return (
    <Link href="/training" key={minutes}>
      <WrapItem
        w={[160, 240]}
        h={[160, 240]}
        boxShadow="2xl"
        rounded="xl"
        bg="linear-gradient(180deg,#ab95f7 1%,#22c2d2);"
        mx={[3, 6]}
        my={[4, 4]}
        justify="center"
        align="center"
      >
        <Flex
          direction="column"
          px={[9, 20, 16]}
          py={[9, 20, 16]}
          justify="center"
          align="center"
        >
          <Heading as="h1" size="4xl" color="white">
            {minutes}
          </Heading>
          <Heading as="h3" size="lg" color="white">
            {minutes === '1' ? 'minute' : 'minutes'}
          </Heading>
        </Flex>
      </WrapItem>
    </Link>
  )
}

export default function Home() {
  // const boxSize = useBreakpointValue({base: '160px', md: '240px'})

  return (
    <OptionsWrapper>
      <Flex
        align="center"
        direction="column"
        wrap="nowrap"
        maxW="1200px"
        px={8}
      >
        <Heading as="h1" size="xl" fontWeight="bold" display="block">
          {title}
        </Heading>
        <Wrap direction="row" px={8} py={8} justify="center">
          {options.map((minutes) => (
            <Option minutes={minutes} />
          ))}
        </Wrap>
      </Flex>
    </OptionsWrapper>
  )
}
