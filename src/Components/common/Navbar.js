import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [drop, setDrop] = useState(false); //for dropdowns
  const [selectedItem, setSelectedItem] = useState("AMHARIC");
  const handleDrop = () => {
    setDrop(!drop);
  };
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleSelectedItem = (item) => {
    setSelectedItem(item);
    setDrop(!drop);
  };

  // return (
  //   <div>
  //     <div className="flex items-center justify-between bg-orange-500 p-2">
  //       <div>Logo</div>
  //       <div>menu not Logged</div>
  //     </div>
  //   </div>
  // );
  return (
    <nav className="flex flex-wrap items-center justify-between p-6">
      <div className="mr-6 flex flex-shrink-0  items-center lg:mr-48">
        <Link to={"/"} className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-8 w-8 bg-white "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
            />
          </svg>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          className="text-black-500 hover:text-black-400 flex items-center rounded px-3 py-2"
          onClick={handleOpen}
        >
          {isOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </button>
      </div>
      <div
        className={`block w-full flex-grow lg:flex lg:w-auto lg:items-center ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-lg uppercase lg:flex-grow">
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
          <li className="text-white-200 mr-4 mt-4 block font-serif font-light uppercase  text-gray-700 lg:mt-0 lg:inline-block">
            <Link to="/appointmentid">IDappointment </Link>
          </li>
          <li className="text-white-200 mr-4 mt-4 block font-serif font-light uppercase  text-gray-700 lg:mt-0 lg:inline-block">
            <Link to="/about">About</Link>
          </li>

          {/* <li className='block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 text-gray-700  font-serif font-light uppercase'>
                      <Link to="/services">service</Link>
                      </li> */}
        </div>

        {/* <div className="dropdown relative lg:mr-40 mt-4 md:mt-0 mb-6  md:mb-0 rounded bg-indigo-400 text-white">
                          <button onClick={handleDrop}>{selectedItem}<svg class="w-4 h-4 ml-1 inline-flex py-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" className='hidden'></path></svg></button>
                          {drop ?
                            (<ul className="menu absolute list-none my-5 w-28  bg-white text-gray-700  font-serif font-light uppercase shadow">
                                <li className="menu-item bg-white hover:bg-slate-200 text-gray-700  font-serif font-light uppercase">
                                  <button className='text-gray-700  font-serif font-light uppercase ' onClick={()=>handleSelectedItem('AMHARIC')}>AMHARIC</button>
                                </li>
                                <li className="menu-item bg-white hover:bg-slate-200 text-gray-700  font-serif font-light uppercase">
                                  <button className='text-gray-700  font-serif font-light uppercase' onClick={()=>handleSelectedItem('ENGLISH')}>ENGLISH</button>
                                </li>
                                </ul>
                                ) : null}

            </div> */}

        <div
          className={` text-white-200 mr-4 flex flex-col space-y-2 md:space-x-4 lg:mt-0 lg:inline-block ${
            isOpen ? "block " : "hidden "
          }`}
        >
          <Link
            to="/login"
            href="javascript:void(0)"
            className=" rounded-md bg-gray-600 px-4 py-2 text-center text-white shadow hover:bg-gray-800"
          >
            Sign in
          </Link>
          <Link
            to="/register "
            href="javascript:void(0)"
            className=" rounded-md bg-white px-4 py-2 text-center text-gray-800 shadow hover:bg-gray-100"
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
