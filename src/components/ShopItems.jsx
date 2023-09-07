import React, { useState } from "react";
import { Card, CardBody, Image, Text, Stack, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { formatCurrency } from "../utilities/Currency";
import WishListHeart from "./TopPage/Wishlist/WishListHeart";

const ShopItems = ({ id, price, imgUrl, name }) => {
  const [isHovered, setHovered] = useState(false);
  const imageStyle = {
    width: "450px",
    height: "350px",
    objectFit: "cover",
    borderRadius: 40,
    paddingTop: "20px",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingBottom: "20px",
    transition: "transform 0.2s ease-in-out",
    transform: isHovered ? "scale(1.1)" : "scale(1)",
    overflow: "hidden",
  };
  const textStyle = {
    display: isHovered ? "block" : "none",
    width: "100%",
    textAlign: "center",
    padding: 10,
  };

  return (
    <>
      <Card key={id} shadow="xl">
        <Link to={`/shop/item/${id}`}>
          <Image
            src={imgUrl}
            style={imageStyle}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          />
        </Link>
        <CardBody>
          <Stack>
            <Text>{name}</Text>
            {isHovered ? (
              <Text fontWeight="light" fontSize="sm" style={textStyle}>
                <span>{formatCurrency(price)}</span>
              </Text>
            ) : (
              <Box display="flex" justifyContent="center">
                <WishListHeart id={id} />
              </Box>
            )}
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default ShopItems;
