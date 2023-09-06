import React from "react";
import WishListItem from "./WIshListItem";
import { Stack } from "@chakra-ui/react";
import { useShoppingCart } from "../../../context/shoppingCartContext";
const WishListItems = () => {
  const { wishList } = useShoppingCart();
  return (
    <>
      <Stack gap={3}>
        {wishList.map((i) => (
          <WishListItem key={i.id} {...i} id={i.id} />
        ))}
      </Stack>
    </>
  );
};

export default WishListItems;
