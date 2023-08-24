import React from "react";
import { Box, Image, Flex, Text } from "@chakra-ui/react";
// import card from "../assets/payCard.jpeg";
import card from "/Users/salma/Repos/Shopping-cart-website/Shopping-Cart/src/assets/payCard.jpeg";
import FooterAttributes from "./FooterAttributes";

const Footer = () => {
  return (
    <Flex paddingTop={20} direction="column">
      <Box bg="blackAlpha.500" boxShadow="md">
        <FooterAttributes />
      </Box>
      <Box
        height="60px"
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        bg="blackAlpha.600"
      >
        <Text>© 2023 SHOPPYYYYY All Rights Reserved</Text>
        <Image
          src={card}
          objectFit="cover"
          width="auto"
          height="60%"
          borderRadius={10}
        />
      </Box>
    </Flex>
  );
};

export default Footer;
