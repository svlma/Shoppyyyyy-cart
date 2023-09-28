import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage.jsx";
import ItemInfo from "./pages/ItemInfo";
import Layout from "./pages/Layout.jsx";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import SignIn from "./pages/SignIn";

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
