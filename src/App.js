import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Authentication/LoginForm";
import { Register } from "./pages";

// import NotFoundPage from "./NotFoundPage";


const App = () => {
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
        
          <Route path="/register" element={<Register />} />
          {/* <Route path="/admin/*" element={<Routesadmin />} />
          <Route path="/user/*" element={<UserRoutes />} /> */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </AuthContextProvider>
    </Router>
  );
};

export default App;
