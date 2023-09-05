import React, { useEffect } from "react";
import { useItemId } from "../context/itemIdContext";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Button,
  HStack,
} from "@chakra-ui/react";
import NavBar from "../components/TopPage/Navbar/NavBar";
import itemsData from "../data/itemsData.js";
import { useParams } from "react-router-dom";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/shoppingCartContext";
const ItemInfo = () => {
  const { setItem } = useItemId();
  const { id } = useParams();
  const {
    getItemQuantity,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useShoppingCart();

  const itemId = parseInt(id, 10);
  const itemsLength = itemsData.length;
  const prevId = itemId === 1 ? itemsLength : itemId - 1;
  const nextId = itemId === itemsLength ? 1 : itemId + 1;
  const selectedItem = itemsData.find((item) => item.id === itemId);
  const quantity = getItemQuantity(selectedItem);
  // Set the item ID in the context using 'setItem'
  // useEffect(() => {
  //   setItem(itemId);
  // }, [itemId, setItem]);

  return (
    <>
      <NavBar />
      <Flex height="87vh">
        <Flex width="50%">
          <Box
            // bg="green.200"
            display="flex"
            alignItems="center"
            width="5%"
            justifyContent="center"
            paddingBottom={8}
          >
            <Link to={`/shop/item/${prevId}`}>
              <GrFormPrevious size={40} />
            </Link>
          </Box>
          <Box
            // bg="green.400"
            borderRadius={30}
            flex="1"
            display="flex"
            justifyContent="flex-end"
          >
            <Image
              src={selectedItem.imgUrl}
              alt={selectedItem.name}
              height="87vh"
              borderRadius={30}
            />
          </Box>
        </Flex>
        <Flex width="50%">
          <Box
            // bg="green.700"
            borderRadius={30}
            width="95%"
            height="100%"
            padding={5}
          >
            <Box justifyContent="flex-start">
              <Heading>{selectedItem.name}</Heading>
              <Text>{selectedItem.category}</Text>
              <Text>{selectedItem.price}</Text>
              <div>
                {quantity === 0 ? (
                  <Button
                    onClick={() => {
                      increaseQuantity(selectedItem);
                      // console.log(quantity + " test");
                    }}
                  >
                    + Add To Cart
                  </Button>
                ) : (
                  <HStack>
                    <div style={{ gap: ".5rem" }}>
                      <div style={{ gap: ".5rem" }}>
                        <Button
                          onClick={() => {
                            decreaseQuantity(selectedItem.id);
                            console.log(quantity);
                          }}
                        >
                          -
                        </Button>
                        <div>
                          <span>{quantity}</span> in cart
                        </div>
                        <Button onClick={() => increaseQuantity(selectedItem)}>
                          +
                        </Button>
                      </div>
                      <Button
                        onClick={() => removeFromCart(selectedItem.id)}
                        variant="danger"
                        size="sm"
                      >
                        Remove
                      </Button>
                    </div>
                  </HStack>
                )}
              </div>
            </Box>
          </Box>

          <Box
            // bg="green.200"
            display="flex"
            alignItems="center"
            width="5%"
            justifyContent="center"
            paddingBottom={8}
          >
            <Link to={`/shop/item/${nextId}`}>
              <GrFormNext size={40} />
            </Link>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default ItemInfo;
