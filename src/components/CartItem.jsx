import { Box, Button, HStack, Image, Stack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/shoppingCartContext";
import itemsData from "../data/itemsData";
import { formatCurrency } from "../utilities/Currency";
const CartItem = ({ id, quantity }) => {
  const { removeFromCart } = useShoppingCart();
  const item = itemsData.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <>
      <Stack
        // bg="green.200"
        direction="horizontal"
        display="flex"
        alignItems="center"
      >
        <Box
          style={{
            width: "20%",
            height: "85px",
          }}
        >
          <Link to={`/shop/item/${id}`}>
            <Image
              src={item.imgUrl}
              style={{
                width: "100%",
                height: "85px",
                // height: "25%"
                // width: "100px",
                // height: "75px",
                objectFit: "cover",
                borderRadius: 5,
              }}
            />
          </Link>
        </Box>
        <HStack width="80%">
          <Box
            width="100%"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            bg="white"
          >
            <Stack>
              <div>
                <Link to={`/shop/item/${id}`}>{item.name}</Link>
                {quantity > 1 && (
                  <span style={{ fontSize: ".65rem" }} color="#6c757d">
                    x{quantity}
                  </span>
                )}
              </div>
              <div style={{ fontSize: ".75rem" }}>
                {formatCurrency(item.price)}
              </div>
            </Stack>

            <Box display="flex" textAlign="center">
              <Box>{formatCurrency(item.price * quantity)}</Box>

              <Button
                variant="outline-danger"
                paddingLeft={3}
                size="m"
                onClick={() => removeFromCart(item.id)}
              >
                &times;
              </Button>
            </Box>
          </Box>
        </HStack>
      </Stack>
    </>
  );
};

export default CartItem;
