import React from "react";
import { Stack, Heading, Text, Box } from "@chakra-ui/react";
import movement from "/Users/salma/Repos/Shopping-cart-website/Shopping-Cart/src/assets/movement.png";
import aala9a from "/Users/salma/Repos/Shopping-cart-website/Shopping-Cart/src/assets/aala9a.jpeg";
const Intro = () => {
  return (
    <Stack
      style={{
        backgroundImage: `url(${aala9a})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // width: "100vw",
        // height: "87vh",
        height: "50vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div className="background-fade"></div>
      <Box
        _hover={{
          transform: "scale(1.05)",
          transition: "trandform .8s ease-in-out",
        }}
      >
        <Heading textAlign="center" fontSize="7xl">
          IT'S THAT TIME OF YEAR, AGAIN.
        </Heading>
        <Text fontWeight="bold" fontSize="2xl">
          Take the edge off the end of summer with a smokin' deal on premium
          audio{" "}
        </Text>
        <Text fontWeight="bold" fontSize="2xl">
          that looks great and sounds even better.
        </Text>
      </Box>
    </Stack>
  );
};

export default Intro;
