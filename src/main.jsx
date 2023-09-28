import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ItemIdProvider } from "./context/itemIdContext";
import { ShoppingCartProvider } from "./context/shoppingCartContext";
import "./index.css";
import router from "./routes.jsx";
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
