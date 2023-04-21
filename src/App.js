// import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginForm from "./Components/LoginForm"
import { useEffect, useState } from "react"
import Register from "./Components/Register"
import MovieList from "./Components/MovieList"

import Nav from "./Components/Nav";
import { Movieprovider }from "./Components/Movieprovider";
import Add from "./Components/Add";




function App() {
  

  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<LoginForm />} />
    //       {/* <Route path="/" element={<Register />} /> */}
        
    //   </Routes>
    // </BrowserRouter>
    <div>
    {/* <Movieprovider>
        <Nav/>
        <MovieList />
        <Add/>
    </Movieprovider> */}
    </div>
     

    
   
  )
}

export default App