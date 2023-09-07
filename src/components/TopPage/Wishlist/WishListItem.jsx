import { Image, HStack, Button, Stack, Box, Text } from "@chakra-ui/react";
import React from "react";
import itemsData from "../../../data/itemsData";
import { formatCurrency } from "../../../utilities/Currency";
import { useShoppingCart } from "../../../context/shoppingCartContext";
import { Link } from "react-router-dom";
const WishListItem = ({ id }) => {
  const { removeFromWishList } = useShoppingCart();
  const item = itemsData.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <>
      <Stack direction="horizontal" display="flex" alignItems="center">
        <Box
          style={{
            width: "20%",
            height: "85px",
          }}
        >
          <Link to={`/shop/item/${item.id}`}>
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
          >
            <Stack>
              <Text fontWeight="bold">
                <Link to={`/shop/item/${item.id}`}>{item.name}</Link>
              </Text>
              <div>{formatCurrency(item.price)}</div>
            </Stack>

            <Box display="flex" textAlign="center">
              <Button
                variant="outline-danger"
                paddingLeft={3}
                size="m"
                onClick={() => removeFromWishList(item)}
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

export default WishListItem;
