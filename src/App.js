import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginForm from "./Components/LoginForm"
import { useEffect, useState } from "react"
import axios from 'axios';
import List from "./Components/List";


function App() {
  const adminuser ={
    Id:"ugr/17336/22",
    password:"admin123"
  }
  const [data, setData] = useState({ hits: [] });
  const [user,setUser] = useState({Id:""});
  const [error,setError] = useState("")
  const Login = (details)=> 
  {
    if (details.Id == adminuser.Id && details.password==adminuser.password)
    {console.log("LOGED in")
    setUser({Id:details.Id})
  }
    else{
      setError("detail dont match");
    }
  }
  const Logout = () =>
  {
    setUser({Id:""})
  }


 
    
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Login />} />
    //   </Routes>
    // </BrowserRouter>
    <div>{(user.Id !="" )?
    (<div> <h2>welcome {user.Id}</h2>
      <button onClick={Logout}>Log out</button></div> ): <LoginForm Login={Login} error={error}/>}  
     </div> 
   
  )
}

export default App