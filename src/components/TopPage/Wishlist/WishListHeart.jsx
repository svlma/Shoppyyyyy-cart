import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useShoppingCart } from "../../../context/shoppingCartContext";
import itemsData from "../../../data/itemsData";

const WishListHeart = ({ id }) => {
  const { wishList, AddItemsToWishList, removeFromWishList } =
    useShoppingCart();

  const selectedItem = itemsData.find((i) => i.id === id);

  const ToggleHeart = () => {
    console.log(id);
    console.log(wishList);
    if (wishList.find((i) => i.id === id)) {
      removeFromWishList(selectedItem);
    } else {
      AddItemsToWishList(selectedItem);
    }
  };

  return (
    <div onClick={ToggleHeart}>
      {wishList.find((i) => i.id === id) ? (
        <AiFillHeart size={17} />
      ) : (
        <AiOutlineHeart size={17} />
      )}
    </div>
  );
};

export default WishListHeart;
