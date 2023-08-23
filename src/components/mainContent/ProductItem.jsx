import React from "react";
import { Box, Image } from "@chakra-ui/react";
const ProductItem = ({ children }) => {
  const imageStyle = {
    width: "450px",
    height: "350px",
    objectFit: "cover",
    borderRadius: 40,
    paddingTop: "30px",
    paddingLeft: "30px",
    paddingRight: "30px",
    paddingBottom: "10px",
  };
  return (
    <Box>
      <Image
        src={children}
        style={imageStyle}
        _hover={{
          transform: "scale(1.02)",
          transition: "trandform .2s ease-in-out",
        }}
      />
    </Box>
  );
};

export default ProductItem;
