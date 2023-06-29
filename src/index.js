import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ToastContainer, toast } from "react-toastify";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
// import Footer  from "./Components/common/Footer";

// import { Provider } from 'react-redux';
// import { AuthContext } from './providers/AuthContext';
// import { AuthProvider } from './context/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <AuthProvider> */}
    <App />
    {/* </AuthProvider> */}
    {/* <Footer /> */}
    <ToastContainer />
  </React.StrictMode>
);
reportWebVitals();
