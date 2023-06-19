import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
// import Services from "./Components/Services"
import Navbar from "./Components/common/Navbar";
import Footer from "./Components/common/Footer";
import { useSelector } from 'react-redux';
import { Aboutus, FeedbackForm, Landing, LoginForm, Register, Requirements, SceduleAppointment } from "./pages"
import NavbarLogged from "./Components/common/NavbarLogged";
import Layout from "./Layout";
import AppointmentId from "./pages/Appointmentid";
import Bid from "./pages/Bid";
import Payment from "./pages/Payment";

// import { Provider } from 'react-redux';
// import store from "./store";

// import Dashboard from './pages/Dashboard';
// import { Dashboard } from "@mui/icons-material";


function App() {
  const [date, setDate] = useState(new Date());

  return (
    // <Provider store={store}>
    <div className="bg-custom">
      <BrowserRouter>
        {/* <Navbar />  */}
        <Layout />
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/footer" element={<Footer />} /> 
            <Route path="/requirement" element={<Requirements />} />
              {/* <Route path="/contact" element={<Contactus/>} /> */}
            <Route path="/appointmentid" element={<AppointmentId />} />
            <Route path="/abc" element={<SceduleAppointment />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<Register />} />
            <Route path="/faq" element={<FeedbackForm />} />
            <Route path="/bid" element ={<Bid />} />
            <Route path="/payment" element ={<Payment />} />
            {/* <Route path="/admin" element={<Dashboard />} /> */}

        

          </Routes>
          <Footer />
          
   </BrowserRouter>

   
    </div>
    // </Provider>

    
   
  )
}

export default App