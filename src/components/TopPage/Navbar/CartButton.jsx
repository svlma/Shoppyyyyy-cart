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
  Input,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { BiShoppingBag } from "react-icons/Bi";
import { useShoppingCart } from "../../../context/shoppingCartContext";
import { formatCurrency } from "../../../utilities/Currency";
import CartItem from "../../CartItem";
import storeItems from "../../../data/itemsData";
const CartButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Use useDisclosure
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
        {/* <Box padding={1} /> */}
        <Container
          style={{
            width: "1rem",
            height: "1rem",
            position: "relative",
          }}
          //open the cart drawer on the side
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
              {/* <Text fontSize="2xs">0</Text> */}
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
            <DrawerHeader>CART</DrawerHeader>

            <DrawerBody>
              {/* <Input placeholder="Type here..." /> */}
              <Stack gap={3}>
                {cartItems.map((i) => (
                  <CartItem key={i.id} {...i} id={i.id} quantity={i.quantity} />
                ))}
              </Stack>
              <Text textAlign="end" fontWeight="bold">
                TOTAL:
                {formatCurrency(
                  cartItems.reduce((total, cartItem) => {
                    const item = storeItems.find((i) => i.id === cartItem.id);

                    return total + (item?.price || 0) * cartItem.quantity;
                  }, 0)
                )}
              </Text>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </HStack>
    </>
  );
};
export default CartButton;
