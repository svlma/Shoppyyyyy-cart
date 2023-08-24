import { Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import FunctItems from "./FunctItems";
import { PiFlowerTulipFill } from "react-icons/pi";
import { BsPuzzle } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { GiSwipeCard } from "react-icons/gi";
const Funct = () => {
  const boxStyle = {
    fontFamily: "'Passion One', sans-serif", // Replace 'Font Name' with the actual font name
  };
  return (
    <>
      <Heading textAlign="center" paddingTop={16} style={boxStyle}>
        Why choose us
      </Heading>
      <SimpleGrid columns={4} as="dl" textAlign="center">
        <FunctItems text="Be apart of something bigger" item={<BsPuzzle />} />
        <FunctItems
          text="Sustainable materials and packaging"
          item={<PiFlowerTulipFill />}
        />
        <FunctItems
          text="Free and fast delivery nationwide"
          item={<FaShippingFast />}
        />
        <FunctItems
          text="Buy now and pay later with afterPay or zippay"
          item={<GiSwipeCard />}
        />
      </SimpleGrid>
    </>
  );
};

export default Funct;
