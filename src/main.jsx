import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes.jsx";
import { ShoppingCartProvider } from "./context/shoppingCartContext";
import { ItemIdProvider } from "./context/itemIdContext";
const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <ShoppingCartProvider>
        <ItemIdProvider>
          <RouterProvider router={router} />
        </ItemIdProvider>
      </ShoppingCartProvider>
    </ChakraProvider>
  </React.StrictMode>
);
