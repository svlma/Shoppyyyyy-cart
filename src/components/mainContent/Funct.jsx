import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import FunctItems from "./FunctItems";
import { PiFlowerTulipFill } from "react-icons/pi";
import { BsPuzzle } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { GiSwipeCard } from "react-icons/gi";
const Funct = () => {
  return (
    <>
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
