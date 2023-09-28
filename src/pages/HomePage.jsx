import React from "react";
import Background from "../components/TopPage/Background";
import ReadMore from "../components/mainContent/ReadMore";
import { Box } from "@chakra-ui/react";
import Funct from "../components/mainContent/why choose us/Funct";
import SalesOff from "../components/mainContent/SalesOff";
// import ProductsHomePage from "../components/mainContent/latest collection/ProductsHomePage";
import Reviews from "../components/mainContent/reviews/Reviews";
import Footer from "../components/footer/Footer";
// import CollectionCarousel from "../components/mainContent/latest collection/CollectionCarousel";
import FakeCarousel from "../components/mainContent/latest collection/FakeCarousel";
import Collections from "../components/mainContent/Collections";
import BackAd from "../components/mainContent/BackAd";

const HomePage = () => {
  return (
    <>
      <Background />

      <Box paddingTop={10}></Box>
      <ReadMore />

      <Box paddingBottom={5}>
        <FakeCarousel />
      </Box>
      <Box paddingTop={10}></Box>
      <SalesOff />
      <Box paddingTop={10} bg="blackAlpha.900" boxShadow="md"></Box>
      <Box paddingBottom={5}>
        <Collections />
      </Box>
      <Box paddingTop={10} bg="blackAlpha.900" boxShadow="md">
        <Funct />
      </Box>
      <Box paddingBottom={5} paddingTop={6}>
        <BackAd />
      </Box>
      <Box bg="blackAlpha.900" boxShadow="md"></Box>
      <Reviews />

      <Footer />
    </>
  );
};

export default HomePage;
