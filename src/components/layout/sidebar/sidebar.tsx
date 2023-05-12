import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../logo.svg";

const Sidebar = () => {
  return (
    <div className="drawer-side ">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 bg-base-100 text-base-content">
        <li>
          <img src={logo} className="App-logo" alt="logo" />
        </li>
        <li>
          <Link to="">Contacts</Link>
        </li>
        <li>
          <Link to="maps">Maps and Chart</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
