import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Paul from "/Users/salma/Repos/Shopping-cart-website/Shopping-Cart/src/assets/Paul.jpeg";
import save from "/Users/salma/Repos/Shopping-cart-website/Shopping-Cart/src/assets/save .jpeg";
import sun from "/Users/salma/Repos/Shopping-cart-website/Shopping-Cart/src/assets/sun.jpeg";
import autoBam from "/Users/salma/Repos/Shopping-cart-website/Shopping-Cart/src/assets/autoBAM.png";
import three from "/Users/salma/Repos/Shopping-cart-website/Shopping-Cart/src/assets/three.jpeg";
import oversize from "/Users/salma/Repos/Shopping-cart-website/Shopping-Cart/src/assets/oversize.jpeg";
import Options from "/Users/salma/Repos/Shopping-cart-website/Shopping-Cart/src/assets/Options.jpeg";
import heart from "/Users/salma/Repos/Shopping-cart-website/Shopping-Cart/src/assets/heart.jpeg";
import black from "/Users/salma/Repos/Shopping-cart-website/Shopping-Cart/src/assets/black.jpeg";
import dee from "/Users/salma/Repos/Shopping-cart-website/Shopping-Cart/src/assets/dee.jpeg";
import ProductItem from "./ProductItem";
const ProductsHomePage = () => {
  return (
    <>
      <Text textAlign="center" fontSize="2xl" paddingTop={12}>
        OUR COLLECTION
      </Text>
      <SimpleGrid
        columns={5}
        row={3}
        as="dl"
        textAlign="center"
        paddingTop={10}
        paddingBottom={10}
      >
        <ProductItem children={Paul} />
        <ProductItem children={save} />
        <ProductItem children={sun} />
        <ProductItem children={autoBam} />
        <ProductItem children={black} />
        <ProductItem children={Options} />
        <ProductItem children={oversize} />
        <ProductItem children={heart} />
        <ProductItem children={three} />
        <ProductItem children={dee} />
      </SimpleGrid>
      <Box
        paddingBottom={9}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          _hover={{
            transform: "scale(1.08)",
            transition: "trandform .25s ease-in-out",
          }}
        >
          VIEW ALL PRODUCTS
        </Button>
      </Box>
    </>
  );
};

export default ProductsHomePage;
