import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function LoginForm() {
  const handleLogin = () => {
    console.log("here");
    const login = { login: true };
    localStorage.setItem("currentLog", JSON.stringify(login));
    const data = JSON.parse(localStorage.getItem("currentLog")) || [];
    console.log(data.login);
  };

  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username: </label>
        <input placeholder="Enter name..." name="username" />
        <br></br>
        <label htmlFor="number">Mobile No: </label>
        <input placeholder="Mobile no..." name="number" />
        <br></br>
        <Link to="/todo" className="submit" onClick={handleLogin}>
          Login
        </Link>
      </form>
    </div>
  );
}

export default LoginForm;
