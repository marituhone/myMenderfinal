import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import { Aboutus, Appointmentid, Contactus, Footer, Landing, LoginForm, Navbar, Register, Requirements } from "./Components"
import Services from "./Components/Services"


function App() {
  

  return (
    
    <div className="bg-custom">
      <BrowserRouter>
        <Navbar /> 
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/footer" element={<Footer />} /> 
            <Route path="/requirement" element={<Requirements />} />
            <Route path="/contact" element={<Contactus/>} />
            <Route path="/appointmentid" element={<Appointmentid />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<Register />} />
        

          </Routes>
          <Footer />
          
   </BrowserRouter>



    {/* <Movieprovider>
        <Nav/>
        <MovieList />
        <Add/>
    </Movieprovider> */}
    {/* <Register /> */}
    </div>
     

    
   
  )
}

export default App