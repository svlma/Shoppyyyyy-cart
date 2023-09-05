import { createBrowserRouter } from "react-router-dom";
import HomePage from "/Users/salma/Repos/Shopping-cart-website/Shopping-Cart/src/pages/HomePage.jsx";
import Layout from "/Users/salma/Repos/Shopping-cart-website/Shopping-Cart/src/pages/Layout.jsx";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import SignIn from "./pages/SignIn";
import Shop from "./pages/Shop";
import ItemInfo from "./pages/ItemInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <Login /> },
      { path: "sign", element: <SignIn /> },
      { path: "shop", element: <Shop /> },
      { path: "shop/item/:id", element: <ItemInfo /> },
    ],
  },
]);
export default router;
