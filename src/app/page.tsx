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

export default function Home() {
  return (
    <>
      <Grid templateColumns="repeat(12, 1fr)" gap={4}>
        <GridItem colSpan={6}>
          {/* Konten untuk kolom 10 */}
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
                _focus={{
                  border: '1px solid #f94a1f',
                  boxShadow: "0 5px 8px rgba(0, 0, 0, 0.1)",
                }}
              />

              <Button
                backgroundColor={"#f94a1f"}
                color={"#feebe6"}
                size="lg"
                borderRadius={30}
                width={"3xs"}
                _hover={{
                  background: '#fe8a65'
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
    </>
  );
}
