import cart from "/Users/salma/Repos/Shopping-cart-website/Shopping-Cart/src/assets/cart.webp";
import { Box, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { BiShoppingBag } from "react-icons/Bi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsShop } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <>
      <HStack
        padding="10px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <HStack>
          <Image
            src={cart}
            boxSize="60px"
            borderRadius={11}
            objectFit="cover"
            margin={2}
          />
          <Text
            fontWeight="bold"
            color="yellow"
            fontSize="2xl"
            bgGradient={[
              "linear(to-tr, teal.300, yellow.400)",
              "linear(to-t, blue.200, teal.500)",
              "linear(to-b, orange.100, purple.300)",
            ]}
            bgClip="text"
            _hover={{
              transform: "scale(1.03)",
              transition: "trandform .15s ease-in ",
            }}
          >
            SHOPPYYYYY
          </Text>
          <HStack
            _hover={{
              transform: "scale(1.09)",
              transition: "trandform .15s ease-in ",
            }}
          >
            <Box children={<BsShop />} paddingLeft={3} />
            <Text fontWeight="bold">SHOP</Text>
          </HStack>
        </HStack>
        <HStack>
          <Box width="200px">
            <SearchBar />
          </Box>

          <HStack
            _hover={{
              transform: "scale(1.09)",
              transition: "trandform .15s ease-in ",
            }}
          >
            <Box children={<BiShoppingBag />} padding={1} />
            <Text fontWeight="bold" paddingRight={1}>
              CART
            </Text>
          </HStack>

          <HStack
            _hover={{
              transform: "scale(1.09)",
              transition: "trandform .15s ease-in ",
            }}
          >
            <Box children={<AiOutlineHeart />} padding={1} />
            <Text fontWeight="bold" paddingRight={1}>
              WISHLIST
            </Text>
          </HStack>

          <HStack
            _hover={{
              transform: "scale(1.09)",
              transition: "trandform .15s ease-in ",
            }}
          >
            <Box children={<VscAccount />} padding={1} />
            <Text fontWeight="bold" paddingRight={1}>
              LOGIN
            </Text>
          </HStack>

          <ColorModeSwitch />
        </HStack>
      </HStack>
    </>
  );
};

export default NavBar;
