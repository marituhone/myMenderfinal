import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function IsAuthenticated() {
  const navigate = useNavigate();
  if (localStorage.getItem("tokens") == null) {
    console.log("this is not logged in");
    navigate("/login");
  } else {
    return <Outlet />;
  }
}
