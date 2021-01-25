import {Box, Center, Container, Heading} from '@chakra-ui/react'
import React from 'react'
import Layout from 'src/components/layouts/Layout'
import ContactForm from 'src/components/ui/ContactForm/ContactForm'

const Contact = () => (
  <Layout
    height="100vh"
    lightColor={'orange.200'}
    darkColor={'blue.900'}
    h="100vh"
  >
    <Box
      pos="absolute"
      w="100%"
      h="100vh"
      top="0"
      left="0"
      bgImage="url('/register_bg_2.png')"
      bgSize="100%"
      bgRepeat="no-repeat"
    />
    <Container px={4} h="100%">
      <Center h="100%">
        <Box w="100%" px={4}>
          <Box
            pos="relative"
            w="100%"
            mb={6}
            bg="orange.100"
            border={0}
            shadow="lg"
            rounded="lg"
          >
            <Box rounded="lg" mb={0} p={6}>
              <Box mb={3}>
                <Heading as="h2" size="xl" color="gray.600">
                  Contact
                </Heading>
              </Box>
              <ContactForm />
            </Box>
          </Box>
        </Box>
      </Center>
    </Container>
  </Layout>
)

export default Contact
