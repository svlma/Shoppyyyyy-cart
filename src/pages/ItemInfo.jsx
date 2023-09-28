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
  SimpleGrid,
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
import { TbHanger } from "react-icons/tb";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineExclamationCircle } from "react-icons/ai";

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
              <Text paddingBottom={8} fontSize="xl" color="gray.500">
                {formatCurrency(selectedItem.price)}
              </Text>
              <hr />
              <HStack paddingTop={5}>
                <Text fontSize="xl">CATEGORY:</Text>
                {selectedItem.category.map((c) => (
                  <Text>{c}</Text>
                ))}
              </HStack>
              <HStack paddingTop={4}>
                <TbHanger />
                <Text fontSize="xl">Size :</Text>
                {selectedItem.sizes.map((i) => (
                  <SimpleGrid row={1}>
                    <Box borderRadius={2} bg="gray.200" border="1px solid #333">
                      <Text fontSize="xs" paddingLeft={1} paddingRight={1}>
                        {i}
                      </Text>
                    </Box>
                  </SimpleGrid>
                ))}
              </HStack>
              <HStack paddingTop={4}>
                <AiOutlineExclamationCircle />

                <Text fontSize="xl">
                  {selectedItem.quantityLeft} Left in stock
                </Text>
              </HStack>
              <HStack
                // padding={6}
                paddingTop={4}
                display="flex"
                // justifyContent="center"
                paddingBottom={8}
                // bg="green"
              >
                <Link to={"/sign"}>
                  <Button
                    style={{ width: "420px", height: "30px" }}
                    gap={3}
                    variant="outline"
                  >
                    <Text fontSize="xs">
                      log in and enter your measurements for size
                      recommendations
                    </Text>
                    <AiOutlineRight />
                  </Button>
                </Link>
              </HStack>
              <hr />
              <Container
                paddingTop={8}
                paddingleft={6}
                paddingBottom={6}
                paddingRight={6}
                // bg="facebook.100"
                display="flex"
                justifyContent="center"
              >
                {quantity === 0 ? (
                  <Button
                    style={{ width: "300px", height: "60px" }}
                    fontSize="2xl"
                    shadow="xl"
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
                          variant="outline"
                          fontSize="2xl"
                        >
                          <Text>-</Text>
                        </Button>
                        <Text
                          padding={2}
                          fontWeight="bold"
                          paddingLeft={5}
                          paddingRight={5}
                        >
                          <span>{quantity}</span> in cart
                        </Text>
                        <Button
                          onClick={() => increaseQuantity(selectedItem)}
                          variant="outline"
                          fontSize="2xl"
                        >
                          <Text>+</Text>
                        </Button>
                      </Box>
                      <Box paddingLeft={14}>
                        <Button
                          onClick={() => removeFromCart(selectedItem.id)}
                          height="6"
                          size="sm"
                        >
                          Remove
                        </Button>
                      </Box>
                    </Box>
                  </Container>
                )}
              </Container>
              <Container
                // padding={6}
                paddingRight={6}
                display="flex"
                justifyContent="center"
              >
                <Link to={"/sign"}>
                  <Button
                    style={{ width: "300px", height: "60px" }}
                    fontSize="2xl"
                    onClick={() => {}}
                    border="2px solid #333"
                    shadow="xl"
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
