import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen,setIsOpen] = useState(false);  //for the toggle
  const[drop,setDrop] =useState(false);  //for dropdowns
  const [selectedItem,setSelectedItem] = useState('Amharic');
  const handleDrop =() =>
  {
    setDrop(!drop)
  }
  const handleOpen = () =>
  {
    setIsOpen(!isOpen);
  }
  const handleSelectedItem=(item) =>
  {
    
    setSelectedItem(item);
    setDrop(!drop)
   
  }
  return (
    <nav className='bg-red-medium w-full'>
      <div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
          <div className=' flex items-center justify-between py-3 md:py-5 md:block'>
              <a className='cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="bg-white w-6 h-6 ">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
               </svg>
               </a>
               <div className='md:hidden'>
               <button className='toggle  rounded-md  outline-none focus:border-gray-400 focus:border' onClick={handleOpen}>{isOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu/>}</button>
               </div>
            
            </div>

           <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${isOpen ? "block" : "hidden"}`}>
                  <ul className='justify-center items-center md:flex md:space-x-6 text-black space-x-3'>
                    <li >
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/requirement">Requirement</Link>
                    </li>
                    <li>
                    <Link to="/appointmentid">IDappointment </Link>
                    </li>
                    <li>
                    <Link to="/about">About</Link>
                    </li>
                    <li>
                    <Link to="/contact">Contact</Link>
                    </li>

                    <div className="dropdown relative ">
                        <button onClick={handleDrop}>{selectedItem}<svg class="w-4 h-4 ml-1 inline-flex" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" className='hidden'></path></svg></button>
                        {drop ?
                          (<ul className="menu absolute list-none my-5 w-28 py-2 bg-white  shadow">
                              <li className="menu-item bg-white hover:bg-slate-200">
                                <button  onClick={()=>handleSelectedItem('Amharic')}>Amharic</button>
                              </li>
                              <li className="menu-item bg-white hover:bg-slate-200">
                                <button onClick={()=>handleSelectedItem('English')}>English</button>
                              </li>
                              </ul>
                              ) : null}
                        
                        
                    </div>

                  </ul>
                 
            </div>
            <div className={` md:space-x-4 space-y-2 flex flex-col md:inline-block ${isOpen ? "block " : "hidden "}`}>
                        <Link to='/login'
                            href="javascript:void(0)"
                            className=" px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                        >
                            Sign in
                        </Link>
                        <Link to='register '
                            href="javascript:void(0)"
                            className=" px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                        >
                            Sign up
                        </Link>
            </div>
      </div>
    </nav>
  )
}

export default Navbar