import { Box, CloseButton, HStack, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import ReactDom from "react-dom";
import { AiOutlineHeart } from "react-icons/ai";

const WishListPortal = ({ open, children, onClose }) => {
  const { colorMode } = useColorMode();
  const MODAL_STYLES = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor:
      colorMode === "dark" ? "rgba(0, 0, 0, 0.9)" : "rgba(255, 255, 255, 0.89)",

    // padding: "12px",
    zIndex: 1000,

    overflow: "auto",
  };
  if (!open) return null;
  const OVERLAY_STYLES = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor:
      colorMode === "dark" ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.7)",

    zIndex: 1000,
  };
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={onClose} />
      <Box style={MODAL_STYLES} borderRadius={7} height="70%" width="40%">
        <HStack padding={6}>
          <Box display="flex" justifyContent="center" width="95%">
            <AiOutlineHeart size={30} />
            <Text fontSize="xl" fontWeight="bold">
              Wishlist
            </Text>
          </Box>
          <CloseButton onClick={onClose} />
        </HStack>

        <Box
          paddingLeft={10}
          paddingRight={10}
          paddingBottom={10}
          style={{
            maxHeight: "95%",
            overflow: "auto",
          }}
        >
          {children}
        </Box>
      </Box>
    </>,
    document.getElementById("portal")
  );
};

export default WishListPortal;
