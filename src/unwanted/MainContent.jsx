import React from "react";
import goofyCouple from "./assets/goofycouple.jpeg";
import { Heading } from "@chakra-ui/react";

const MainContent = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${goofyCouple})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
        display: "flex", // Use flex display for vertical and horizontal alignment
        alignItems: "center", // Center vertically
        justifyContent: "center", // Center horizontally
        position: "relative", // Ensure proper positioning for child components
        padding: "20px",
      }}
    >
      <Heading textAlign="center" fontSize="6xl">
        Summer 2023
      </Heading>
    </div>
  );
};

export default MainContent;
