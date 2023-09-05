import { Heading, Text, Box } from "@chakra-ui/react";
import React from "react";
import { isRouteErrorResponse } from "react-router-dom";
import NavBar from "../components/TopPage/Navbar/NavBar";

const ErrorPage = () => {
  return (
    <>
      <NavBar />
      <Box padding={12}>
        <Heading>Oops</Heading>
        <Text>
          {isRouteErrorResponse
            ? "this page does not exist!"
            : "an error occured."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
