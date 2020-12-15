import {Flex, useColorMode, FlexProps} from '@chakra-ui/react'

export const Container = (props: FlexProps) => {
  const {colorMode} = useColorMode()

  const bgColor = {light: 'orange.100', dark: 'blue.500'}

  const color = {light: 'black', dark: 'white'}
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  )
}
