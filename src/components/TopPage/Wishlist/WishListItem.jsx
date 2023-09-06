import { Image, HStack, Button, Stack, Box } from "@chakra-ui/react";
import React from "react";
import itemsData from "../../../data/itemsData";
import { formatCurrency } from "../../../utilities/Currency";
import { useShoppingCart } from "../../../context/shoppingCartContext";

const WishListItem = ({ id }) => {
  const { removeFromWishList } = useShoppingCart();
  const item = itemsData.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <>
      <Stack
        bg="green.200"
        direction="horizontal"
        display="flex"
        alignItems="center"
      >
        <Image
          src={item.imgUrl}
          style={{
            width: "100px",
            height: "85px",
            // width: "100px",
            // height: "75px",
            objectFit: "cover",

            borderRadius: 5,
          }}
        />
        <Box
          width="100%"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
          bg="white"
        >
          <HStack bg="green.100">
            <Stack bg="green.300">
              <div>
                {item.name}
                {item.id}
              </div>
              <div style={{ fontSize: ".75rem" }}>
                {formatCurrency(item.price)}
              </div>
            </Stack>

            <Button
              variant="outline-danger"
              size="sm"
              onClick={() => removeFromWishList(item)}
            >
              &times;
            </Button>
          </HStack>
        </Box>
      </Stack>
    </>
  );
};

export default WishListItem;
