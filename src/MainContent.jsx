import React from "react";
import Intro from "./components/mainContent/Intro";
import ReadMore from "./components/mainContent/ReadMore";
import { Box } from "@chakra-ui/react";
import Funct from "./components/mainContent/Funct";
import SalesOff from "./components/mainContent/SalesOff";
import ProductsHomePage from "./components/mainContent/ProductsHomePage";
import Reviews from "./components/mainContent/Reviews";
const MainContent = () => {
  return (
    <>
      <Box paddingTop={10}></Box>
      <Box paddingTop={10}></Box>
      <Box paddingTop={10}></Box>

      <Intro />
      <Box paddingTop={10}></Box>
      <Box paddingTop={10}></Box>
      <Box paddingTop={10}></Box>

      <Box paddingTop={10} bg="blackAlpha.700" boxShadow="md"></Box>
      <ReadMore />
      <Funct />
      <Box paddingTop={10} bg="blackAlpha.700" boxShadow="md"></Box>
      <ProductsHomePage />

      <SalesOff />
      <Reviews />
      {/* <Box>
        <Reviews />
      </Box> */}
    </>
  );
};

export default MainContent;
