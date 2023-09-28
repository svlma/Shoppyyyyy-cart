import { Box, HStack, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import JourneyThroughtStyle from "./JourneyThroughtStyle";
import sale from "/Users/salma/Repos/Shopping-cart-website/Shopping-Cart/src/assets/50sales.jpeg";
import green from "/Users/salma/Repos/Shopping-cart-website/Shopping-Cart/src/assets/green.jpeg";
const ReadMore = () => {
  const imageStyles = {
    width: "100%",
    height: "100%",
  };
  const textStyle = {
    position: "absolute",

    top: "19%",
    left: "12%",
    color: "white",
    fontWeight: "bold",
    fontFamily: "'Handjet', inter",
    fontSize: "70px",
  };
  const text1Style = {
    position: "absolute",
    top: "67%",
    left: "47%",
    fontFamily: "'Handjet', inter",
    color: "white",
    fontWeight: "bold",
    fontSize: "68px",
  };
  const text2Style = {
    position: "absolute",
    top: "28%",
    left: "6%",
    color: "white",
    fontWeight: "bold",
    fontSize: "58px",
    fontFamily: "'Handjet', inter",
  };

  return (
    <>
      <SimpleGrid columns={2} spacing={1} justifyContent="center">
        <Box position="relative">
          <img src={green} alt="Image 2" style={imageStyles} />
          <Text style={textStyle}>CONNECTING WITH EARTH</Text>
          <Text style={text2Style}> Naturally Natural</Text>
          <Text style={text1Style}>
            <em>BE PART OF OUR JOURNEY </em>
          </Text>
        </Box>
        <Box position="relative">
          <img src={sale} alt="Image 3" style={imageStyles} />
        </Box>
      </SimpleGrid>
      <Stack textAlign="center" paddingTop={10}>
        <JourneyThroughtStyle />
      </Stack>
    </>
  );
};
export default ReadMore;
