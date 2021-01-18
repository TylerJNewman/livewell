import React from 'react'
import {Center, Flex, Spinner} from '@chakra-ui/react'
import {gql, useQuery} from '@apollo/client'
import Feature from '../ui/Feature'

interface Props {
  minutes: string
  category: string
}

export const TRAINING_DATA = gql`
  query Training($input: WhereTraining!) {
    allTrainings(where: $input) {
      edges {
        node {
          category
          minutes
          videolink1 {
            ... on _ExternalLink {
              url
            }
          }
          title
          description
        }
      }
    }
  }
`

const TrainingView = ({minutes, category}: Props) => {
  const input = {category, minutes}

  if (!minutes || !category) return <p></p>

  const {data, loading, error} = useQuery(TRAINING_DATA, {
    variables: {
      input,
    },
  })

  const training = data?.allTrainings?.edges[0]?.node

  if (loading)
    return (
      <Center h="70%">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    )
  if (error) return <p>ERROR</p>
  if (!training) return <p>Not found</p>

  const {title, description, videolink1} = training

  return (
    <Flex maxW="1165px" as="main" pt="0px" mt="0px">
      <Feature
        title={title}
        description={description}
        videolink1={videolink1}
      />
    </Flex>
  )
}

export default TrainingView
