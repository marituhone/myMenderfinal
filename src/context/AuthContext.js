import axios from "axios";
import { createContext, useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    if (localStorage.getItem("tokens")) {
      let tokens = localStorage.getItem("tokens");
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
      await axios
        .post("http://127.0.0.1:8000/api/auth/token/", payload)
        .then((res) => {
          try {
            localStorage.setItem("tokens", res.data.access);

            toast.success("success");
            navigate("/dashboard");
            setTimeout(() => {
              window.location.reload();
            }, 10);
          } catch (error) {
            if (error?.response?.data?.detail) {
              toast.error(error?.response?.data?.detail);
            }
            toast.error(error);
            console.log("Error decoding token:", error);
          }
        });
    } catch (error) {
      toast.error(error);
      console.log("Error during login:", error);
    }
  };

  const logout = async () => {
    // invoke the logout API call, for our NestJS API no logout API

    localStorage.removeItem("tokens");
    setUser(null);
    navigate("/");
    // setTimeout(() => {
    window.location.reload();
    // }, 100);
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
