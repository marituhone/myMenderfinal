import React from 'react';

import { useState } from "react";
import { useSelector } from 'react-redux';
import Footer from "./Components/common/Footer";
import Navbar from "./Components/common/Navbar";
import NavbarLogged from "./Components/common/NavbarLogged";

function Layout() {
	// const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	return (
		<div className="bg-[#EDF2F4]">
			{isLoggedIn ? <NavbarLogged /> : <Navbar />}
		</div>
	);
}

export default Layout;




 

