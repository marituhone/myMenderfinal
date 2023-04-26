import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <section>
        <div className='all w-full m-auto px-10 py-10 bg-slate-800 space-y-4 text-white'>

                <div className='upper  flex flex-col md:flex-row   space-y-6 md:space-y-0 justify-around border-b  border-white/20'>
                    <div className='flex flex-col space-y-6 md:mb-4'>
                        <h2 className='font-semibold text-xl'>About our services</h2>
                        <Link to="/requirement"><p className='font-normal font-serif text-gray-400'>Service requiremnts</p></Link>
                        <Link to="/appointment"><p className='font-normal font-serif text-gray-400' >Scedule Appointment</p></Link>
                        <Link to="/about"><p className='font-normal font-serif text-gray-400'>About Us</p></Link> 
                    </div>
                    <div className='flex flex-col space-y-6 mb-4'>
                        <h2 className='font-semibold text-xl'>Contact Us</h2>
                        <div className='flex space-x-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>

                            <p className='font-normal font-serif text-gray-400'>Addis Abeba,Ethiopia</p>
                        </div>
                        <div className='flex space-x-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>

                            <p className='font-normal font-serif text-gray-400'>01111787878</p>
                        </div>
                        <div className='flex space-x-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            <p className='font-normal font-serif text-gray-400'>Bolesubsity@gmail.com</p>

                        </div>

                    </div>
                    <div className='flex flex-col space-y-6 md:mb-4 '>
                        <h2 className='font-semibold text-xl'>Help and Support</h2>
                        <Link to="/faq"><p className='font-normal font-serif text-gray-400'>FAQ</p></Link>
                        <Link to="/faq"><button className='font-normal font-serif  bg-indigo-700 rounded-lg p-2'>Feedback</button></Link>
                    </div>
                </div>
            
                <div className=''>
                    <p className='font-normal font-serif text-gray-400' >©2015 copyright@Bolesubsity</p>
                </div>

        </div>
    </section>
  )
}

export default Footer