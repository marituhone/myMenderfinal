import React from 'react'
import { Link } from 'react-router-dom'

function Appointmentid() {
  return (
    <section className='p-10'> 
       <div className='sm:w-full sm:max-w-md sm:mx-auto'>
         <form className='w-full bg-white border border-gray-300 shadow rounded-lg  py-12 px-6'>
              <div className='space-y-4'>
                    <label htmlFor='name' className='block font-medium font-serif text-gray-700'>Name:</label>
                    <input type="text"  id="name" name="bday" className='w-full border border-gray-300 px-3 py-1.5 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'/>
                  
                    <label htmlFor='day' className='block font-medium font-serif text-gray-700'>Pick day:</label>
                    <input type="date" id="day" name="bday" className='w-full border border-gray-300 px-3 py-1.5 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500' />
                    <div className=''>
                      <Link to="/">
                            <button  type="submit" className='w-full justify-center bg-indigo-600 px-4 border-transparent font-medium text-sm shadow-sm text-white py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-md' >Save</button>
                      </Link>
                    </div>
              </div>
        </form>


       </div>
    </section>
  )
}

export default Appointmentid