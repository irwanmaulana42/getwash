"use client";

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Grid,
  GridItem,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  List,
  ListIcon,
  ListItem,
  Stack,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  Stepper,
  StepSeparator,
  StepStatus,
  StepTitle,
  Text,
  useSteps,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Image from "next/image";
import {
  TimeIcon,
  AtSignIcon,
  RepeatIcon,
  EmailIcon,
  ArrowForwardIcon,
  ArrowLeftIcon,
  CheckIcon,
  ArrowBackIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  PlusSquareIcon,
  MinusIcon,
  PhoneIcon,
} from "@chakra-ui/icons"; // Menggunakan icon dari Chakra UI

import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper/modules";
import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";

const steps = [
  { title: "Pickup Lundry", description: "Kurir mengambil laundryan Anda" },
  { title: "Filter", description: "Kurir mengambil laundryan Anda" },
  { title: "Prewash", description: "Kurir mengambil laundryan Anda" },
  { title: "Washing", description: "Kurir mengambil laundryan Anda" },
];

export default function Home() {
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const Map = dynamic(() => import("@/app/components/Map"), { ssr: false });

  return (
    <>
      <Box bg="linear-gradient(180deg, rgba(255,225,211,1) 0%, rgba(253,241,235,1) 33%, rgba(255,255,255,1) 100%)"
        paddingTop={100}>
        <Grid templateColumns="repeat(12, 1fr)" gap={4}>
          <GridItem colSpan={6}>
            <Box padding={20}>
              <Heading fontSize={55} fontWeight={"bold"} paddingBottom={5}>
                <span
                  style={{
                    color: "#f94a1f",
                  }}
                >
                  Getwash
                </span>{" "}
                Profesional Laundry & Dry Cleaning
              </Heading>
              <Text color={"#6c6e78"}>7 Stages of garment</Text>
              <Text color={"#6c6e78"}>
                Inspection, Stain Removal, Cleaning, Minor Repair, Hand
                Finisihing, Detailing & Packaging
              </Text>

              <Box marginTop={5} display={"flex"}>
                <Input
                  size="lg"
                  placeholder="Enter post code"
                  marginRight={5}
                  boxShadow={"0 5px 8px rgba(0, 0, 0, 0.1)"}
                  paddingLeft={4}
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

                <Button
                  backgroundColor={"#f94a1f"}
                  color={"#feebe6"}
                  size="lg"
                  borderRadius={30}
                  width={"3xs"}
                  _hover={{
                    background: "#fe8a65",
                  }}
                >
                  <Text fontSize={"md"}>Book Now</Text>
                </Button>
              </Box>
            </Box>
          </GridItem>
          <GridItem colSpan={6}>
            <Box
              padding={"20px"}
              paddingRight={0}
              display={"flex"}
              justifyContent={"end"}
            >
              <Image
                src={"/assets/images/home_1.png"}
                alt=""
                width={600}
                height={600}
              />
            </Box>
          </GridItem>
        </Grid>
      </Box>
      <Box padding={20} background={"#fdf2ef"}>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(12, 1fr)" }} // 1 kolom untuk mobile, 12 kolom untuk medium screen
          gap={4}
          paddingBottom={10}
        >
          <GridItem colSpan={{ base: 12, md: 6 }}>
            <Heading fontSize={40} fontWeight={"bold"} paddingBottom={5}>
              Selalu Memberikan <br /> Pelayanan Terbaik
            </Heading>
          </GridItem>
          <GridItem colSpan={{ base: 12, md: 6 }}>
            <Text fontSize="md" fontWeight={"500"} color="gray.600">
              Kami berkomitmen untuk memberikan layanan terbaik, mengutamakan
              kualitas, ketepatan waktu, dan kepuasan pelanggan. Kami memastikan
              pakaian Anda siap dipakai kembali dengan sempurna.
            </Text>
          </GridItem>
        </Grid>

        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
          <GridItem colSpan={{ base: 3, lg: 1 }}>
            <Box
              padding={6}
              paddingTop={10}
              // marginRight={12}
              background="white"
              boxShadow="lg"
              borderRadius="3xl"
              textAlign="center"
              height={300}
            >
              <TimeIcon boxSize={10} color="#ff5722" marginBottom={4} />{" "}
              {/* Gunakan TimeIcon langsung */}
              <Heading
                height={58}
                fontSize={25}
                fontWeight="bold"
                marginBottom={2}
              >
                Hemat Waktu <br /> & Uang
              </Heading>
              <Text
                marginTop={5}
                fontSize="md"
                fontWeight={"500"}
                color="gray.600"
              >
                Tidak perlu lagi menyiakan waktu untuk pergi ke laundry. Layanan
                pengambilan dan pengantaran kami gratis!
              </Text>
            </Box>
          </GridItem>
          <GridItem colSpan={{ base: 3, lg: 1 }}>
            <Box
              padding={6}
              paddingTop={10}
              // marginRight={12}
              // marginLeft={12}
              background="white"
              boxShadow="lg"
              borderRadius="3xl"
              textAlign="center"
              height={300}
            >
              <AtSignIcon boxSize={10} color="#ff5722" marginBottom={4} />{" "}
              {/* Gunakan AtSignIcon */}
              <Heading
                height={58}
                fontSize={25}
                fontWeight="bold"
                marginBottom={2}
              >
                Pembayaran <br /> Instan
              </Heading>
              <Text
                marginTop={5}
                fontSize="md"
                fontWeight={"500"}
                color="gray.600"
              >
                Nikmati kemudahan pembayaran instan dengan satu genggaman.
              </Text>
            </Box>
          </GridItem>
          <GridItem colSpan={{ base: 3, lg: 1 }}>
            <Box
              padding={6}
              paddingTop={10}
              background="white"
              boxShadow="lg"
              // marginLeft={12}
              borderRadius="3xl"
              textAlign="center"
              height={300}
            >
              {" "}
              <RepeatIcon boxSize={10} color="#ff5722" marginBottom={4} />{" "}
              {/* Gunakan RepeatIcon */}
              <Heading
                height={58}
                fontSize={25}
                alignContent={"center"}
                alignItems={"center"}
                fontWeight="bold"
                marginBottom={2}
              >
                Eco-Friendly
              </Heading>
              <Text
                marginTop={5}
                fontSize="md"
                fontWeight={"500"}
                color="gray.600"
              >
                Deterjen cair lembut/gentle yang akan menjaga pakaian anda tetap
                bersih cemerlang.
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>

      <Box padding={20}>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(12, 1fr)" }}
          gap={4}
          paddingBottom={10}
        >
          <GridItem colSpan={{ base: 12, md: 6 }}>
            <Heading fontSize={40} fontWeight={"bold"} paddingBottom={5}>
              Layanan Kami
            </Heading>
          </GridItem>
          <GridItem colSpan={{ base: 12, md: 6 }}>
            <Stack direction="row" spacing={4} justifyContent={"end"}>
              <Button borderRadius={50} height={50} variant={"outline"}>
                <ArrowBackIcon />
              </Button>
              <Button
                borderRadius={50}
                height={50}
                backgroundColor={"#f94a1f"}
                color={"#feebe6"}
                _hover={{
                  background: "#fe8a65",
                }}
              >
                <ArrowForwardIcon />
              </Button>
            </Stack>
          </GridItem>
        </Grid>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
            renderBullet: function () {
              return "";
            },
          }}
          loop={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          {[1, 2, 3, 4, 5].map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Box textAlign={"left"} padding={5}>
                  <Card borderRadius={15}>
                    <Image
                      style={{
                        width: "100%",
                        height: "auto",
                        borderTopLeftRadius: 15,
                        borderTopRightRadius: 15,
                      }}
                      src={"/assets/images/image-1.png"}
                      alt=""
                      loading="lazy"
                      width={300}
                      height={300}
                    />
                    <CardBody>
                      <Stack spacing="3">
                        <Heading size="md">Wet Cleaning</Heading>
                        <Text fontSize="md" fontWeight={"500"} color="gray.600">
                          Menjaga Konsistensi Fabric & Warna Pakaian
                        </Text>
                      </Stack>
                    </CardBody>
                  </Card>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Box justifyContent={"center"} display={"flex"} mt={3}>
          <Button
            backgroundColor={"#f94a1f"}
            color={"#feebe6"}
            size="lg"
            borderRadius={30}
            width={"3xs"}
            _hover={{
              background: "#fe8a65",
            }}
          >
            <Text fontSize={"md"}>Lihat Semua</Text>
          </Button>
        </Box>
      </Box>

      <Box padding={20}>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(12, 1fr)" }}
          gap={4}
          justifyContent={"center"}
          display={"flex"}
          paddingBottom={4}
        >
          <GridItem colSpan={{ base: 12, md: 12 }}>
            <Heading
              fontSize={16}
              fontWeight={700}
              letterSpacing={"wide"}
              color={"#f94a1f"}
            >
              STEP PAKAIAN ANDA DICUCI
            </Heading>
          </GridItem>
        </Grid>

        <Grid
          templateColumns={{ base: "1fr", md: "repeat(12, 1fr)" }}
          gap={4}
          paddingBottom={10}
          justifyContent={"center"}
          display={"flex"}
        >
          <GridItem colSpan={{ base: 12, md: 12 }}>
            <Heading fontSize={40} fontWeight={"bold"} paddingBottom={5}>
              Bisnis Proses Laundry
            </Heading>
          </GridItem>
        </Grid>

        <Grid templateColumns={{ base: "1fr", md: "repeat(12, 1fr)" }} gap={4}>
          <GridItem colSpan={{ base: 12, md: 6 }}>
            <Stepper
              index={activeStep}
              colorScheme="red"
              orientation="vertical"
              height="400px"
              gap="0"
            >
              {steps.map((step, index) => (
                <Step key={index} onClick={() => setActiveStep(index)}>
                  <StepIndicator>
                    <StepStatus
                      complete={<StepIcon />}
                      incomplete={<StepNumber />}
                      active={<StepNumber />}
                    />
                  </StepIndicator>

                  <Box flexShrink="0">
                    <StepTitle>{step.title}</StepTitle>
                    <StepDescription>{step.description}</StepDescription>
                  </Box>
                  <StepSeparator />
                </Step>
              ))}
            </Stepper>
          </GridItem>
          <GridItem colSpan={{ base: 12, md: 6 }}>
            <Image
              src={"/assets/images/Image_5.png"}
              alt=""
              width={500}
              height={500}
            />
          </GridItem>
        </Grid>

        <Box justifyContent={"center"} display={"flex"} mt={3}>
          <Button
            backgroundColor={"#f94a1f"}
            color={"#feebe6"}
            size="lg"
            borderRadius={30}
            width={"3xs"}
            _hover={{
              background: "#fe8a65",
            }}
          >
            <Text fontSize={"md"}>Lihat Semua</Text>
          </Button>
        </Box>
      </Box>

      <Box
        padding={20}
        height={500}
        background={"#fdf2ef"}
        backgroundImage={"/assets/images/Group 1000004392.png"}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
      >
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(12, 1fr)" }} // 1 kolom untuk mobile, 12 kolom untuk medium screen
          gap={4}
          paddingBottom={10}
        >
          <GridItem colSpan={{ base: 12, md: 4 }}>
            <Image
              style={{
                borderRadius: 20,
              }}
              src={"/assets/images/Rectangle 9.png"}
              alt=""
              width={300}
              height={300}
            />
          </GridItem>
          <GridItem colSpan={{ base: 12, md: 6 }}>
            <Heading fontSize={40} fontWeight={"bold"} paddingBottom={5}>
              One Stop Solution For All{" "}
              <Text color={"#f94a1f"}>Your Cleaning Needs</Text>
            </Heading>
            <List spacing={3}>
              <ListItem>
                <Text
                  marginTop={5}
                  fontSize="lg"
                  fontWeight={"500"}
                  color="gray.800"
                >
                  <ListIcon as={CheckIcon} color="green.500" />
                  High Quality
                </Text>
              </ListItem>
              <ListItem>
                <Text
                  marginTop={5}
                  fontSize="lg"
                  fontWeight={"500"}
                  color="gray.800"
                >
                  <ListIcon as={CheckIcon} color="green.500" />
                  Clearner & Greener
                </Text>
              </ListItem>
              <ListItem>
                <Text
                  marginTop={5}
                  fontSize="lg"
                  fontWeight={"500"}
                  color="gray.800"
                >
                  <ListIcon as={CheckIcon} color="green.500" />
                  Happiness Guarantee
                </Text>
              </ListItem>
            </List>
            <Button
              marginTop={10}
              backgroundColor={"#f94a1f"}
              color={"#feebe6"}
              size="lg"
              borderRadius={30}
              width={"3xs"}
              _hover={{
                background: "#fe8a65",
              }}
            >
              <Text fontSize={"md"}>Tentang Kami</Text>
            </Button>
          </GridItem>
        </Grid>
      </Box>

      <Box padding={20}>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(12, 1fr)" }}
          gap={4}
          paddingBottom={10}
        >
          <GridItem colSpan={{ base: 12, md: 6 }}>
            <Text as={"p"} fontWeight={700} color={"#f94a1f"}>
              TESTIMONIALS
            </Text>
            <Heading fontSize={40} fontWeight={"bold"} paddingBottom={5}>
              They Satisfied With Our Service
            </Heading>
          </GridItem>
          <GridItem colSpan={{ base: 12, md: 6 }}>
            <Stack direction="row" spacing={4} justifyContent={"end"}>
              <Button borderRadius={50} height={50} variant={"outline"}>
                <ArrowBackIcon />
              </Button>
              <Button
                borderRadius={50}
                height={50}
                backgroundColor={"#f94a1f"}
                color={"#feebe6"}
                _hover={{
                  background: "#fe8a65",
                }}
              >
                <ArrowForwardIcon />
              </Button>
            </Stack>
          </GridItem>
        </Grid>
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          pagination={{
            clickable: true,
            renderBullet: function () {
              return "";
            },
          }}
          loop={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          {[1, 2, 3, 4, 5].map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Box textAlign={"left"} padding={5}>
                  <Card borderRadius={15} variant={"elevated"} padding={3}>
                    <CardBody>
                      <Stack spacing="3">
                        <Heading size="md" color={"gray.800"}>
                          Professional, Reliable, and Cost Effective
                        </Heading>
                        <Text fontSize="sm" fontWeight={"400"} color="gray.600">
                          &quot;This was my first time coming to a Laundromat
                          ever. I was greeted by a woman with a warm smile. She
                          then gave me recommendation per the clothes i had. She
                          was so helphul and friendly!&quot;
                        </Text>
                      </Stack>
                    </CardBody>
                    <CardFooter>
                      <Box
                        display={"flex"}
                        justifyContent={"start"}
                        alignContent={"center"}
                        alignItems={"center"}
                      >
                        <Box>
                          <Wrap>
                            <WrapItem>
                              <Avatar
                                name="Dan Abrahmov"
                                src="https://bit.ly/dan-abramov"
                              />
                            </WrapItem>
                          </Wrap>
                        </Box>
                        <Box marginLeft={2}>
                          <Heading
                            fontWeight={700}
                            fontSize={"md"}
                            color="gray.800"
                          >
                            Donny
                          </Heading>
                          <Text
                            fontSize={"sm"}
                            fontWeight={500}
                            color="gray.600"
                          >
                            Pekerja
                          </Text>
                        </Box>
                      </Box>
                    </CardFooter>
                  </Card>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>

      <Box padding={20}>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(12, 1fr)" }} // 1 kolom untuk mobile, 12 kolom untuk medium screen
          gap={4}
          paddingBottom={10}
        >
          <GridItem colSpan={{ base: 12, md: 6 }}>
            <Image
              style={{
                // borderRadius: 20,
                width: "100%",
              }}
              src={"/assets/images/Group 9238.png"}
              alt=""
              width={300}
              height={300}
            />
          </GridItem>
          <GridItem colSpan={{ base: 12, md: 6 }} alignContent={"center"}>
            <Text as={"p"} fontWeight={700} color={"#f94a1f"}>
              RESERVE YOUR ORDER
            </Text>
            <Heading fontSize={40} fontWeight={"bold"} paddingBottom={5}>
              Book Your Order Now!
            </Heading>
            <Button
              backgroundColor={"#f94a1f"}
              color={"#feebe6"}
              size="lg"
              borderRadius={30}
              width={"3xs"}
              _hover={{
                background: "#fe8a65",
              }}
            >
              <Text fontSize={"md"}>Reservasi</Text>
            </Button>
          </GridItem>
        </Grid>
      </Box>

      <Box
        marginLeft={20}
        marginRight={20}
        borderRadius={20}
        padding={20}
        background={"#fdf2ef"}
        backgroundImage={"/assets/images/Group 1000004393.png"}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
      >
        <Heading
          fontSize={40}
          fontWeight={"bold"}
          paddingBottom={20}
          textAlign={"center"}
        >
          FAQ
        </Heading>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(12, 1fr)" }}
          gap={4}
          paddingBottom={10}
          alignItems="start"
        >
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <GridItem colSpan={{ base: 12, md: 6 }} key={index}>
              <Box width="100%">
                <Accordion allowToggle>
                  <AccordionItem
                    background="white"
                    // paddingTop={3}
                    // paddingBottom={3}
                    border={0}
                    boxShadow="md"
                    padding={5}
                    borderRadius={15}
                    marginBottom={5}
                  >
                    <h2>
                      <AccordionButton onClick={() => handleToggle(index)}>
                        <Box as="span" flex="1" textAlign="left">
                          <Text fontWeight={600}>
                            Apa yang harus saya persiapkan untuk Pickup
                          </Text>
                        </Box>
                        {/* Gunakan ikon yang berbeda berdasarkan status buka/tutup */}
                        {expandedIndex === index ? (
                          <MinusIcon color={"#f94a1f"} fontSize={"2xl"} />
                        ) : (
                          <PlusSquareIcon color={"#f94a1f"} fontSize={"2xl"} />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>

      <Box padding={20}>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(12, 1fr)" }} // 1 kolom untuk mobile, 12 kolom untuk medium screen
          gap={4}
          paddingBottom={10}
        >
          <GridItem colSpan={{ base: 8, md: 8 }} colStart={{ base: 3, md: 3 }}>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(12, 1fr)" }}
              gap={4}
              paddingBottom={10}
            >
              <GridItem colSpan={{ base: 12, md: 8 }}>
                <Text color="#f94a1f" fontWeight={700}>
                  AFFORDABLE CLEANING SOLUTIONS
                </Text>
                <Heading fontSize={40} fontWeight="bold" paddingBottom={5}>
                  Get The App!
                </Heading>
                <Text fontWeight={500} width="50%">
                  Download Aplikasi kami untuk memudahkan anda transaksi. Dalam
                  satu genggaman anda bisa mempunyai lebih bersama keluarga.
                </Text>
              </GridItem>

              <GridItem
                colSpan={{ base: 12, md: 4 }}
                display="flex"
                justifyContent="center"
              >
                <Image
                  style={{
                    borderRadius: 20,
                  }}
                  src="/assets/images/image.png"
                  alt=""
                  width={300}
                  height={300}
                />
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </Box>

      <Box padding={20}>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(12, 1fr)" }}
          gap={4}
          paddingBottom={10}
        >
          <GridItem colSpan={{ base: 12, md: 6 }}>
            <Text color="#f94a1f" fontWeight={700}>
              NEWS KAMI
            </Text>
            <Heading fontSize={40} fontWeight={"bold"} paddingBottom={5}>
              Getwash Laundry: News for a Tidy Lifestyle
            </Heading>
          </GridItem>
          <GridItem colSpan={{ base: 12, md: 6 }}>
            <Stack direction="row" spacing={4} justifyContent={"end"}>
              <Button borderRadius={50} height={50} variant={"outline"}>
                <ArrowBackIcon />
              </Button>
              <Button
                borderRadius={50}
                height={50}
                backgroundColor={"#f94a1f"}
                color={"#feebe6"}
                _hover={{
                  background: "#fe8a65",
                }}
              >
                <ArrowForwardIcon />
              </Button>
            </Stack>
          </GridItem>
        </Grid>
        <Swiper
          slidesPerView={4}
          spaceBetween={0}
          pagination={{
            clickable: true,
            renderBullet: function () {
              return "";
            },
          }}
          loop={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          {[1, 2, 3, 4, 5].map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Box textAlign={"left"} padding={5}>
                  <Card borderRadius={15} variant={"unstyled"}>
                    <Image
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: 15,
                      }}
                      src={"/assets/images/image 72.png"}
                      alt=""
                      loading="lazy"
                      width={300}
                      height={300}
                    />
                    <CardBody>
                      <Stack spacing="1" mt={2}>
                        <Text fontSize="md" fontWeight={"600"} color="gray.600">
                          5 Maret 2024
                        </Text>
                        <Heading size="md" fontWeight={"700"}>
                          Lorem ipsum dolor sit amet consectetur. Etiam at.
                        </Heading>
                        <Text fontSize="md" fontWeight={"400"} color="gray.600">
                          do eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam.
                        </Text>
                      </Stack>
                    </CardBody>
                  </Card>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>

      <Box
        marginLeft={20}
        marginRight={20}
        borderRadius={20}
        padding={20}
        background={"#fdf2ef"}
      >
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(12, 1fr)" }} // 1 kolom untuk mobile, 12 kolom untuk layar lebih besar
          gap={4}
          paddingBottom={10}
        >
          <GridItem colSpan={{ base: 12, md: 8 }} colStart={{ base: 1, md: 3 }}>
            <Stack spacing={7}>
              <Text color="#f94a1f" fontWeight={700} textAlign={"center"}>
                SUBSRIBE TO OUR NEWSLETTER
              </Text>
              <Heading fontSize={40} fontWeight={"bold"} textAlign={"center"}>
                Sign Up and Receive Our Special Offers
              </Heading>
              <Grid
                templateColumns={{ base: "1fr", md: "repeat(12, 1fr)" }}
                gap={4}
                paddingBottom={10}
              >
                <GridItem
                  colSpan={{ base: 12, md: 10 }}
                  colStart={{ base: 1, md: 2 }}
                >
                  <Box marginTop={5} display={"flex"}>
                    <InputGroup size={"lg"}>
                      <InputLeftElement pointerEvents="none">
                        <EmailIcon color="gray.700" />
                      </InputLeftElement>
                      <Input
                        placeholder="Your Email"
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
                    </InputGroup>

                    <Button
                      backgroundColor={"#f94a1f"}
                      color={"#feebe6"}
                      size="lg"
                      borderRadius={30}
                      width={"3xs"}
                      _hover={{
                        background: "#fe8a65",
                      }}
                    >
                      <Text fontSize={"md"}>Subscribe</Text>
                    </Button>
                  </Box>
                </GridItem>
              </Grid>
            </Stack>
          </GridItem>
        </Grid>
      </Box>

      <Box
        padding={20}
        // background={"#fdf2ef"}
        mx={"auto"}
        w={"100%"}
        h={"480px"}
      >
        <Map posix={[4.79029, -75.69003]} />
      </Box>
    </>
  );
}
