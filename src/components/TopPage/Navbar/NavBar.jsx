import { Box, HStack, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsShop } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
import CartButton from "./CartButton";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";
import cart from "/Users/salma/Repos/Shopping-cart-website/Shopping-Cart/src/assets/cart.webp";
import WishListPortal from "../Wishlist/WishListPortal";
import WishListItems from "../Wishlist/WishListItems";
const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};

const NavBar = ({ position, shop }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box
      as="nav"
      width="100%"
      position={position}
      top="0"
      zIndex="sticky"
      bgColor={shop && "white"}
    >
      <HStack
        padding="10px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <HStack>
          <Link to={"/"}>
            <Image
              src={cart}
              boxSize="60px"
              borderRadius={11}
              objectFit="cover"
              margin={2}
            />
          </Link>
          <Link to={"/"}>
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
          </Link>
          <Link to="/shop">
            <HStack
              _hover={{
                transform: "scale(1.09)",
                transition: "trandform .15s ease-in ",
              }}
            >
              <Box children={<BsShop />} paddingLeft={3} />
              <Text fontWeight="bold">SHOP</Text>
            </HStack>
          </Link>
        </HStack>
        <HStack>
          <Box width="200px">
            <SearchBar />
          </Box>
          <CartButton />
          <HStack
            _hover={{
              transform: "scale(1.09)",
              transition: "trandform .15s ease-in ",
            }}
            style={BUTTON_WRAPPER_STYLES}
            onClick={() => console.log("clicked")}
          >
            <Box children={<AiOutlineHeart />} padding={1} />

            <Text
              fontWeight="bold"
              paddingRight={1}
              onClick={() => setIsOpen(true)}
            >
              WISHLIST
            </Text>
            <WishListPortal open={isOpen} onClose={() => setIsOpen(false)}>
              <WishListItems />
            </WishListPortal>
          </HStack>
          <Link to={"/login"}>
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
          </Link>
          <ColorModeSwitch />
        </HStack>
      </HStack>
    </Box>
  );
};

export default NavBar;
