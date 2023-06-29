import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";

function NavbarLogged() {
  const { logout } = useContext(AuthContext); // Access the logout function from the AuthContext

  const handleLogout = () => {
    logout(); // Call the logout function when the logout button is clicked
  };
  return (
    <div>
      <div className="flex items-center justify-between  p-2">
        <div className="text-sm uppercase lg:flex-grow">
          <li className="text-white-200 mr-4 mt-4 block lg:mt-0 lg:inline-block">
            <Link
              to="/"
              className="text-white-200 mr-4 mt-4 block font-serif font-light uppercase  text-gray-700 lg:mt-0 lg:inline-block "
            >
              Home
            </Link>
          </li>
          <li className="text-white-200 mr-4 mt-4 block font-serif font-light uppercase  text-gray-700 lg:mt-0 lg:inline-block">
            <Link to="/requirement">Requirement</Link>
          </li>
          {/* <li className="text-white-200 mr-4 mt-4 block font-serif font-light uppercase  text-gray-700 lg:mt-0 lg:inline-block">
            <Link to="/appointment">Appointment </Link>
          </li> */}
          {/* <li className='block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 text-gray-700  font-serif font-light uppercase'>
                      <Link to="/about">About</Link>
                      </li> */}

          <li className="text-white-200 mr-4 mt-4 block font-serif font-light uppercase  text-gray-700 lg:mt-0 lg:inline-block">
            <Link to="/services">service</Link>
          </li>
          <li className="text-white-200 mr-4 mt-4 block font-serif font-light uppercase  text-gray-700 lg:mt-0 lg:inline-block">
            <Link to="/bid">bid</Link>
          </li>
        </div>
        <button
          style={{
            padding: "4px 14px",
            background: "gray",
            borderRadius: "6px",
            color: "white",
            textTransform: "capitalize",
          }}
          onClick={handleLogout}
        >
          logout
        </button>{" "}
        {/* Call handleLogout function on button click */}
      </div>
    </div>
  );
}

export default NavbarLogged;
