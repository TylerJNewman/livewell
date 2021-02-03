import {Center, Text, Badge, HStack, VStack} from '@chakra-ui/react'
import React from 'react'
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

export default SleepView
