import React, { useState } from "react";
import { Card, CardBody, Image, Text, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useItemId } from "../context/itemIdContext";
import { formatCurrency } from "../utilities/Currency";
const ShopItems = ({ id, price, imgUrl, name }) => {
  const { setItem } = useItemId();
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
      <Link
        to={`/shop/item/${id}`}
        onClick={() => {
          setItem(id);
        }}
      >
        <Card key={id}>
          <Image
            src={imgUrl}
            style={imageStyle}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          />
          <CardBody>
            <Stack>
              <Text>{name}</Text>
              {isHovered ? (
                <Text fontWeight="light" fontSize="sm" style={textStyle}>
                  <span>{formatCurrency(price)}</span>
                </Text>
              ) : (
                <Text fontWeight="light" fontSize="sm">
                  .
                </Text>
              )}
            </Stack>
          </CardBody>
        </Card>
      </Link>
    </>
  );
};

export default ShopItems;
