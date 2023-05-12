import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
const Layout = () => {
  return (
    <div className="drawer drawer-mobile ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content my-bg">
        <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
          <GiHamburgerMenu className="m-4 text-4xl" />
        </label>
        <div className="p-2">
          <Outlet />
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Layout;
