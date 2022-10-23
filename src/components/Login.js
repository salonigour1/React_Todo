import React, { useEffect } from "react";
import LoginForm from "./LoginForm";
import Navbar1 from "./Navbar1";

function Login() {
  useEffect(() => {}, []);
  return (
    <>
      <Navbar1 />
      <LoginForm />
    </>
  );
}

export default Login;
