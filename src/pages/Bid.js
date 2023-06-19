import React from 'react'
import { Link } from 'react-router-dom'

function Bid() {
  return (
    <section className='px-8  space-y-8 py-3 bg-slate-300'> 
    <div className='all w-full m-auto px-10 py-2 space-y-4 bg-white rounded-md border-2 border-white/25 shadow-sm mt-3' >

            <div className='upper text-blue-950  flex flex-col md:flex-row  space-y-6 ml-4 md:ml-0 md:space-y-0 justify-around border-b py-2 border-gray/20'>
                
                <h1 className='text-2xl font-serif'> Bole subcity Correctional Institution Procurement Process from July 1, 2015. Until December 30/2016 He wants to buy various spices and firewood to be used for food for law prisoners for a period of 6/six months </h1> 
               
            </div>
            <div className='upper  flex flex-col  ml-4 md:ml-0 md:space-y-3 justify-around border-b py-6 border-gray/20'>
                <div className='flex font-serif space-x-2 text-blue-950 '>
                    <p className='font-semibold '> Bidding start date :  </p>
                    <p> 6/19/2023</p>
                </div>
                <div className='flex font-serif space-x-2 text-blue-950 '>
                        <p className='font-semibold '> Bidding close date :  </p> 
                        <p>8/20/2023</p>
                </div>
               
            </div>
            <div className='flex space-x-8 px-2 py-2'>
                <div className='flex space-x-3 border rounded-md w-28 px-1.5 py-1.5'>
                    
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="indigo" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                </svg>

                    <p className='font-normal font-serif text-indigo-700' >Save</p>
                </div>
                <div className=''>
                        
                        <Link to="/payment"><button className='font-normal font-serif  bg-green-300 rounded-lg p-2'>Bidding Open</button></Link>
                </div>
            </div>

    </div>
    <div className='all w-full m-auto px-10 py-2 space-y-4 border  bg-white border-x-2 border-white/25  rounded-md shadow-sm mt-3' >

            <div className='upper text-blue-950  flex flex-col md:flex-row  space-y-6 ml-4 md:ml-0 md:space-y-0 justify-around border-b py-2 border-gray/20'>
                
                <h1 className='text-2xl font-serif'> Bole subcity Correctional Institution Procurement Process from July 1, 2015. Until December 30/2016 He wants to buy various spices and firewood to be used for food for law prisoners for a period of 6/six months </h1> 
            
            </div>
            <div className='upper  flex flex-col  ml-4 md:ml-0 md:space-y-3 justify-around border-b py-6 border-gray/20'>
                <div className='flex font-serif space-x-2 text-blue-950 '>
                    <p className='font-semibold '> Bidding start date :  </p>
                    <p> 6/19/2023</p>
                </div>
                <div className='flex font-serif space-x-2 text-blue-950 '>
                        <p className='font-semibold '> Bidding close date :  </p> 
                        <p>8/20/2023</p>
                </div>
            
            </div>
            <div className='flex space-x-8 px-2 py-2'>
                <div className='flex space-x-3 border rounded-md w-28 px-1.5 py-1.5'>
                    
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="indigo" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                </svg>

                    <p className='font-normal font-serif text-indigo-700' >Save</p>
                </div>
                <div className=''>
                        
                        <Link to="/payment"><button className='font-normal font-serif  bg-red-300 rounded-lg p-2'>Bidding closed</button></Link>
                </div>
            </div>

    </div>
</section>
  )
}

export default Bid
