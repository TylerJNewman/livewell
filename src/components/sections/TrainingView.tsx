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
import TrainingWrapper from '../ui/TrainingWrapper'

const title = `World's Greatest Stetch`
const desc = `The World’s Greatest Stretch lengthens and strengthens three key areas–the ankles, hips, and thoracic spine. It’s a great movement to do throughout the day because it targets so many muscles in a relatively short period–hip flexors, hamstrings, adductors, glutes, calves, quads, thoracic spine, chest, shoulders, lower back, and obliques. Ease into the movement and move fluidly through the positions. Don't worry if you can't get into the full range of motion just yet.. we will get there with consistent practice. Doing The World's Greatest Stretch for one or two minutes for every hour sitting down will yield incredible results over time.`

interface Props {
  title: string
  desc: string
}

function Feature({title, desc}: Props) {
  return (
    <Box px={['0px', '0px', '50px', '50px']}>
      <AspectRatio ratio={1065 / 600}>
        <iframe
          title="naruto"
          src="https://www.youtube.com/embed/QhBnZ6NPOY0"
          allowFullScreen
        />
      </AspectRatio>
      <Flex
        justify="center"
        align="center"
        direction="column"
        px={['15px', '30px', '0px']}
        mt={['25px', '25px', '45px']}
      >
        <Heading as="h2" size="2xl" w="100%">
          {title}
        </Heading>
        <Text mt={4} w="100%">
          {desc}
        </Text>
        <Center>
          <Link href="/complete">
            <Button
              width={['100%', '100%', '100%', 'auto']}
              variant="solid"
              mt={8}
              colorScheme="gray"
              size="lg"
              px={16}
            >
              <Heading as="h4" size="md" letterSpacing=".08em">
                COMPLETE
              </Heading>
            </Button>
          </Link>
        </Center>
      </Flex>
    </Box>
  )
}

const TrainingView = () => {
  return (
    <Box maxW="1165px" as="main" pb="100px">
      <Feature title={title} desc={desc} />
    </Box>
  )
}

export default TrainingView
