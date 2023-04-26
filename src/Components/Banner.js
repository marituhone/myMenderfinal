import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Banner() {
    const rules = [
        {
            text:"All applicants should secure an online appointment when applying for a Serivices",
        },
        {
            text:"Confirmed appointment is required",
        },
        {
            text:"Applicants are reminded to be on site not earlier than 30 minutes on their selected date and time of appointment at their chosen consular office.",
        },
        {
            text:"Personal appearance is required for new applicants."
        },
        {
            text:"Please be warned that dealing with fixers (illegal arrangements) is at your own risk and expense."
        },
        {
            text:"Prepare all the originals and photocopies of the documentary requirements for service application."
        }
    ]
  return (
    <section className='banners py-12'>
        <div className='all'>
            <h2 className='text-center pt-8 font-serif font-bold text-2xl'>Manage Your Account With Confidence</h2>
            <div className='flex flex-col md:flex-row justify-center  space-y-6 md:space-y-0 mt-12 ml-48 md:ml-0 md:space-x-44'>
                <div className='flex flex-col items-center justify-center text-center  w-64'>
                   
                    <h2 className='text-center  font-serif  text-2xl font-light text-gray-700 py-3'>Create account</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="items-center w-14 h-14 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <p className='text-center font-serif text-gray-700 break-words py-4'> 
                        It's free and easy to create your account. 
                        Get a feel for how our online booking system works before committing to payment. 
                        
 
                    </p>

                </div>
                <div  className='flex flex-col items-center justify-center text-center  w-64' >
                    <h2 className='text-center  font-serif  text-2xl font-light text-gray-700 py-3'>Book for Services</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="items-center w-14 h-14">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>


                    <p className='text-center font-serif text-gray-700 break-words py-3'> 
                        It's free and easy to create your account. 
                        Get a feel for how our online booking system works before committing to payment. 
 
                    </p>
                </div>
                <div  className='flex flex-col items-center justify-center text-center  w-64'>

                    <h2 className='text-center  font-serif  text-2xl font-light text-gray-700 py-3'>Save Time</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="items-center w-14 h-14">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                        
                    <p className='text-center font-serif text-gray-700 break-words py-3'> 
                        It's free and easy to create your account. 
                        Get a feel for how our online booking system works before committing to payment.  
                        
 
                    </p>
                </div>

            </div>
            <div className='flex justify-center'>
                <Link to="/register">
                <button className='items-center text-center text-white font-normal focus:ring-indigo-500 rounded-full px-20 py-2 mt-14 md:mt-12 bg-indigo-600'>Get Started</button>
                </Link>
            </div>
        </div>
        <div className='banner2 bg-slate-400 mt-12 space-y-4'>
            <h3 className='text-center pt-8 font-serif font-bold text-2xl'> Before You Apply</h3>
            <div className='p-4'>
                {rules.map((rule) => (
                    <div className='flex items-center  ml-16 leading-10 font-normal font-serif text-gray-700 text-lg'>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-5 bg-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>  
                            {rule.text}
                          

                     
                        
                    </div>
                ))}
                    
            </div>

        </div>
     
    </section>
  )
}

export default Banner
