import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
// import Services from "./Components/Services"
import Navbar from "./Components/common/Navbar";
import Footer from "./Components/common/Footer";

import { Aboutus, Appointmentid, FeedbackForm, Landing, LoginForm, Register, Requirements, SceduleAppointment } from "./pages"


function App() {
  

  return (
    
    <div className="bg-custom">
      <BrowserRouter>
        <Navbar /> 
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/footer" element={<Footer />} /> 
            <Route path="/requirement" element={<Requirements />} />
            {/* <Route path="/contact" element={<Contactus/>} /> */}
            <Route path="/appointmentid" element={<Appointmentid />} />
            <Route path="/abc" element={<SceduleAppointment />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<Register />} />
            <Route path="/faq" element={<FeedbackForm />} />

        

          </Routes>
          <Footer />
          
   </BrowserRouter>



   
    </div>
     

    
   
  )
}

export default App