import { Text, Box } from "@chakra-ui/react";
import React from "react";

const JourneyThroughtStyle = () => {
  const textStyle = {
    fontFamily: "'Playfair Display', sans-serif", // Replace 'Font Name' with the actual font name
  };

  return (
    <Box bg="blackAlpha.700" padding={10} fontSize="xl" textAlign="center">
      <Text style={textStyle}>SUMMER SALE</Text>
      <Box>
        <Text paddingTop={3} style={textStyle}>
          50% off all sweats, loungewear and accessories <br />
          from the SH Core Collection
        </Text>
      </Box>
    </Box>
  );
};

export default JourneyThroughtStyle;
