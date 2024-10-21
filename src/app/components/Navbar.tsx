"use client";

import {
  Box,
  Flex,
  Text,
  Button,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  VStack,
  Collapse,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  const activeColor = useColorModeValue('orange.500', 'orange.300');
  const linkColor = useColorModeValue('gray.800', 'white');
  const bg = useColorModeValue('white', 'gray.900');
  const logoColor = useColorModeValue('gray.600', 'gray.200');
  const laundryColor = useColorModeValue('orange.500', 'orange.300');

  return (
    <Box bg={bg} px={4} py={2} shadow="md">
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        {/* Logo */}
        <Flex align="center">
          <Text fontSize="2xl" fontWeight="bold" color={logoColor}>
            Getwash <Text as="span" color={laundryColor}>Laundry</Text>
          </Text>
        </Flex>

        {/* Hamburger Icon for Mobile */}
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={onToggle}
        />

        {/* Desktop Menu */}
        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
          <NextLink href="/" passHref>
            <Button variant="link" color={activeColor} fontWeight="bold">
              Home
            </Button>
          </NextLink>

          <NextLink href="/about" passHref>
            <Button variant="link" color={linkColor}>
              About Us
            </Button>
          </NextLink>

          <NextLink href="/services" passHref>
            <Button variant="link" color={linkColor}>
              Services
            </Button>
          </NextLink>

          <NextLink href="/news" passHref>
            <Button variant="link" color={linkColor}>
              News
            </Button>
          </NextLink>

          <NextLink href="/tracking" passHref>
            <Button variant="link" color={linkColor}>
              Tracking
            </Button>
          </NextLink>

          <NextLink href="/faq" passHref>
            <Button variant="link" color={linkColor}>
              FAQ
            </Button>
          </NextLink>

          <NextLink href="/contact" passHref>
            <Button variant="link" color={linkColor}>
              Contacts
            </Button>
          </NextLink>
        </HStack>
      </Flex>

      {/* Mobile Menu */}
      <Collapse in={isOpen} animateOpacity>
        <VStack as={'nav'} spacing={4} display={{ md: 'none' }} mt={4}>
          <NextLink href="/" passHref>
            <Button variant="link" color={activeColor} fontWeight="bold">
              Home
            </Button>
          </NextLink>

          <NextLink href="/about" passHref>
            <Button variant="link" color={linkColor}>
              About Us
            </Button>
          </NextLink>

          <NextLink href="/services" passHref>
            <Button variant="link" color={linkColor}>
              Services
            </Button>
          </NextLink>

          <NextLink href="/news" passHref>
            <Button variant="link" color={linkColor}>
              News
            </Button>
          </NextLink>

          <NextLink href="/tracking" passHref>
            <Button variant="link" color={linkColor}>
              Tracking
            </Button>
          </NextLink>

          <NextLink href="/faq" passHref>
            <Button variant="link" color={linkColor}>
              FAQ
            </Button>
          </NextLink>

          <NextLink href="/contact" passHref>
            <Button variant="link" color={linkColor}>
              Contacts
            </Button>
          </NextLink>
        </VStack>
      </Collapse>
    </Box>
  );
};

export default Navbar;
