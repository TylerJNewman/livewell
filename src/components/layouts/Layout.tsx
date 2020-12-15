import {Flex, useColorMode, FlexProps} from '@chakra-ui/react'
interface Props extends FlexProps {
  lightColor?: string
  darkColor?: string
}
export const Layout = ({lightColor, darkColor, ...props}: Props) => {
  const {colorMode} = useColorMode()
  console.log({lightColor})

  const bgColor = {
    light: lightColor ?? 'orange.200',
    dark: darkColor ?? 'blue.500',
  }

  const color = {light: 'black', dark: 'white'}
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      m="0 auto"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  )
}

export default Layout
