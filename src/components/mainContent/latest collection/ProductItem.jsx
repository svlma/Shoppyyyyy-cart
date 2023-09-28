import React, { useState } from "react";
import { Box, Card, Image, Stack, Text } from "@chakra-ui/react";
const ProductItem = ({ children, text, price }) => {
  const [isHovered, setHovered] = useState(false);
  const imageStyle = {
    width: "450px",
    height: "350px",
    objectFit: "cover",
    borderRadius: 40,
    paddingTop: "30px",
    paddingLeft: "30px",
    paddingRight: "30px",
    paddingBottom: "30px",
    transition: "transform 0.2s ease-in-out",
    transform: isHovered ? "scale(1.1)" : "scale(1)",
    overflow: "hidden",
  };
  const textStyle = {
    display: isHovered ? "block" : "none",
    width: "100%",
    textAlign: "center",
    // padding: 10,
  };

  return (
    <Card
      shadow="2xl"
      margin={5}
      paddingBottom={5}
      display="flex"
      justifyContent="center"
      flexDirection="column"
      textAlign="center"
    >
      <Box>
        <Image
          src={children}
          style={imageStyle}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />
        <Stack>
          <Text>{text}</Text>
          {isHovered ? (
            <Text fontWeight="light" fontSize="sm" style={textStyle}>
              {price}
            </Text>
          ) : (
            <Text fontWeight="light" fontSize="sm">
              .
            </Text>
          )}
        </Stack>
      </Box>
    </Card>
  );
};

export default ProductItem;
