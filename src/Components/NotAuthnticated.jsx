import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function NotAuthenticated() {
  const navigate = useNavigate();
  if (localStorage.getItem("tokens") !== null) {
    console.log("this dure is logged in");
    navigate("/services");
  }else
  return <Outlet />;
}
