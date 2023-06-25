import React from "react";
import { Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import AppointmentId from "./pages/Appointmentid";
import Bid from "./pages/Bid";
import Payment from "./pages/Payment";
import ProfilePage from "./pages/ProfilePage";
import Home from "./pages/Admin/pages/Dashboard/Home";
import AnnouncementAdmin from "./pages/Admin/pages/AnnouncementAdmin";
import AppointmentAdmin from "./pages/Admin/pages/AppointmentAdmin";
import RequiremntsAdmin from "./pages/Admin/pages/RequiremntsAdmin";
import Bidders from "./pages/Admin/pages/Bidders";
import Chart from "./pages/Admin/pages/Chart";
import AnnouncmentForm from "./pages/Admin/pages/AnnouncmentForm";
import BidForm from "./pages/Admin/pages/BidForm";
import BidList from "./pages/Admin/pages/BidList";
import Feedback from "./pages/Admin/pages/Feedback";
import RequiremntsForm from "./pages/Admin/pages/RequiremntsForm";
import AddService from "./pages/Admin/pages/AddService";
import Calendar from "./pages/Admin/pages/Calendar";
import Settings from "./pages/Admin/pages/Settings";

export default function Routesadmin() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/announcement" element={<AnnouncementAdmin />} />
      <Route path="/appoinment" element={<AppointmentAdmin />} />
      <Route path="/requiremnt" element={<RequiremntsAdmin />} />
      <Route path="/chart" element={<Chart />} />
      <Route
        path="/announcement/createannouncment"
        element={<AnnouncmentForm />}
      />
      <Route path="bid/createbid" element={<BidForm />} />
      <Route path="/bidders" element={<Bidders />} />
      <Route path="/bidlist" element={<BidList />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route
        path="/requiremnt/createrequiremnt"
        element={<RequiremntsForm />}
      />
      <Route path="addservice" element={<AddService />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}
