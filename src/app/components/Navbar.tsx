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
import Link from 'next/link';

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  const activeColor = useColorModeValue('orange.500', 'orange.300');
  const linkColor = useColorModeValue('gray.800', 'white');
  const bg = useColorModeValue('white', 'gray.900');
  const logoColor = useColorModeValue('gray.600', 'gray.200');
  const laundryColor = useColorModeValue('orange.500', 'orange.300');

  return (
    <Box bg={bg} px={8} py={2} w={'7xl'}  borderRadius={30} shadow="lg" position="fixed" top={8} left={0} right={0} zIndex={10} opacity={0.95} mx={"auto"}>
      <Flex
        h={16}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
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
          <Link href="/" passHref>
            <Button variant="link" color={activeColor} fontWeight="bold">
              Home
            </Button>
          </Link>

          <Link href="/about" passHref>
            <Button variant="link" color={linkColor}>
              About Us
            </Button>
          </Link>

          <Link href="/services" passHref>
            <Button variant="link" color={linkColor}>
              Services
            </Button>
          </Link>

          <Link href="/news" passHref>
            <Button variant="link" color={linkColor}>
              News
            </Button>
          </Link>

          <Link href="/tracking" passHref>
            <Button variant="link" color={linkColor}>
              Tracking
            </Button>
          </Link>

          <Link href="/faq" passHref>
            <Button variant="link" color={linkColor}>
              FAQ
            </Button>
          </Link>

          <Link href="/contact" passHref>
            <Button variant="link" color={linkColor}>
              Contacts
            </Button>
          </Link>
        </HStack>
      </Flex>

      {/* Mobile Menu */}
      <Collapse in={isOpen} animateOpacity>
        <VStack as={'nav'} spacing={4} display={{ md: 'none' }} mt={4}>
          <Link href="/" passHref>
            <Button variant="link" color={activeColor} fontWeight="bold">
              Home
            </Button>
          </Link>

          <Link href="/about" passHref>
            <Button variant="link" color={linkColor}>
              About Us
            </Button>
          </Link>

          <Link href="/services" passHref>
            <Button variant="link" color={linkColor}>
              Services
            </Button>
          </Link>

          <Link href="/news" passHref>
            <Button variant="link" color={linkColor}>
              News
            </Button>
          </Link>

          <Link href="/tracking" passHref>
            <Button variant="link" color={linkColor}>
              Tracking
            </Button>
          </Link>

          <Link href="/faq" passHref>
            <Button variant="link" color={linkColor}>
              FAQ
            </Button>
          </Link>

          <Link href="/contact" passHref>
            <Button variant="link" color={linkColor}>
              Contacts
            </Button>
          </Link>
        </VStack>
      </Collapse>
    </Box>

  );
};

export default Navbar;
