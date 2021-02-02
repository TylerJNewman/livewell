import {
  useColorMode,
  Button,
  Heading,
  HStack,
  Select,
  VStack,
  Center,
  Text,
} from '@chakra-ui/react'
import React, {useState} from 'react'
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

const Form = ({handleSleepEstimate}) => (
  <VStack
    align="center"
    justify="center"
    direction="column"
    wrap="nowrap"
    maxW="1200px"
    px={8}
    py={160}
    spacing={12}
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
    <Button
      size="lg"
      borderRadius="full"
      variant="solid"
      onClick={handleSleepEstimate}
    >
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
)

const SleepView = ({calculateAgain}) => {
  return (
    <VStack
      align="center"
      justify="center"
      direction="column"
      wrap="nowrap"
      maxW="1200px"
      px={8}
      py={160}
      spacing={6}
    >
      <Text fontSize="130%">
        You should try to <b>fall asleep</b> at one of the following times:
      </Text>

      <Text style={{fontSize: '140%', color: 'rgb(0, 128, 255)'}}>
        Please keep in mind that you should be <b>falling asleep</b> at these
        times.
      </Text>
      <Text style={{fontSize: '140%', color: 'rgb(0, 128, 255)'}}>
        The average human takes <b>fourteen minutes</b> to fall asleep, so plan
        accordingly!
      </Text>
      <Text style={{fontSize: '130%', color: 'rgb(153, 102, 204)'}}>
        This app works by counting backwards in <b>sleep cycles</b>. Waking up
        in the middle of a sleep cycle leaves you feeling tired and groggy, but
        waking up <i>in between</i> cycles wakes you up feeling refreshed and
        alert!
      </Text>
      <Center>
        <a
          className="back"
          href="#"
          style={{fontSize: '200%', color: '#cdbc67'}}
          onClick={calculateAgain}
        >
          Calculate Again
        </a>
        <br />
      </Center>
    </VStack>
  )
}

const Sleep = () => {
  const {colorMode, toggleColorMode} = useColorMode()

  const [sleepView, setSleepView] = useState(false)

  const handleSleepEstimate = () => {
    setSleepView(true)
  }

  const calculateAgain = () => setSleepView(false)

  return (
    <Layout
      overflow="scroll"
      height="100vh"
      // lightColor={'orange.300'}
      darkColor={'blue.900'}
      lightColor={'blue.900'}
      px={20}
    >
      {/* <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button> */}
      {!sleepView ? (
        <Form handleSleepEstimate={handleSleepEstimate} />
      ) : (
        <SleepView calculateAgain={calculateAgain} />
      )}
    </Layout>
  )
}

export default Sleep
