import React from "react";
import { HStack, Image, Text, Stack, Box, Button } from "@chakra-ui/react";
import arena1 from "/Users/salma/Repos/Shopping-cart-website/Shopping-Cart/src/assets/arena1.jpeg";
import arena2 from "/Users/salma/Repos/Shopping-cart-website/Shopping-Cart/src/assets/arena.jpeg";
import JourneyThroughtStyle from "./JourneyThroughtStyle";
import shop from "/Users/salma/Repos/Shopping-cart-website/Shopping-Cart/src/assets/shoppy.png";
const ReadMore = () => {
  return (
    <>
      <Stack
        style={{
          backgroundImage: `url(${shop})`,

          // backgroundSize: "cover",
          backgroundPosition: "center",
          // width: "100vw",
          // height: "87vh",
          height: "50vh",
          // display: "flex",
          // alignItems: "center",
          // justifyContent: "center",
          // position: "relative",
        }}
      >
        <HStack>
          <Stack padding={10}>
            <Text textAlign="justify" fontSize="xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum...
            </Text>
            <Button padding={10}>READ MORE</Button>
          </Stack>

          <Image
            src={arena2}
            paddingLeft={5}
            paddingRight={5}
            paddingTop={10}
            borderRadius="full"
            maxWidth="50%"
            width="50"
            _hover={{
              transform: "scale(1.02)",
              transition: "trandform .2s ease-in-out",
            }}
          />
        </HStack>
      </Stack>
      <Box paddingTop={10} bg="blackAlpha.700" boxShadow="md"></Box>
      <Stack marginTop="450px" textAlign="center">
        <JourneyThroughtStyle />
      </Stack>
    </>
  );
};
export default ReadMore;
