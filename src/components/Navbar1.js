import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar1() {
  return (
    <div className="navbar">
      <div className="logo">TODO</div>
      <div className="links">
        <NavLink to="/login" className="sub-link">
          Login
        </NavLink>
        <NavLink to="/about" className="sub-link">
          About
        </NavLink>
        <NavLink to="/todo" className="sub-link">
          Make Todo
        </NavLink>
      </div>
    </div>
  );
}
export default Navbar1;
