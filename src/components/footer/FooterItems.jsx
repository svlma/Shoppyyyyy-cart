import { Box } from "@chakra-ui/react";
import React from "react";

const FooterItems = ({ children }) => {
  return (
    <Box padding={5}>
      <dd>{children}</dd>
    </Box>
  );
};

export default FooterItems;
