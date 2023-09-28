import {
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Stack,
  Text,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { BiShoppingBag } from "react-icons/Bi";
import { useShoppingCart } from "../../../context/shoppingCartContext";
import storeItems from "../../../data/itemsData";
import { formatCurrency } from "../../../utilities/Currency";
import CartItem from "../../CartItem";
const CartButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { cartQuantity, cartItems } = useShoppingCart();

  return (
    <>
      <HStack
        _hover={{
          transform: "scale(1.09)",
          transition: "transform .15s ease-in-out ",
        }}
        onClick={onOpen}
      >
        <Container
          style={{
            width: "1rem",
            height: "1rem",
            position: "relative",
          }}
        >
          <BiShoppingBag />
          {cartQuantity > 0 && (
            <div
              style={{
                backgroundColor: "red",
                borderRadius: "50%",
                color: "white",
                width: ".85rem",
                height: ".85rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(55%, 55%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text fontSize="2xs">{cartQuantity}</Text>
            </div>
          )}
        </Container>

        <Text fontWeight="bold" paddingRight={1}>
          CART
        </Text>

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          size="sm"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <HStack>
                <BiShoppingBag />
                <Text>CART</Text>
              </HStack>
            </DrawerHeader>
            <hr />
            {cartQuantity === 0 ? (
              <DrawerBody>
                <Container
                  height="100%"
                  width="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text fontSize="2xl" fontWeight="m" color="gray.600">
                    Your cart is empty
                  </Text>
                </Container>
              </DrawerBody>
            ) : (
              <DrawerBody paddingTop={5}>
                <Stack gap={3}>
                  {cartItems.map((i) => (
                    <CartItem
                      key={i.id}
                      {...i}
                      id={i.id}
                      quantity={i.quantity}
                    />
                  ))}
                </Stack>
              </DrawerBody>
            )}

            <DrawerFooter
              padding={8}
              display="flex"
              justifyContent="space-between"
              paddingTop={6}
              fontSize="lg"
            >
              <Text textAlign="end" fontWeight="bold">
                TOTAL:
              </Text>
              <Text textAlign="end" fontWeight="bold">
                {formatCurrency(
                  cartItems.reduce((total, cartItem) => {
                    const item = storeItems.find((i) => i.id === cartItem.id);

                    return total + (item?.price || 0) * cartItem.quantity;
                  }, 0)
                )}
              </Text>

              {/* <Button
                  variant="outline"
                  mr={3}
                  onClick={onClose}
                  colorScheme="blue"
                >
                  Close
                </Button> */}
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </HStack>
    </>
  );
};
export default CartButton;
