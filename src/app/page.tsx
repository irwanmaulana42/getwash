"use client";

import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { TimeIcon, AtSignIcon, RepeatIcon } from "@chakra-ui/icons"; // Menggunakan icon dari Chakra UI

import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper/modules";

export default function Home() {
  return (
    <>
      <Box>
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
          templateColumns={{ base: "1fr", md: "repeat(12, 1fr)" }} // 1 kolom untuk mobile, 12 kolom untuk medium screen
          gap={4}
          paddingBottom={10}
        >
          <GridItem colSpan={{ base: 12, md: 6 }}>
            <Heading fontSize={40} fontWeight={"bold"} paddingBottom={5}>
              Layanan Kami
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
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              style={{ width: "100%", height: "auto" }}
              src={"https://swiperjs.com/demos/images/nature-8.jpg"}
              alt=""
              loading="lazy"
              width={100}
              height={100}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              style={{ width: "100%", height: "auto" }}
              src={"https://swiperjs.com/demos/images/nature-8.jpg"}
              alt=""
              loading="lazy"
              width={100}
              height={100}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              style={{ width: "100%", height: "auto" }}
              src={"https://swiperjs.com/demos/images/nature-8.jpg"}
              alt=""
              loading="lazy"
              width={100}
              height={100}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              style={{ width: "100%", height: "auto" }}
              src={"https://swiperjs.com/demos/images/nature-8.jpg"}
              alt=""
              loading="lazy"
              width={100}
              height={100}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              style={{ width: "100%", height: "auto" }}
              src={"https://swiperjs.com/demos/images/nature-8.jpg"}
              alt=""
              loading="lazy"
              width={100}
              height={100}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              style={{ width: "100%", height: "auto" }}
              src={"https://swiperjs.com/demos/images/nature-8.jpg"}
              alt=""
              loading="lazy"
              width={100}
              height={100}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              style={{ width: "100%", height: "auto" }}
              src={"https://swiperjs.com/demos/images/nature-8.jpg"}
              alt=""
              loading="lazy"
              width={100}
              height={100}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              style={{ width: "100%", height: "auto" }}
              src={"https://swiperjs.com/demos/images/nature-8.jpg"}
              alt=""
              loading="lazy"
              width={100}
              height={100}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              style={{ width: "100%", height: "auto" }}
              src={"https://swiperjs.com/demos/images/nature-8.jpg"}
              alt=""
              loading="lazy"
              width={100}
              height={100}
            />
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
}
