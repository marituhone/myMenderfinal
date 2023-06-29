import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  useNavigate,
} from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Authentication/LoginForm";
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
import Footer from "./Components/common/Footer";
// import { Navbar } from "react-bootstrap";
import Navbar from "./Components/common/Navbar";
import NavbarLogged from "./Components/common/NavbarLogged";
import IsAuthenticated from "./Components/IsAuthenticated";
import NotAuthenticated from "./Components/NotAuthnticated";
import Bid from "./pages/Bid";
import Payment from "./pages/Payment";
import AuthInterecpetor from "./AuthInterceptor/AuthInterecpetor";
import BidForm from "./pages/BidForm";
import Appointmentservices from "./pages/Appointmentservices";
import { useEffect, useState } from "react";
import UserDashboard from "./pages/UserDashboard";

// import NotFoundPage from "./NotFoundPage";
const NotFound = () => {
  return (
    <h1
      style={{
        fontSize: "30px",
        textAlign: "center",
        marginTop: "5rem",
        marginBottom: "5rem",
      }}
    >
      Page Not Found
    </h1>
  );
};

const App = () => {
  const getToke = localStorage.getItem("tokens");
  console.log(getToke);
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {getToke ? <NavbarLogged /> : <Navbar />}
                <Landing />
              </>
            }
          />
          {/* <Route path="/landing" element={AuthInterecpetor(<Landing />)} /> */}
          <Route
            path="/requirement"
            element={
              <>
                {getToke ? <NavbarLogged /> : <Navbar />}
                <Requirements />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                {getToke ? <NavbarLogged /> : <Navbar />}
                <Aboutus />
              </>
            }
          />
          <Route
            path="/bidform/:id"
            element={
              <AuthInterecpetor>
                <BidForm />
              </AuthInterecpetor>
            }
          />
          {/* <Route path="/payment" element={<Payment />} /> */}
          <Route
            path="/"
            element={
              <AuthInterecpetor>
                {getToke ? <NavbarLogged /> : <Navbar />}{" "}
                {/* <IsAuthenticated /> */}
                {window.location.pathname === "/" ? <Landing /> : <Outlet />}
                {/* <Footer /> */}
              </AuthInterecpetor>
            }
          >
            <Route
              path="dashboard"
              element={
                <AuthInterecpetor>
                  <UserDashboard />
                </AuthInterecpetor>
              }
            />

            <Route
              path="services"
              element={
                <AuthInterecpetor>
                  <SceduleAppointment />
                </AuthInterecpetor>
              }
            />
            <Route
              path="bid"
              element={
                <AuthInterecpetor>
                  <Bid />
                </AuthInterecpetor>
              }
            />
            <Route
              path="/payment/:id"
              element={
                <AuthInterecpetor>
                  <Payment />
                </AuthInterecpetor>
              }
            />
            <Route
              path="appid"
              element={
                <AuthInterecpetor>
                  <Appointmentid />
                </AuthInterecpetor>
              }
            />
            <Route
              path="profile"
              element={<AuthInterecpetor>{/* <profile /> */}</AuthInterecpetor>}
            />
            <Route
              path="service/:serviceId"
              element={
                <AuthInterecpetor>
                  <Appointmentservices />
                </AuthInterecpetor>
              }
            />
          </Route>

          <Route
            path="/"
            element={
              <>
                {getToke ? <NavbarLogged /> : <Navbar />} {/* <Navbar /> */}
                {/* <NotAuthenticated /> */}
                <Outlet />
                {/* <Footer /> */}
              </>
            }
          >
            <Route path="/" element={<Landing />} />
            <Route
              path="/login"
              element={
                <AuthInterecpetor prevent={true}>
                  <Login />
                </AuthInterecpetor>
              }
            />
            <Route
              path="/register"
              element={
                <AuthInterecpetor prevent={true}>
                  <Register />
                </AuthInterecpetor>
              }
            />
            <Route
              path="/appointmentid"
              element={
                <AuthInterecpetor prevent={true}>
                  <Appointmentid />
                </AuthInterecpetor>
              }
            />
            <Route
              path="/faq"
              element={
                <AuthInterecpetor>
                  <FeedbackForm />
                </AuthInterecpetor>
              }
            />
          </Route>
          <Route
            path="*"
            element={
              <>
                {getToke ? <NavbarLogged /> : <Navbar />}
                <NotFound />
              </>
            }
          />
        </Routes>
      </AuthContextProvider>
      <Footer />
    </Router>
  );
};

export default App;
