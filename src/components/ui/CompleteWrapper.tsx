import {Flex, FlexProps} from '@chakra-ui/react'
import React from 'react'

const OptionsWrapper = (props: FlexProps) => {
  return (
    <Flex
      // pt={['80px', '116px']}
      pb="97px"
      px="10px"
      w="100%"
      h="100%"
      justify="center"
      align="center"
    >
      <Flex
        flexBasis="auto"
        flexGrow={1}
        w="100%"
        h="100%"
        justify="center"
        align="center"
        direction="column"
      >
        {props.children}
      </Flex>
    </Flex>
  )
}

export default OptionsWrapper
