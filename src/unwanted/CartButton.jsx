// import {
//   Box,
//   Button,
//   Drawer,
//   DrawerBody,
//   DrawerCloseButton,
//   DrawerContent,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerOverlay,
//   Input,
//   Text,
//   useDisclosure,
//   HStack,
// } from "@chakra-ui/react";
// import React from "react";
// import { BiShoppingBag } from "react-icons/Bi";
// import { useShoppingCart } from "../../../context/shoppingCartContext";

// const CartButton = () => {
//   const { cartQuantity } = useShoppingCart(); // Remove openCart
//   const { isOpen, onOpen, onClose } = useDisclosure(); // Use useDisclosure
//   const handleCartButtonClick = () => {
//     openCart(); // Call the openCart function from context to open the cart
//   };
//   const btnRef = React.useRef();
//   return (
//     <>
//       <HStack
//         _hover={{
//           transform: "scale(1.09)",
//           transition: "trandform .15s ease-in ",
//         }}
//       >
//         <Button
//           style={{
//             width: "1rem",
//             height: "1rem",
//             position: "relative",
//           }}
//           variant="ghost"
//           onClick={onOpen} // Open the drawer using onOpen
//         >
//           {/* <Box padding={1} /> */}
//           <Button
//             variant="ghost"
//             style={{
//               width: "1rem",
//               height: "1rem",
//               position: "relative",
//             }}
//             onClick={handleCartButtonClick} //open the cart drawer on the side
//           >
//             <BiShoppingBag />
//             {cartQuantity > 0 && (
//               <div
//                 style={{
//                   backgroundColor: "red",
//                   borderRadius: "50%",
//                   color: "white",
//                   width: ".85rem",
//                   height: ".85rem",
//                   position: "absolute",
//                   bottom: 0,
//                   right: 0,
//                   transform: "translate(55%, 55%)",
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 {/* <Text fontSize="2xs">{cartQuantity}</Text> */}
//                 <Text fontSize="2xs">0</Text>
//               </div>
//             )}
//           </Button>
//           <Text fontWeight="bold" paddingRight={1}>
//             CART
//           </Text>
//         </Button>
//       </HStack>
//       <Drawer
//         isOpen={isOpen}
//         placement="right"
//         onClose={onClose}
//         finalFocusRef={btnRef}
//       >
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerCloseButton />
//           <DrawerHeader>Create your account</DrawerHeader>

//           <DrawerBody>
//             <Input placeholder="Type here..." />
//           </DrawerBody>

//           <DrawerFooter>
//             <Button variant="outline" mr={3} onClick={onClose}>
//               Cancel
//             </Button>
//             <Button colorScheme="blue">Save</Button>
//           </DrawerFooter>
//         </DrawerContent>
//       </Drawer>

//       {/* Add props to the Drawer component as needed */}
//     </>
//   );
// };

// export default CartButton;
