import React from "react";
import NavBar from "./components/navBar/NavBar";
import { Box } from "@chakra-ui/react";
import Footer from "./components/footer/Footer";
import "./index.css";
import MainContent from "./MainContent";

const App = () => {
  return (
    <>
      <Box bg="blackAlpha.700" boxShadow="md">
        <NavBar />
      </Box>
      <Box paddingTop={10}></Box>
      <Box>
        <MainContent />
      </Box>

      <Box>
        <Footer />
      </Box>
    </>
  );
};

export default App;
