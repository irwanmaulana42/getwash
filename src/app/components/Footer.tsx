"use client";
import { EmailIcon, PlusSquareIcon, StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  Link,
  ListIcon,
  Stack,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <Box padding={10}>
        <Grid templateColumns={{ base: "1fr", md: "repeat(12, 1fr)" }} gap={4}>
          <GridItem colSpan={{ base: 12, md: 3 }} width={"70%"}>
            <Stack spacing={5}>
              <Box>
                <Image
                  width={500}
                  height={500}
                  alt=""
                  style={{
                    width: "100%",
                  }}
                  src="/assets/images/Frame 37354.png"
                />
              </Box>
              <Box>
                <Text
                  color={"gray.500"}
                  fontSize={"sm"}
                  fontWeight={"semibold"}
                >
                  Getwash Laundry selalu bisa diandalkan
                </Text>
              </Box>
              <Box>
                <Grid
                  templateColumns={{ base: "1fr", md: "repeat(12, 1fr)" }}
                  gap={4}
                >
                  <GridItem colSpan={{ base: 12, md: 6 }}>
                    <Image
                      width={500}
                      height={500}
                      alt=""
                      style={{
                        width: "100%",
                      }}
                      src="/assets/images/googleplay.png"
                    />
                  </GridItem>
                  <GridItem colSpan={{ base: 12, md: 6 }}>
                    <Image
                      width={500}
                      height={500}
                      alt=""
                      style={{
                        width: "100%",
                      }}
                      src="/assets/images/appstore.png"
                    />
                  </GridItem>
                </Grid>
              </Box>
              <Box>
                <Grid
                  templateColumns={{ base: "1fr", md: "repeat(6, 1fr)" }}
                  gap={4}
                >
                  {[1, 2, 3, 4, 5, 6].map((_, index) => (
                    <GridItem
                      colSpan={{ base: 1, md: 1, sm: 1, xs: 1 }}
                      key={index}
                    >
                      <Button
                        _hover={{
                          background: "#fe8a65",
                        }}
                        background={"#f94a1f"}
                        color={"white"}
                        borderRadius={"full"}
                        variant="solid"
                        size={"sm"}
                      >
                        <EmailIcon />
                      </Button>
                    </GridItem>
                  ))}
                </Grid>
              </Box>
            </Stack>
          </GridItem>
          <GridItem colSpan={{ base: 12, md: 3 }}>
            <Heading fontSize={20}>Services</Heading>
            <UnorderedList
              styleType="none"
              margin={0}
              spacing={2.5}
              fontSize={14}
              fontWeight={500}
              color={"gray.600"}
              mt={2.5}
            >
              <ListItem>
                <Link
                  _hover={{
                    color: "#f94a1f",
                  }}
                  href={"/"}
                >
                  Dry Cleaning
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  _hover={{
                    color: "#f94a1f",
                  }}
                  href={"/"}
                >
                  Wet Cleaning
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  _hover={{
                    color: "#f94a1f",
                  }}
                  href={"/"}
                >
                  Shoe Cleaning
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  _hover={{
                    color: "#f94a1f",
                  }}
                  href={"/"}
                >
                  Bag Spa
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  _hover={{
                    color: "#f94a1f",
                  }}
                  href={"/"}
                >
                  Laundry Karpet
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  _hover={{
                    color: "#f94a1f",
                  }}
                  href={"/"}
                >
                  Laundry Kiloan
                </Link>
              </ListItem>
            </UnorderedList>
          </GridItem>
          <GridItem colSpan={{ base: 12, md: 3 }}>
            <Heading fontSize={20}>Informasi</Heading>
            <UnorderedList
              styleType="none"
              margin={0}
              spacing={2.5}
              fontSize={14}
              fontWeight={500}
              color={"gray.600"}
              mt={2.5}
            >
              <ListItem>
                <Link
                  _hover={{
                    color: "#f94a1f",
                  }}
                  href={"/"}
                >
                  Syarat & Ketentuan
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  _hover={{
                    color: "#f94a1f",
                  }}
                  href={"/"}
                >
                  Kebijakan Privasi
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  _hover={{
                    color: "#f94a1f",
                  }}
                  href={"/"}
                >
                  Blog
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  _hover={{
                    color: "#f94a1f",
                  }}
                  href={"/"}
                >
                  Feedback
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  _hover={{
                    color: "#f94a1f",
                  }}
                  href={"/"}
                >
                  Careers
                </Link>
              </ListItem>
            </UnorderedList>
          </GridItem>
          <GridItem colSpan={{ base: 12, md: 3 }}>
            <Heading fontSize={20}>Kontak</Heading>
            <UnorderedList
              styleType="none"
              margin={0}
              spacing={2.5}
              fontSize={14}
              fontWeight={500}
              color={"gray.600"}
              mt={2.5}
            >
              <ListItem display={"flex"} alignItems={"center"}>
                <ListIcon as={StarIcon} color="#f94a1f" fontSize={"2xl"} />
                <Text>
                  Jl. Ceger Raya No.42, Jurang Mangu Barat, Kec. Pd. Aren, Kota
                  Tangerang Selatan, Banten 15222
                </Text>
              </ListItem>
              <ListItem display={"flex"} alignItems={"center"}>
                <ListIcon
                  as={PlusSquareIcon}
                  color="#f94a1f"
                  fontSize={"2xl"}
                />
                <Text>09:00-20:00 (Weekday) & 09:00-17:00 (Weekend)</Text>
              </ListItem>
              <ListItem display={"flex"} alignItems={"center"}>
                <ListIcon
                  as={PlusSquareIcon}
                  color="#f94a1f"
                  fontSize={"2xl"}
                />
                <Text>info@getwashlaundry.id</Text>
              </ListItem>
              <ListItem display={"flex"} alignItems={"center"}>
                <ListIcon
                  as={PlusSquareIcon}
                  color="#f94a1f"
                  fontSize={"2xl"}
                />
                <Text>+6281266100500</Text>
              </ListItem>
            </UnorderedList>
          </GridItem>
        </Grid>
      </Box>
      <Box
        height={10}
        background={"#f94a1f"}
        textAlign={"center"}
        alignContent={"center"}
        alignItems={"center"}
      >
        <Text fontSize={"sm"} color={"#fff"} fontWeight={"semibold"}>
          Copyright &copy; 2024 Getwash Laundry
        </Text>
      </Box>
    </footer>
  );
}
