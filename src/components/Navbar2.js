import React from "react";
import { NavLink } from "react-router-dom";

function Navbar2() {
  const handleLogout = () => {
    const login = { login: false };
    localStorage.setItem("currentLog", JSON.stringify(login));
    const data = JSON.parse(localStorage.removeItem("currentLog"));
  };
  return (
    <div className="navbar">
      <div className="logo">TODO</div>
      <div className="links">
        <NavLink to="/todo" className="sub-link">
          My Todo
        </NavLink>
        <NavLink to="/about" className="sub-link">
          About
        </NavLink>
        <NavLink to="/login" className="sub-link" onClick={handleLogout}>
          Logout
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar2;
