import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AuthInterecpetor({ children, prevent }) {
  const navigate = useNavigate();
  useEffect(() => {
    const getToke = localStorage.getItem("tokens");
    console.log(getToke);
    if (prevent === true) {
      if (getToke) {
        toast.error("error");
        return navigate(-1);
      }
    } else if (!prevent) {
      if (!getToke) {
        navigate("/");
        toast.error("Unauthorized");
      }
    }
  }, [navigate]);

  return <>{children}</>;
}

export default AuthInterecpetor;
