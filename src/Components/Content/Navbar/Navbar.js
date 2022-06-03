import React from "react";
import Avatar from "@mui/material/Avatar";
import SettingsIcon from "@mui/icons-material/Settings";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <h2>Dashboard</h2>
      <div className="navbar-avatar">
        <p>Hi, Clerk</p>
        <Avatar alt="Remy Sharp" src="images/avatar.jpg" />
        <SettingsIcon />
      </div>
    </div>
  );
};

export default Navbar;
