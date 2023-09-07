import React, { useEffect } from "react";
import { useItemId } from "../context/itemIdContext";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Button,
  Container,
  HStack,
  Stack,
} from "@chakra-ui/react";
import NavBar from "../components/TopPage/Navbar/NavBar";
import itemsData from "../data/itemsData.js";
import { useParams } from "react-router-dom";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/shoppingCartContext";
import WishListHeart from "../components/TopPage/Wishlist/WishListHeart";
import { formatCurrency } from "../utilities/Currency";
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

  return (
    <>
      <NavBar />
      <Flex height="87vh" paddingTop={5}>
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
              <Text paddingBottom={5} fontSize="xl" color="gray.500">
                {formatCurrency(selectedItem.price)}
              </Text>
              <hr />
              <HStack paddingTop={2}>
                <Text>CATEGORY:</Text>
                {selectedItem.category.map((c) => (
                  <Text>{c}</Text>
                ))}
              </HStack>

              <Container
                padding={6}
                paddingRight={20}
                // bg="facebook.100"
                display="flex"
                justifyContent="center"
              >
                {quantity === 0 ? (
                  <Button
                    style={{ width: "300px", height: "60px" }}
                    fontSize="2xl"
                    onClick={() => {
                      increaseQuantity(selectedItem);
                      // console.log(quantity + " test");
                    }}
                  >
                    + Add To Cart
                  </Button>
                ) : (
                  <Container display="flex" justifyContent="center">
                    <Box height="60px">
                      <Box display="flex" justifyContent="center">
                        <Button
                          onClick={() => {
                            decreaseQuantity(selectedItem.id);
                            console.log(quantity);
                          }}
                        >
                          -
                        </Button>
                        <Text padding={2}>
                          <span>{quantity}</span> in cart
                        </Text>
                        <Button onClick={() => increaseQuantity(selectedItem)}>
                          +
                        </Button>
                      </Box>

                      <Button
                        onClick={() => removeFromCart(selectedItem.id)}
                        variant="danger"
                        size="sm"
                        paddingLeft={12}
                      >
                        -Remove-
                      </Button>
                    </Box>
                  </Container>
                )}
              </Container>
              <Container
                // padding={6}
                paddingRight={20}
                display="flex"
                justifyContent="center"
              >
                <Link to={"/sign"}>
                  <Button
                    style={{ width: "300px", height: "60px" }}
                    fontSize="2xl"
                    onClick={() => {}}
                    border="2px solid #333"
                  >
                    BUY IT NOW!
                  </Button>
                </Link>
              </Container>
              <Container
                padding={6}
                paddingRight={20}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <WishListHeart id={selectedItem.id} />

                <Text paddingLeft={3}> Add to wishlist</Text>
              </Container>
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
