import {
  Button,
  Heading,
  HStack,
  Select,
  VStack,
  FormErrorMessage,
  FormControl,
  useToast,
  ColorModeScript,
} from '@chakra-ui/react'
import React, {useState} from 'react'
import Layout from 'src/components/layouts/Layout'
import {useForm} from 'react-hook-form'

import {HOURS, MINUTES} from '../utils/constants'
import {sleepTime, wakeTime} from '../utils/math'
import SleepView from 'src/components/sections/SleepView'
import WakeView from 'src/components/sections/WakeView'

interface FormValues {
  hour?: string | undefined
  minute?: string | undefined
  meridiem?: string | undefined
}

const title = 'I have to wake up at...'
const title2 = 'If you go to bed NOW, you should wake up at...'
// const title3 = 'I plan to FALL ASLEEP at...'

interface FormProps {
  handleSleepTime: (values: FormValues) => void
  handleWakeTime: () => void
}

const Form = ({handleSleepTime, handleWakeTime}: FormProps) => {
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
    handleSleepTime(values)
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
              {HOURS.map((hour) => (
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
              {MINUTES.map((minute) => (
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
        <Heading as="h3" size="md" fontWeight="bold" display="block">
          {title2}
        </Heading>
        <Button
          size="lg"
          borderRadius="full"
          variant="solid"
          onClick={handleWakeTime}
        >
          ZZZ...
        </Button>
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

const Sleep = () => {
  const [sleepView, setSleepView] = useState(false)
  const [wakeView, setWakeView] = useState(false)
  const [sleepCycles, setSleepCycles] = useState<string[]>([])
  const [wakeCycles, setWakeCycles] = useState<string[]>([])

  const handleSleepTime = (values: FormValues) => {
    const _cycles = sleepTime(values)
    setSleepCycles(_cycles)
    setSleepView(true)
  }

  const handleWakeTime = () => {
    const _cycles = wakeTime()
    setWakeCycles(_cycles)
    setWakeView(true)
  }

  const calculateAgain = () => {
    setSleepView(false)
    setWakeView(false)
  }

  return (
    <>
      <ColorModeScript initialColorMode="dark" />
      <Layout
        overflow="scroll"
        height="100vh"
        // lightColor={'orange.300'}
        darkColor={'blue.900'}
        lightColor={'blue.900'}
        px={20}
      >
        {!sleepView && !wakeView && (
          <Form
            handleSleepTime={handleSleepTime}
            handleWakeTime={handleWakeTime}
          />
        )}
        {sleepView && (
          <SleepView calculateAgain={calculateAgain} cycles={sleepCycles} />
        )}
        {wakeView && (
          <WakeView calculateAgain={calculateAgain} cycles={wakeCycles} />
        )}
      </Layout>
    </>
  )
}

export default Sleep
