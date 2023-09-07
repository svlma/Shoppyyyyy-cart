import {
  Box,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, { useMemo, useRef, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsShop } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
import itemsData from "../../../data/itemsData";
import ShopItems from "../../ShopItems";
import WishListItems from "../Wishlist/WishListItems";
import WishListPortal from "../Wishlist/WishListPortal";
import CartButton from "./CartButton";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";
import cart from "/Users/salma/Repos/Shopping-cart-website/Shopping-Cart/src/assets/cart.webp";
import { BsHeartbreak } from "react-icons/bs";
const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};

const textStyle = {
  fontFamily: "'Handjet', inter", // Replace 'Font Name' with the actual font name
};
const NavBar = ({ position, shop }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  // Filter items based on the user's input
  const filteredItems = useMemo(() => {
    return itemsData.filter((item) => {
      return item.name.toLowerCase().includes(query.toLowerCase());
    });
  }, [query]);
  console.log(filteredItems);
  const emptySearch = filteredItems.length === 0 ? true : false;

  console.log(emptySearch);
  return (
    <>
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
                  transition: "transform .15s ease-in",
                }}
              >
                SHOPPYYYYY
              </Text>
            </Link>
            <Link to="/shop">
              <HStack
                _hover={{
                  transform: "scale(1.09)",
                  transition: "transform .15s ease-in",
                }}
              >
                <Box children={<BsShop />} paddingLeft={3} />
                <Text fontWeight="bold">SHOP</Text>
              </HStack>
            </Link>
          </HStack>
          <HStack>
            <Box width="200px">
              {/* Pass setQuery to SearchBar */}
              <SearchBar query={query} setQuery={setQuery} />
            </Box>
            <CartButton />
            <HStack
              _hover={{
                transform: "scale(1.09)",
                transition: "transform .15s ease-in",
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
                  transition: "transform .15s ease-in",
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

      <Box
        // height="60vh"
        position="fixed"
        top="24"
        left="0"
        right="0"
        zIndex="1000" // Set a high z-index to appear on top of other content
        display={query ? "block" : "none"} // Show the search results only when query is not empty
      >
        <SimpleGrid
          style={{
            // Adjust the height as needed
            background:
              "linear-gradient(to top, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%)",
          }}
          columns={4}
          rows={3}
          gap={4}
          as="dl"
          textAlign="center"
          fontWeight="bold"
          padding={5}
          boxShadow="2xl"
          paddingBottom={10}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderBottomRadius="2.9%"
        >
          {query &&
            (emptySearch ? (
              <Box
                padding={350}
                paddingBottom={4}
                color="blackAlpha.700"
                style={textStyle}
                fontSize="5xl"
                width="100%"
              >
                <Text display="flex" textAlign="center" justifyContent="center">
                  NO RESULT
                  <BsHeartbreak size={65} style={{ marginLeft: "10px" }} />
                </Text>
              </Box>
            ) : (
              filteredItems.map((item) => <ShopItems key={item.id} {...item} />)
            ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default NavBar;
