import React, { createContext, useState, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const shoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(shoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
  // const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItem] = useLocalStorage("cartItems", []);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const getItemQuantity = (selectedItem) => {
    return cartItems.find((item) => item.id === selectedItem.id)?.quantity || 0;
  };
  const cartQuantity = cartItems.reduce(
    (quantity, item) => quantity + item.quantity,
    0
  );

  const increaseQuantity = (selectedItem) => {
    setCartItem((currItems) => {
      const existingItem = currItems.find(
        (item) => item.id === selectedItem.id
      );

      if (existingItem) {
        // If the item already exists in the cart, update its quantity
        console.log("yes");
        return currItems.map((item) => {
          if (item.id == selectedItem.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        console.log("no");
        // If the item is not in the cart, add it with a quantity of 1
        return [...currItems, { ...selectedItem, quantity: 1 }];
      }
    });
  };

  const decreaseQuantity = (id) => {
    setCartItem((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const removeFromCart = (id) => {
    setCartItem((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  };

  //WISHLIST

  const [wishList, setWishList] = useLocalStorage("WishList", []);

  const AddItemsToWishList = (selectedItem) => {
    setWishList((currItems) => {
      const existingItem = currItems.find(
        (item) => item.id === selectedItem.id
      );
      if (!existingItem) {
        return [...currItems, { ...selectedItem }]; // If the item is not in the WishList, add it
      } else {
        console.log(wishList);
      }
    });
  };
  const removeFromWishList = (selectedItem) => {
    setWishList((currItems) => {
      return currItems.filter((item) => item.id !== selectedItem.id);
    });
  };
  return (
    <shoppingCartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        getItemQuantity,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        openCart,
        closeCart,
        wishList,
        AddItemsToWishList,
        removeFromWishList,
      }}
    >
      {children}
    </shoppingCartContext.Provider>
  );
}
