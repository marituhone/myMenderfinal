import React from 'react';

import { useState } from "react";
import Footer from "./Components/common/Footer";
import Navbar from "./Components/common/Navbar";
import NavbarLogged from "./Components/common/NavbarLogged";

function Layout({ children }) {
	const [logged, setlogged] = useState(false);
	return (
		<div className="bg-[#EDF2F4]">
			{logged ? <NavbarLogged /> : <Navbar />}
			<main>{children}</main>
			<Footer />
		</div>
	);
}

export default Layout;
