import React from "react";
import { Navigate, Outlet } from "react-router-dom";
function PrivateRoute({ isLogged }) {
  console.log(isLogged + "skndksjnkl");
  return isLogged ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
