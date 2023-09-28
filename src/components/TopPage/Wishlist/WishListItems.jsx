import React from "react";
import WishListItem from "./WIshListItem";
import { Stack, Text, Box, Center } from "@chakra-ui/react";
import { useShoppingCart } from "../../../context/shoppingCartContext";
const WishListItems = () => {
  const { wishList } = useShoppingCart();
  return (
    <>
      {wishList.length === 0 ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="80%"
        >
          <Text fontSize="2xl" fontWeight="m" color="gray.600">
            Your wishlist is empty
          </Text>
        </Box>
      ) : (
        <Stack gap={3}>
          {wishList.map((i) => (
            <WishListItem key={i.id} {...i} id={i.id} />
          ))}
        </Stack>
      )}
    </>
  );
};

export default WishListItems;
