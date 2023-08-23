import { Box, Card, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";
const Reviews = ({ children1, children2, children3, children4 }) => {
  const boxStyle = {
    border: "1px solid #ccc", // Border style
    borderColor: "#ccc", // Border color
    padding: "20px", // Padding inside the box
  };

  return (
    // <Box padding={9}>
    <Card style={boxStyle}>
      <Text fontSize="xl" fontWeight="bold">
        <br />
        {children1}
      </Text>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        children={<HStack>{children2}</HStack>}
      ></Box>
      <Text paddingBottom={2}>
        <br />
        {children3}
      </Text>
      <Text fontWeight="bold" paddingBottom={5}>
        {children4}
      </Text>
    </Card>
    // </Box>
  );
};

export default Reviews;
