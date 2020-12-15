import React from 'react'
import {AspectRatio, Box, Button, Center, Heading, Text} from '@chakra-ui/react'
import Link from 'next/link'

const title = `World's Greatest Stetch`
const desc = `The World’s Greatest Stretch lengthens and strengthens three key areas–the ankles, hips, and thoracic spine. It’s a great movement to do throughout the day because it targets so many muscles in a relatively short period–hip flexors, hamstrings, adductors, glutes, calves, quads, thoracic spine, chest, shoulders, lower back, and obliques. Ease into the movement and move fluidly through the positions. Don't worry if you can't get into the full range of motion just yet.. we will get there with consistent practice. Doing The World's Greatest Stretch for one or two minutes for every hour sitting down will yield incredible results over time.`

interface Props {
  title: string
  desc: string
}

function Feature({title, desc, ...rest}: Props) {
  return (
    <Box mt="25px" px="30px" flex="1" {...rest}>
      <Heading as="h2" size="2xl">
        {title}
      </Heading>
      <Text mt={4}>{desc}</Text>
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
    </Box>
  )
}

const TrainingView = () => {
  return (
    <Box maxW="1165px">
      <AspectRatio ratio={1065 / 600}>
        <iframe
          title="naruto"
          src="https://www.youtube.com/embed/QhBnZ6NPOY0"
          allowFullScreen
        />
      </AspectRatio>
      <Feature title={title} desc={desc} />
    </Box>
  )
}

export default TrainingView
