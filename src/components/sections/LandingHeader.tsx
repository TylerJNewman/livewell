import React from 'react'
import NextLink from 'next/link'
import {Box, Flex, Text, Button, Link} from '@chakra-ui/react'
import Logo from '../ui/Logo'

const MenuItems = (props: any) => {
  const {children, isLast, to = '/'} = props
  return (
    <NextLink href={to}>
      <Box
        mb={{base: isLast ? 0 : 8, lg: 0}}
        mr={{base: 0, lg: isLast ? 0 : 8}}
        display="block"
      >
        <Link>{children}</Link>
      </Box>
    </NextLink>
  )
}

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="currentColor"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
)

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
)

const Header = (props: any) => {
  const [show, setShow] = React.useState(false)
  const toggleMenu = () => setShow(!show)

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={'inherit'}
      maxW="1200px"
      {...props}
    >
      <Flex align="center">
        <Logo />
      </Flex>

      <Box display={{base: 'block', lg: 'none'}} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>

      <Box
        display={{base: show ? 'block' : 'none', lg: 'block'}}
        flexBasis={{base: '100%', lg: 'auto'}}
        top={{base: '100px', lg: 'unset'}}
        left={{base: '0', lg: 'unset'}}
        bottom={{base: '0', lg: 'unset'}}
        right={{base: '0', lg: 'unset'}}
        position={{base: 'fixed', lg: 'unset'}}
        overflow={'auto'}
        zIndex={6}
        bg={'inherit'}
      >
        <Flex
          align={['center', 'center', 'center', 'center']}
          justify={['center', 'center', 'center', 'flex-end']}
          direction={['column', 'column', 'column', 'row']}
          pt={[4, 4, 4, 0]}
        >
          <MenuItems to="/signup">
            <Text fontSize="2xl">Sign In</Text>
          </MenuItems>
          <MenuItems to="/app" isLast>
            <Button size="lg" colorScheme="orange">
              Try for free
            </Button>
          </MenuItems>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Header
