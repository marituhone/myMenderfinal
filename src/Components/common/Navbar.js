import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
function Navbar() {
 const [isOpen, setIsOpen] = useState(false);
 const[drop,setDrop] =useState(false);  //for dropdowns
  const [selectedItem,setSelectedItem] = useState('AMHARIC');
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
   <nav className="flex items-center justify-between flex-wrap p-6">
     <div className="flex items-center flex-shrink-0  mr-6 lg:mr-48">
              <a className='cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="bg-white w-8 h-8 ">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                </svg>
               </a>
     </div>
     <div className="block lg:hidden">
       <button className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400" onClick={handleOpen}>{isOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30}/>}</button>
     </div>
     <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}>
       <div className="text-sm lg:flex-grow uppercase">
                    <li className='block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4'>
                    <Link to="/" className='block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 text-gray-700  font-serif font-light uppercase '>Home</Link>
                    </li>
                    <li className='block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 text-gray-700  font-serif font-light uppercase'>
                    <Link to="/requirement">Requirement</Link>
                    </li>
                    <li className='block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 text-gray-700  font-serif font-light uppercase'>
                    <Link to="/appointmentid">IDappointment </Link>
                    </li>
                    <li className='block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 text-gray-700  font-serif font-light uppercase'>
                    <Link to="/about">About</Link>
                    </li>
                    
                    <li className='block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 text-gray-700  font-serif font-light uppercase'>
                    <Link to="/abc">service</Link>
                    </li>
       </div>

       <div className="dropdown relative lg:mr-40 mt-4 md:mt-0 mb-6  md:mb-0 rounded bg-indigo-400 text-white">
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
                        
                        
          </div>



       
                    <div className={` md:space-x-4 space-y-2 flex flex-col lg:inline-block lg:mt-0 text-white-200 mr-4 ${isOpen ? "block " : "hidden "}`}>
                        <Link to='/login'
                            href="javascript:void(0)"
                            className=" px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                        >
                            Sign in
                        </Link>
                        <Link to='/register '
                            href="javascript:void(0)"
                            className=" px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                        >
                            Sign up
                        </Link>
                  </div>
     </div>
   </nav>
 );
}
export default Navbar;