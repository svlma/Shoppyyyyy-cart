import React, { useState } from "react";
import NavBar from "../components/TopPage/Navbar/NavBar.jsx";
import {
  Menu,
  MenuButton,
  MenuItem,
  Button,
  MenuList,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { useShoppingCart } from "../context/shoppingCartContext.jsx";
import storeItems from "../data/itemsData.js";
import ShopItems from "../components/ShopItems.jsx";
// import { useItemId } from "../context/itemIdContext.jsx";

const Categories = ({ selectedCategory, setSelectedCategory }) => {
  const categories = [
    { label: "All" },
    { label: "Men" },
    { label: "Women" },
    { label: "Accessories" },
    { label: "embroidory" },
    { label: "Designs" },
  ];

  return (
    <Box paddingLeft={8} paddingTop={8}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedCategory.label || "All"}
        </MenuButton>
        <MenuList>
          {categories.map((category) => (
            <MenuItem
              onClick={() => setSelectedCategory(category.label)}
              key={category.label}
            >
              {category.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <>
      <NavBar position="sticky" shop={true} />
      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <SimpleGrid
        columns={4}
        rows={3}
        gap={4}
        as="dl"
        textAlign="center"
        paddingTop={5}
        paddingBottom={5}
        fontWeight="bold"
      >
        {storeItems
          .filter(
            (item) =>
              selectedCategory === "All" ||
              item.category.includes(selectedCategory)
          )
          .map((item) => (
            <ShopItems
              key={item.id}
              // name={item.name}
              // imgUrl={item.imgUrl}
              // price={item.price}
              // id={item.id}
              {...item}
            />
          ))}
      </SimpleGrid>
    </>
  );
};

export default Shop;
