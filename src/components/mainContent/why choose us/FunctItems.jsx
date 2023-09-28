import React from "react";
import { Text, Box } from "@chakra-ui/react";
const FunctItems = ({ item, text }) => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px", // Adjust the gap between icon and text
  };
  return (
    <div style={containerStyle}>
      <Box
        fontSize="36px"
        paddingTop={10}
        paddingLeft={3}
        paddingRight={3}
        paddingBottom={2}
      >
        {item}
      </Box>

      <Text
        color="white"
        fontWeight="bold"
        fontSize="14px"
        paddingLeft={3}
        paddingRight={3}
        paddingBottom={20}
      >
        {text}
      </Text>
    </div>
  );
};

export default FunctItems;
