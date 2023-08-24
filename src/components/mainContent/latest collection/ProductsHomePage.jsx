import { Box, Button, SimpleGrid, Heading } from "@chakra-ui/react";
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
  const boxStyle = {
    fontFamily: "'Passion One', sans-serif",
  };
  return (
    <>
      <Heading textAlign="center" paddingTop={12} style={boxStyle}>
        LATEST COLLECTION
      </Heading>
      <SimpleGrid
        columns={5}
        rows={3}
        gap={4}
        as="dl"
        textAlign="center"
        paddingTop={10}
        paddingBottom={10}
        fontWeight="bold"
      >
        <ProductItem children={Paul} text="MAMA'S BOY" price="30$" />
        <ProductItem children={save} text="SUNT LAB" price="32$" />
        <ProductItem children={sun} text="THE COLOR COLLECTIVE" price="30$" />
        <ProductItem children={autoBam} text="FERMEE" price="30$" />
        <ProductItem children={black} text="DAILY PAPER" price="30$" />
        <ProductItem
          children={Options}
          text="FUSION OF PERFECTION"
          price="70$"
        />
        <ProductItem children={oversize} text="SUMMER" price="40$" />
        <ProductItem children={heart} text="THE SQUARE OF LOVE" price="35$" />
        <ProductItem children={three} text="TOONIQUE" price="50$" />
        <ProductItem children={dee} text="ARTIST DECEMBER" price="20$" />
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
            transition: "transform .25s ease-in-out",
          }}
        >
          VIEW ALL PRODUCTS
        </Button>
      </Box>
    </>
  );
};

export default ProductsHomePage;
