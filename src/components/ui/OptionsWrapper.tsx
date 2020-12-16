import {Flex, Box, FlexProps} from '@chakra-ui/react'
import React from 'react'

const OptionsWrapper = (props: FlexProps) => {
  return (
    <Box pt={['10px', '80px', '116px']} pb="97px" px="10px">
      <Flex flexBasis="auto" flexGrow={1} w="100%" h="100%">
        {props.children}
      </Flex>
    </Box>
  )
}

export default OptionsWrapper
