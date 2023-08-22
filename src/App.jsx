import React from "react";
import NavBar from "./components/NavBar";
import { Box } from "@chakra-ui/react";
import Footer from "./components/Footer";
import MainContent from "./MainContent";
const App = () => {
  return (
    <>
      <Box bg="blackAlpha.700" boxShadow="md">
        <NavBar />
      </Box>
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
