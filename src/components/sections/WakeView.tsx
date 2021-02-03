import {Center, Text, Badge, HStack, VStack} from '@chakra-ui/react'
import React from 'react'
interface WakeViewProps {
  calculateAgain: () => void
  cycles: string[]
}

const WakeView = ({calculateAgain, cycles}: WakeViewProps) => {
  return (
    <VStack
      align="center"
      justify="center"
      direction="column"
      wrap="nowrap"
      maxW=" 697px"
      px={8}
      py={160}
      spacing={6}
    >
      <Text fontSize="130%">
        You should try to <b>wake up</b> at one of the following times:
      </Text>
      <HStack py={6} spacing={8}>
        {cycles.map((cycle: string) => (
          <Badge key={cycle} colorScheme="teal" fontSize="2em" padding="12px">
            {cycle}
          </Badge>
        ))}
      </HStack>
      <Text fontSize="140%" color="rgb(0, 128, 255)">
        Please keep in mind that you should be <b>waking up</b> at these times.
      </Text>
      <Text fontSize="140%" color="rgb(0, 128, 255)">
        The average human takes <b>fourteen minutes</b> to fall asleep, so we
        factored that in to give you time to get to sleep!
      </Text>
      <Text fontSize="140%" color="rgb(153, 102, 204)">
        This app works by counting forwards in <b>sleep cycles</b>. Waking up in
        the middle of a sleep cycle leaves you feeling tired and groggy, but
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

export default WakeView
