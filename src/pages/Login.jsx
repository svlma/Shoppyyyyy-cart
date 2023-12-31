import {
  Box,
  Text,
  Flex,
  Image,
  CloseButton,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  HStack,
  Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import arena from "/Users/salma/Repos/Shopping-cart-website/Shopping-Cart/src/assets/arena.jpeg";
import { Link } from "react-router-dom";
import { FaRegHandshake } from "react-icons/fa";
const Login = () => {
  const [showpass, setShowpass] = useState(false);

  const showHandler = () => {
    setShowpass(!showpass);
  };

  const textStyle = {
    fontFamily: "'Playfair Display', sans-serif",
  };

  const textStyle2 = {
    fontFamily: "'Handjet', inter",
  };
  const textstyle = {
    fontFamily: "'Nunito', inter",
  };
  const textestyle = {
    fontFamily: "'Handjet', inter",
  };
  return (
    <>
      <Flex bg="blackAlpha.100">
        <Flex height="100%">
          <Box width="55%" bg="BlackAlpha.900">
            <Flex height="12vh">
              <HStack width="100%" gap="10px" paddingTop={7} paddingBottom={10}>
                <Box borderRadius="10%" marginLeft={3} marginTop={2} width="4%">
                  <Link to={"/"}>
                    <CloseButton color="gray.400" />
                  </Link>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  width="87%"
                >
                  <Text
                    fontWeight="bold"
                    color="yellow"
                    fontSize="5xl"
                    bgGradient={[
                      "linear(to-tr, teal.300, yellow.400)",
                      "linear(to-t, blue.200, teal.500)",
                      "linear(to-b, orange.100, purple.300)",
                    ]}
                    bgClip="text"
                    paddingTop={3}
                  >
                    <Link to={"/"}>SHOPPYYYYY </Link>
                  </Text>
                </Box>
              </HStack>
            </Flex>

            <Box
              paddingBottom={10}
              paddingLeft={10}
              paddingRight={10}
              bg="blackAlpha.300"
              boxShadow="xl"
              marginBottom={15}
              marginLeft={15}
              marginRight={15}
              borderRadius="10%"
            >
              <Flex
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                gap="10px"
              >
                <Text
                  color="white"
                  fontSize="6xl"
                  fontWeight="bold"
                  paddingBottom={2}
                  paddingRight={3}
                  paddingTop={4}
                >
                  <em>LOGIN</em>
                </Text>
                <Box>
                  <Box marginBottom="3rem">
                    <label color="white" fontSize="lg">
                      Email
                    </label>
                    <Input
                      placeholder="123@email.com"
                      _placeholder={{ color: "white" }}
                      borderColor="white"
                    />
                  </Box>
                  <Box>
                    <label color="white" fontSize="lg">
                      Password
                    </label>
                    <InputGroup>
                      <Input
                        type={showpass ? "text" : "password"}
                        placeholder="*******"
                        _placeholder={{ color: "white" }}
                        borderColor="white"
                      />
                      <InputRightElement onClick={showHandler}>
                        {showpass ? <AiFillEye /> : <AiFillEyeInvisible />}
                      </InputRightElement>
                    </InputGroup>
                  </Box>
                </Box>

                <Button paddingTop={1} marginTop={7}>
                  SIGN UP
                </Button>

                <Text textAlign="center" fontSize="xs" marginBottom={10}>
                  By clicking Sign up you agree to our Terms of Service , <br />
                  Privacy Policy and Intellectual Property Policy
                </Text>
                <Text>Already have an account?</Text>
                <Text
                  href="#"
                  color="blue.500"
                  textDecoration="none"
                  _hover={{
                    textDecoration: "underline",
                    color: "blue.700",
                  }}
                >
                  <Link to={"/sign"}>Sign in</Link>
                </Text>
                <HStack paddingTop={2}>
                  <Text>Want to sell?</Text>
                  <FaRegHandshake size={30} />
                  <Text
                    href="#"
                    color="blue.500"
                    textDecoration="none"
                    _hover={{
                      color: "blue.700",
                    }}
                    fontSize="xl"
                    fontWeight="bold"
                  >
                    Become partner
                  </Text>
                </HStack>
              </Flex>
            </Box>
          </Box>

          <Box flex="1" position="relative">
            <Image
              src={arena}
              height="100%"
              width="100%"
              borderLeftRadius="20%"
            />
            <Box
              position="absolute"
              top="13%"
              left="5%"
              right="8%"
              color="white"
            >
              <Stack spacing={130}>
                <Box>
                  <Text fontSize="lg" paddingBottom={1}>
                    SHOPPYYYYY presents to you
                  </Text>
                  <Text fontWeight="bold" fontSize="6xl" style={textStyle2}>
                    <em>JOURNEY THROUGH STYLE</em>
                  </Text>
                  <Text fontSize="lg" paddingBottom={1} style={textstyle}>
                    25th August 2023
                  </Text>
                </Box>
                <Box textAlign="right">
                  <Text style={textstyle} fontSize="4xl">
                    Turn up the <br />
                    volume on <br />
                    your STYLE
                  </Text>
                  <Text
                    paddingTop={1}
                    fontSize="xl"
                    paddingBottom={6}
                    style={textestyle}
                  >
                    <em>
                      You've tried the rest
                      <br /> now try the BEST
                      <br />
                      SIGN UP for more
                    </em>
                  </Text>
                  <box bg="red" w="100%" p={8}>
                    <Text style={textStyle} fontWeight="bold" fontSize="xl">
                      Up to 50% off
                    </Text>
                  </box>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
export default Login;
