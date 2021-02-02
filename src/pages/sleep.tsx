import {
  useColorMode,
  Button,
  Flex,
  Heading,
  Wrap,
  HStack,
  Select,
  Tag,
  TagLabel,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import Layout from 'src/components/layouts/Layout'

const title = 'I have to wake up at...'
const title2 = 'If you go to bed NOW, you should wake up at...'
const title3 = 'I plan to FALL ASLEEP at...'

const initializeArrayWithRange = (end, start = 0, step = 1) =>
  Array.from(
    {length: Math.ceil((end - start + 1) / step)},
    (v, i) => i * step + start,
  )

const hours = new Array(12).fill(null).map((_, i) => i + 1)
const minutes = initializeArrayWithRange(55, 0, 5).map((m) =>
  m.toString().padStart(2, '0'),
)

const Sleep = () => {
  const {colorMode, toggleColorMode} = useColorMode()
  return (
    <Layout
      overflow="scroll"
      height="100vh"
      lightColor={'orange.300'}
      darkColor={'blue.900'}
    >
      {/* <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button> */}
      <VStack
        align="center"
        justify="center"
        direction="column"
        wrap="nowrap"
        maxW="1200px"
        px={8}
        py={160}
        spacing={16}
      >
        <Heading as="h3" size="md" fontWeight="bold" display="block">
          {title}
        </Heading>
        <HStack spacing={3}>
          <Select w="17vh" placeholder="hour" size="md">
            {hours.map((hour) => (
              <option key={hour} value={hour}>
                {hour}
              </option>
            ))}
          </Select>
          <Select w="17vh" placeholder="minute" size="md">
            {minutes.map((minute) => (
              <option key={minute} value={minute}>
                {minute}
              </option>
            ))}
          </Select>
          <Select w="17vh" size="md">
            <option value="am">AM</option>
            <option value="pm">PM</option>
          </Select>
        </HStack>
        <Button size="lg" borderRadius="full" variant="solid">
          Calculate
        </Button>
        <Heading as="h3" size="md" fontWeight="bold" display="block">
          {title2}
        </Heading>
        <Button size="lg" borderRadius="full" variant="solid">
          ZZZ...
        </Button>
        <Heading as="h3" size="md" fontWeight="bold" display="block">
          {title3}
        </Heading>
        <Button size="lg" borderRadius="full" variant="solid">
          Calculate
        </Button>
      </VStack>
    </Layout>
  )
}

export default Sleep
