import axios from "axios";
import { createContext, useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    if (localStorage.getItem("tokens")) {
      let tokens = JSON.parse(localStorage.getItem("tokens"));
      try {
        const decodedToken = jwt_decode(tokens.access_token);
        return decodedToken;
      } catch (error) {
        console.log("Error decoding token:", error);
      }
    }
    return null;
  });

  const navigate = useNavigate();

  const loginUser = async (payload) => {
    try {
      const apiResponse = await axios.post(
        "http://127.0.0.1:8000/api/auth/token/",
        payload
      );
      localStorage.setItem("tokens", JSON.stringify(apiResponse.data));
      try {
        const decodedToken = jwt_decode(apiResponse.data.access);
        setUser(decodedToken);
        console.log(decodedToken);
        // console.log(decodedToken.useRole)
        navigate("/");    
        console.log("sucesssuser"); 		// console.log(identification_number)

      } catch (error) {
        console.log(apiResponse.data)
        console.log("Error decoding token:", error);
      }
    } catch (error) {
      console.log("Error during login:", error);
    }
  };





  // const logout = async () => {
  //   // invoke the logout API call, for our NestJS API no logout API
 
  //   localStorage.removeItem("tokens");
  //   setUser(null);
  //   navigate("/");
  // };











  return (
    <AuthContext.Provider value={{ user, loginUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
