import React from "react";
// import { Routes } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
// import Services from "./Components/Services"
import Navbar from "./Components/common/Navbar";
import Footer from "./Components/common/Footer";
import { useSelector } from "react-redux";
import {
  Aboutus,
  Appointmentid,
  FeedbackForm,
  Landing,
  LoginForm,
  Register,
  Requirements,
  SceduleAppointment,
} from "./pages";
// import { Layout } from "./Layout";
import Bid from "./pages/Bid";
import { Payment } from "@mui/icons-material";
import ProfilePage from "./pages/ProfilePage";

export default function UserRoutes() {
  return (
    <Routes>
      {/* <Layout /> */}
      <Route path="/" element={<Landing />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/requirement" element={<Requirements />} />
      <Route path="/appointmentid" element={<Appointmentid />} />
      <Route path="/abc" element={<SceduleAppointment />} />
      <Route path="/about" element={<Aboutus />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<Register />} />
      <Route path="/faq" element={<FeedbackForm />} />
      <Route path="/bid" element={<Bid />} />
      <Route path="/payment" element={<Payment />} />
      {/* <Route path="/profile" element={<ProfilePage />} /> */}
    
    </Routes>
  );
}
