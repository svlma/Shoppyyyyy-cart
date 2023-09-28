import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import img from "/Users/salma/Repos/Shopping-cart-website/Shopping-Cart/src/assets/purses/brown1.jpeg";
import img1 from "/Users/salma/Repos/Shopping-cart-website/Shopping-Cart/src/assets/temp/clip.jpeg";
import img2 from "/Users/salma/Repos/Shopping-cart-website/Shopping-Cart/src/assets/shoes.jpeg";

const Collections = () => {
  const imageStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "25px",
  };
  const textStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontWeight: "bold",
    fontSize: "24px",
  };
  return (
    <>
      <Heading
        padding={6}
        paddingTop={10}
        display="flex"
        justifyContent="center"
      >
        NEW COLLECTIONS
      </Heading>
      <SimpleGrid columns={3} spacing={5} padding={4} justifyContent="center">
        <Box position="relative">
          <img src={img} alt="Image 1" style={imageStyles} />
          <Text style={textStyle}>PURSES</Text>
        </Box>
        <Box position="relative">
          <img src={img1} alt="Image 2" style={imageStyles} />
          <Text style={textStyle}>ACCESSORIES</Text>
        </Box>
        <Box position="relative">
          <img src={img2} alt="Image 3" style={imageStyles} />
          <Text style={textStyle}>SHOES</Text>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default Collections;
