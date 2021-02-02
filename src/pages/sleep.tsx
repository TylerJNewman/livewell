import {
  Button,
  Heading,
  HStack,
  Select,
  VStack,
  Center,
  Text,
  FormErrorMessage,
  FormControl,
  Badge,
  useColorMode,
  useToast,
} from '@chakra-ui/react'
import React, {useState} from 'react'
import Layout from 'src/components/layouts/Layout'
import {useForm} from 'react-hook-form'
import dayjs, {Dayjs} from 'dayjs'

interface FormValues {
  hour?: string | undefined
  minute?: string | undefined
  meridiem?: string | undefined
}

const title = 'I have to wake up at...'
// const title2 = 'If you go to bed NOW, you should wake up at...'
// const title3 = 'I plan to FALL ASLEEP at...'

const initializeArrayWithRange = (end: number, start = 0, step = 1) =>
  Array.from(
    {length: Math.ceil((end - start + 1) / step)},
    (_v, i) => i * step + start,
  )

const hours = new Array(12).fill(null).map((_, i) => i + 1)
const minutes = initializeArrayWithRange(55, 0, 5).map((m) =>
  m.toString().padStart(2, '0'),
)

const sleepTime = ({hour = '1', minute = '00', meridiem = 'am'}) => {
  let m = meridiem === 'am' ? 1 : 2

  let now = dayjs()

  let wakeup = now
    .startOf('day')
    .add(+hour * m, 'hours')
    .add(+minute, 'minutes')

  const sixCycles = wakeup.subtract(90 * 6, 'minutes') // 9 hrs
  const fiveCycles = wakeup.subtract(90 * 5, 'minutes') // 7.5 hrs
  const fourCycles = wakeup.subtract(90 * 4, 'minutes') // 6 hrs

  const formatTime = (time: Dayjs) => time.format('h:mm A')

  return [sixCycles, fiveCycles, fourCycles].map(formatTime)
}

interface FormProps {
  handleSleepEstimate: (values: FormValues) => void
}

const Form = ({handleSleepEstimate}: FormProps) => {
  const {handleSubmit, errors, register} = useForm()
  const toast = useToast()

  function validateHour(value: string) {
    if (!value) {
      return 'Please select the hour'
    } else return true
  }

  function validateMinute(value: string) {
    if (!value) {
      return 'Please select the minute'
    } else return true
  }

  function onSubmit(values: any) {
    handleSleepEstimate(values)
  }

  React.useEffect(() => {
    if (errors.hour || errors.minute) {
      const message = errors.hour ? 'time' : 'minute'

      const description = (
        <span>
          Please make sure to choose select a <b>{message}</b> before submitting
        </span>
      )
      toast({
        title: 'An error occurred.',
        description,
        status: 'error',
        duration: 2000,
        isClosable: true,
        position: 'top',
      })
    }
  }, [errors])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
        <HStack spacing={3} d="flex" align="start">
          <FormControl isInvalid={errors.hour}>
            <Select
              w="17vh"
              placeholder="hour"
              size="md"
              name="hour"
              ref={register({validate: validateHour})}
            >
              {hours.map((hour) => (
                <option key={hour} value={hour}>
                  {hour}
                </option>
              ))}
            </Select>
            <FormErrorMessage>
              {errors.hour && errors.hour.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.minute}>
            <Select
              w="17vh"
              placeholder="minute"
              size="md"
              name="minute"
              ref={register({validate: validateMinute})}
            >
              {minutes.map((minute) => (
                <option key={minute} value={minute}>
                  {minute}
                </option>
              ))}
            </Select>
            <FormErrorMessage>
              {errors.minute && errors.minute.message}
            </FormErrorMessage>
          </FormControl>
          <Select w="17vh" size="md" name="meridiem" ref={register()}>
            <option value="am">AM</option>
            <option value="pm">PM</option>
          </Select>
        </HStack>
        <Button size="lg" borderRadius="full" variant="solid" type="submit">
          Calculate
        </Button>
        {/* <Heading as="h3" size="md" fontWeight="bold" display="block">
          {title2}
        </Heading>
        <Button size="lg" borderRadius="full" variant="solid">
          ZZZ...
        </Button> */}
        {/* <Heading as="h3" size="md" fontWeight="bold" display="block">
          {title3}
        </Heading>
        <Button size="lg" borderRadius="full" variant="solid">
          Calculate
        </Button> */}
      </VStack>
    </form>
  )
}

interface SleepViewProps {
  calculateAgain: () => void
  cycles: string[]
}

const SleepView = ({calculateAgain, cycles}: SleepViewProps) => {
  return (
    <VStack
      align="center"
      justify="center"
      direction="column"
      wrap="nowrap"
      maxW="730px"
      px={8}
      py={160}
      spacing={6}
    >
      <Text fontSize="130%">
        You should try to <b>fall asleep</b> at one of the following times:
      </Text>
      <HStack py={6} spacing={8}>
        {cycles.map((cycle: string) => (
          // <Tag key={cycle} size={'lg'} borderRadius="full" variant="solid">
          //   {cycle}
          // </Tag>
          <Badge key={cycle} colorScheme="teal" fontSize="2em" padding="12px">
            {cycle}
          </Badge>
        ))}
      </HStack>
      <Text fontSize="140%" color="rgb(0, 128, 255)">
        Please keep in mind that you should be <b>falling asleep</b> at these
        times.
      </Text>
      <Text fontSize="140%" color="rgb(0, 128, 255)">
        The average human takes <b>fourteen minutes</b> to fall asleep, so plan
        accordingly!
      </Text>
      <Text fontSize="140%" color="rgb(153, 102, 204)">
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
  const [sleepView, setSleepView] = useState(false)
  const [cycles, setCycles] = useState<string[]>([])

  const handleSleepEstimate = (values: FormValues) => {
    const _cycles = sleepTime(values)
    setCycles(_cycles)
    setSleepView(true)
  }

  const calculateAgain = () => setSleepView(false)

  const {colorMode, toggleColorMode} = useColorMode()

  colorMode === 'light' ? toggleColorMode() : null

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
        <SleepView calculateAgain={calculateAgain} cycles={cycles} />
      )}
    </Layout>
  )
}

export default Sleep
