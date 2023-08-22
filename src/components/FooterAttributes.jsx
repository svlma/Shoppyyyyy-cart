import React, { useRef } from "react";
import FooterItems from "./FooterItems";
import { SimpleGrid, Text, HStack, Box } from "@chakra-ui/react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SiMinutemailer } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
const FooterAttributes = () => {
  const ref = useRef(null);
  return (
    <HStack display="flex" alignItems="center" justifyContent="space-around">
      <Box>
        <Text
          fontWeight="bold"
          fontSize={20}
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          padding={2}
        >
          HEAR IT FIRST
        </Text>
        <InputGroup>
          <Input placeholder="Email address" ref={ref} borderRadius={4} />
          <InputRightElement>
            <SiMinutemailer />
          </InputRightElement>
        </InputGroup>
      </Box>
      <SimpleGrid columns={3} as="dl">
        <FooterItems
          display="flex"
          alignItems="center"
          justifyContent="space-around"
        >
          <Text>Help Center</Text>
          <Text>Warranty</Text>
          <Text>Product Help</Text>
          <Text>Order Status</Text>
        </FooterItems>
        <FooterItems
          display="flex"
          alignItems="center"
          justifyContent="space-around"
        >
          <Text>Bulk Orders</Text>
          <Text>Recycling Help</Text>
        </FooterItems>
        <FooterItems
          display="flex"
          alignItems="center"
          justifyContent="space-around"
        >
          <Text>About</Text>
          <Text>Careers</Text>
          <Text>Contact Us</Text>
        </FooterItems>
      </SimpleGrid>
      <FooterItems>
        <Text
          fontWeight="bold"
          fontSize={20}
          display="flex"
          alignItems="center"
          justifyContent="space-around"
        >
          FOLLOW US
        </Text>
        <HStack
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          spacing={10}
        >
          <AiFillInstagram size={35} />
          <FaFacebook size={32} />
          <AiFillYoutube size={42} />
        </HStack>
      </FooterItems>
    </HStack>
  );
};

export default FooterAttributes;
