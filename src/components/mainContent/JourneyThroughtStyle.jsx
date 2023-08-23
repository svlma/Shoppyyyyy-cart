import { Heading, Text, Box } from "@chakra-ui/react";
import React from "react";

const JourneyThroughtStyle = () => {
  const textStyle = {
    fontFamily: "'Handjet', sans-serif", // Replace 'Font Name' with the actual font name
  };
  const textStyle2 = {
    fontFamily: "'Handjet', inter", // Replace 'Font Name' with the actual font name
  };
  return (
    <Box bg="blackAlpha.700" padding={10}>
      <Text fontSize="3xl" style={textStyle2}>
        JOURNEY THROUGH STYLE
      </Text>
      <Box>
        <Text paddingTop={3} style={textStyle} fontSize="2xl">
          " Discover our newest assortment, 'Journey Through Style,'
          <br />
          spotlighting exquisite selections from our cherished T-Shirt Odyssey.
          <br />
          Where modern trends intertwine with everlasting comfort. Captivated by
          <br />
          the ageless allure of effortless chic and refinement, our collection
          <br />
          harmonizes sleek contours, delicate embellishments, and a touch of
          <br />
          timeless charm."
          <br />
        </Text>
      </Box>
    </Box>
  );
};

export default JourneyThroughtStyle;
