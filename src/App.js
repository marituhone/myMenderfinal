import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginForm from "./Components/LoginForm"
import { useEffect, useState } from "react"
import Register from "./Components/Register"
import MovieList from "./Components/MovieList"

import Nav from "./Components/Nav";
import { Movieprovider }from "./Components/Movieprovider";
import Add from "./Components/Add";
import Aboutus from "./Components/Aboutus"
import Footer from "./Components/Footer"




function App() {
  

  return (
    
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="/" element={<Footer />} /> */}

            <Route path="/" element={<Aboutus />} />
          
          </Routes>
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