import React from "react";
import NavBar from "../components/TopPage/Navbar/NavBar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
export default Layout;
