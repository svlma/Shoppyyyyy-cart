import React from "react";
import { Image, Box, Flex, Text, Heading, Center } from "@chakra-ui/react";
import background from "/Users/salma/Repos/Shopping-cart-website/Shopping-Cart/src/assets/accessories/calls.jpeg";
const BackAd = () => {
  const imageStyles = {
    width: "50%",
    height: "100%",
  };
  const textStyle = {
    fontFamily: "'Handjet', inter",
    fontSize: "30px",
  };
  const text1Style = {
    fontWeight: "bold",
    fontFamily: "'Handjet', inter",
    fontSize: "70px",
  };
  return (
    <>
      <Flex>
        <Box style={imageStyles}>
          <Text
            style={text1Style}
            padding={20}
            paddingTop={32}
            paddingLeft={28}
          >
            ABOUT US
          </Text>

          <Text style={textStyle} padding={20} paddingTop={11}>
            We are SHOPPYYYYY, a small clothing brand from Morocco. Every now
            and then, we drop exclusive clothing collections, including
            t-shirts, hoodies, sweaters, bags, or caps with our own prints and
            embroidery. We highly value sustainability in all we do and have a
            passion for aesthetics. Buy your piece on the next drop.
          </Text>
        </Box>
        <Image src={background} style={imageStyles} borderLeftRadius="9%" />
      </Flex>
    </>
  );
};

export default BackAd;
