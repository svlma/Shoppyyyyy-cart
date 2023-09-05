import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { BiSolidShoppingBag } from "react-icons/Bi";
import NavBar from "./Navbar/NavBar";
import alaka from "/Users/salma/Repos/Shopping-cart-website/Shopping-Cart/src/assets/sofia-guaico-ujihpJUpnvY-unsplash.jpg";
import { Link } from "react-router-dom";
const Intro = () => {
  const textStyle = {
    fontFamily: "'Playfair Display', sans-serif", // Replace 'Font Name' with the actual font name
  };
  return (
    <>
      <Stack
        style={{
          backgroundImage: `url(${alaka})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          // height: "87vh",
          height: "100vh",
          // height: "50vh",
          color: "white",
        }}
      >
        <NavBar />
        <Stack
          style={{
            // display: "flex",
            // alignItems: "center",
            // justifyContent: "center",
            paddingTop: 40,
          }}
          paddingLeft={20}
        >
          <em>
            <Heading fontSize="7xl">
              RAINING OFFERS
              <br />
            </Heading>
            <Heading fontSize="5xl">
              FOR HOT SUMMER
              <br />
            </Heading>
          </em>
          <Box
            // _hover={{
            //   transform: "scale(1.05)",
            //   transition: "trandform .8s ease-in-out",
            // }}
            paddingLeft={32}
          >
            <Text fontWeight="bold" fontSize="xl">
              <br />
              IT'S THAT TIME OF YEAR, AGAIN.
            </Text>
            <Text fontWeight="bold" fontSize="lg" paddingLeft={20}>
              Take the edge off the end of summer with a smokin' deals
              <br />
              <Text fontWeight="bold" fontSize="lg" paddingLeft={20}>
                that looks great and feels softer.
              </Text>
            </Text>
          </Box>
          <Stack paddingLeft={732}>
            {/* <Text fontWeight="md" fontSize="lg">
              The joy of summer
            </Text> */}
            <Text fontWeight="bold" fontSize="7xl" style={textStyle}>
              Up to 50% off
            </Text>
            <Text fontWeight="bold" fontSize="xl" paddingBottom={0}>
              Dozens of styles available
            </Text>
            <Link to="/shop">
              <Button
                colorScheme="black"
                variant="outline"
                rightIcon={<BiSolidShoppingBag />}
                border="4px"
                borderColor="white.500"
                fontWeight="bold"
                width="20%"
              >
                SHOP NOW
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Intro;
