import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, ButtonGroup, Grid, GridItem, Heading, Input, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Box
        background={"#fdf2ef"}
        paddingTop={100}>
        <Box height={"xs"} alignItems={"center"} display={"flex"} justifyContent={"center"} width={"full"}>
          <Box textAlign={"center"}>
            <Text color={"#f94a1f"} fontWeight={"bold"} fontSize={"lg"}>FAQ</Text>
            <Heading>Ask Us Anything</Heading>
            <Text marginTop={4}>Have any questions? We&apos;re here to assist you.</Text>
          </Box>
        </Box>
      </Box>
      <Box mx={"auto"} display={"flex"} justifyContent={"center"} paddingY={"10"}>
        <Image
          src={"https://dummyimage.com/800x400/000/fff&text=Lorem+Ipsum"}
          width={"800"}
          height={"800"}
          alt=""
          style={{
            borderRadius: 30,
            height: 400,
            width: 800,
          }}
        />
      </Box>

      <Box>
        <Box display={"flex"} justifyContent={"center"}>
          <ButtonGroup variant='outline' spacing='3' size={"sm"}>
            {
              ["General", "Dry Cleaning", "Laundry Kiloan", "Shoes Cleaning", "Laundry Karpet"].map((item, index) => {
                return (
                  <Button key={index} borderRadius={30} color={"#f94a1f"} borderColor={"#f94a1f"}>{item}</Button>
                )
              })
            }
          </ButtonGroup>
        </Box>
        <Box width={"2xl"} mx={"auto"} py={5} borderRadius={20} shadow={"lg"}>
          <Box margin={10}>
            <Accordion defaultIndex={[0]} allowMultiple>
              {
                [1, 1, 2, 3, 4, 5].map((item, index, array) => {
                  return (
                    <AccordionItem
                      key={index}
                      borderBottom={0}
                      {...index === 0 ? {
                        borderTop: 0,
                      } : {}}>
                      <h2>
                        <AccordionButton paddingY={5}>
                          <Box as='span' flex='1' fontWeight={"semibold"} textAlign='left'>
                            Apakah saya mendapatkan tanda terima pesanan saya ?
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </AccordionPanel>
                    </AccordionItem>

                  )
                })
              }
            </Accordion>
          </Box>
        </Box>
        <Box display={"flex"} justifyContent={"center"} paddingY={10}>
          <Button
            alignContent={"center"}
            backgroundColor={"#f94a1f"}
            color={"#feebe6"}
            size="md"
            borderRadius={30}
            // width={"3xs"}
            _hover={{
              background: "#fe8a65",
            }}
          >
            <Text fontSize={"sm"}>Load More</Text>
          </Button>
        </Box>
      </Box>

      <Box
        marginLeft={20}
        marginRight={20}
        borderRadius={20}
        padding={20}
        marginBottom={20}
        background={"#fdf2ef"}
        backgroundImage={"/assets/images/Group 1000004393.png"}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
      >
        <Box mx={"auto"} width={"md"}>
          <Heading
            fontSize={40}
            fontWeight={"bold"}
            paddingBottom={3}
            textAlign={"center"}
          >
            Masih Ada Pertanyaan?
          </Heading>
          <Text textAlign={"center"}>Kami menjawab kami dapat membantu Anda menciptakan dan memlihara lingkungan bersih dan sehat, menyenangkan sekaligus fungsional</Text>
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(12, 1fr)" }}
            gap={4}
            paddingY={10}
            alignItems="start"
          >
            <GridItem colSpan={12}>
              <Input
                placeholder="Your Name"
                marginRight={5}
                backgroundColor={"#fff"}
                boxShadow={"0 5px 8px rgba(0, 0, 0, 0.1)"}
                borderRadius={15}
                borderColor={"#fff"}
                _focus={{
                  border: "1px solid #f94a1f",
                  boxShadow: "0 5px 8px rgba(0, 0, 0, 0.1)",
                }}
                _hover={{
                  border: "1px solid #f94a1f",
                }}
              />

            </GridItem>
            <GridItem colSpan={6}>
              <Input
                placeholder="Email"
                marginRight={5}
                type="email"
                backgroundColor={"#fff"}
                boxShadow={"0 5px 8px rgba(0, 0, 0, 0.1)"}
                borderRadius={15}
                borderColor={"#fff"}
                _focus={{
                  border: "1px solid #f94a1f",
                  boxShadow: "0 5px 8px rgba(0, 0, 0, 0.1)",
                }}
                _hover={{
                  border: "1px solid #f94a1f",
                }}
              />

            </GridItem>
            <GridItem colSpan={6}>
              <Input
                placeholder="Phone Number"
                marginRight={5}
                backgroundColor={"#fff"}
                boxShadow={"0 5px 8px rgba(0, 0, 0, 0.1)"}
                borderRadius={15}
                borderColor={"#fff"}
                _focus={{
                  border: "1px solid #f94a1f",
                  boxShadow: "0 5px 8px rgba(0, 0, 0, 0.1)",
                }}
                _hover={{
                  border: "1px solid #f94a1f",
                }}
              />

            </GridItem>
            <GridItem colSpan={12}>
              <Input
                placeholder="Your Question"
                paddingTop={2}
                as={"textarea"}
                cols={5}
                rows={5}
                height={100}
                marginRight={5}
                backgroundColor={"#fff"}
                boxShadow={"0 5px 8px rgba(0, 0, 0, 0.1)"}
                borderRadius={15}
                borderColor={"#fff"}
                _focus={{
                  border: "1px solid #f94a1f",
                  boxShadow: "0 5px 8px rgba(0, 0, 0, 0.1)",
                }}
                _hover={{
                  border: "1px solid #f94a1f",
                }}
              />
            </GridItem>
            <GridItem colSpan={12} mx={"auto"}>
              <Button
                alignContent={"center"}
                backgroundColor={"#f94a1f"}
                color={"#feebe6"}
                size="md"
                borderRadius={30}
                // width={"3xs"}
                _hover={{
                  background: "#fe8a65",
                }}
              >
                <Text fontSize={"md"}>Send Question</Text>
              </Button>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
