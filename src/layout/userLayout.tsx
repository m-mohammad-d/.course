import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/SideBar";

const UserLayout = () => {
  return (
    <div className="user-layout">
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;
