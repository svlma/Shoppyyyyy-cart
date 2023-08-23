import { Box, Card, HStack, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";
import ReviewsItem from "./ReviewItem";
const Reviews = () => {
  const boxStyle = {
    fontFamily: "'Passion One', sans-serif", // Replace 'Font Name' with the actual font name
  };
  return (
    <>
      <Heading textAlign="center" paddingTop={8} style={boxStyle}>
        REVIEWS
      </Heading>
      <SimpleGrid
        columns={3}
        as="dl"
        textAlign="center"
        paddingTop={10}
        spacing={7}
        padding={12}
      >
        <ReviewsItem
          children1="MAMA'S BOY"
          children2={
            <>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <FaStarHalfAlt />
              <AiOutlineStar />
            </>
          }
          children3="Super comfortable. Design, unbeatable quality."
          children4="Salma El Omari"
        />
        <ReviewsItem
          children1="FUSION OF PERFECTION"
          children2={
            <>
              <AiFillStar />
              <AiFillStar />
              <FaStarHalfAlt />
              <AiOutlineStar />
              <AiOutlineStar />
            </>
          }
          children3="
         The colors pop and the print quality is top-notch."
          children4="Salma LAASSOULI"
        />
        <ReviewsItem
          children1="THE SQUARE LOVE"
          children2={
            <>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </>
          }
          children3="This tee is like wearing art. The intricate patterns make it stand out in the crowd."
          children4="JOJO"
        />
      </SimpleGrid>
      <Text textAlign="center" textDecoration="underline" fontSize="xl">
        VIEW ALL REVIEWS
      </Text>
    </>
  );
};

export default Reviews;
