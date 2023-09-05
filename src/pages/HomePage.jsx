import React from "react";
import Background from "../components/TopPage/Background";
import ReadMore from "../components/mainContent/ReadMore";
import { Box } from "@chakra-ui/react";
import Funct from "../components/mainContent/why choose us/Funct";
import SalesOff from "../components/mainContent/SalesOff";
import ProductsHomePage from "../components/mainContent/latest collection/ProductsHomePage";
import Reviews from "../components/mainContent/reviews/Reviews";
import Footer from "../components/footer/Footer";
const HomePage = () => {
  return (
    <>
      <Background />

      <Box paddingTop={10}></Box>
      <Box paddingTop={10}></Box>
      <Box paddingTop={10}></Box>

      <Box paddingTop={10} bg="blackAlpha.700" boxShadow="md"></Box>

      <ReadMore />

      <Box paddingTop={10}></Box>

      <SalesOff />

      <Box paddingTop={10} bg="blackAlpha.700" boxShadow="md"></Box>

      <Box paddingBottom={5}>
        <ProductsHomePage />
      </Box>

      <Box paddingTop={10} bg="blackAlpha.700" boxShadow="md">
        <Funct />
      </Box>

      <Box paddingTop={6}></Box>

      <Reviews />

      <Footer />
    </>
  );
};

export default HomePage;
