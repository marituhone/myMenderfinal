import React from 'react'
import Banner from '../Components/Banner'

function Services() {
  return (
    <section>
        <div className='all py-10'>
          <div className='textpart'>
              <h2 className='font-bold text-3xl text-center mb-10'>Services</h2>
          </div>
          <div className='justify-between  space-y-6 md:space-y-0 flex flex-col  md:flex-row  ml-8 md:space-x-10'>
                  <div className='border border-x-2 text-gray-700  px-4 py-5 leading-7 shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 justify-center items-center'>
                    <h3 className='uppercase font-bold text-center py-2 '>Announcement</h3>
                    <p className='font-serif'>It is a long established fact that a reader will be distracted by the readable content of a 
                      page when looking at its layout.
                      The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
                      as opposed to using 'Content here, content here', making it look like readable English
                      </p>
                      <button className='rounded-xl bg-indigo-600 mt-2 text-white p-2 text-xs font-semibold '>See More</button>
                  </div>
                  <div className='border border-x-2 text-gray-700  px-4 py-5 leading-7 shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 justify-center items-center'>
                    <h3 className='uppercase font-bold text-center py-2'>Bid</h3>

                  <p className='font-serif'>It is a long established fact that a reader will be distracted by the readable content of a 
                      page when looking at its layout.
                      The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
                      as opposed to using 'Content here, content here', making it look like readable English
                      </p>
                      <button className='rounded-xl bg-indigo-600 mt-2 text-white p-2 text-xs font-semibold '>See More</button>

                  </div>
                  <div className='border border-x-2  text-gray-700  px-4 py-5 leading-7 shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 justify-center items-center'>
                      <h3 className='uppercase font-bold text-center py-2 '>Appointment</h3>

                    <p className='font-serif'>It is a long established fact that a reader will be distracted by the readable content of a 
                      page when looking at its layout.
                      The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
                      as opposed to using 'Content here, content here', making it look like readable English
                      </p>
                      <button className='rounded-xl bg-indigo-600 mt-2 text-white p-2 text-xs font-semibold '>See More</button>

                  </div>
                  <div className='border border-x-2 text-gray-700    px-4 py-5 leading-7 shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 justify-center items-center'>
                    <h3 className='uppercase font-bold text-center py-2 '>Notification</h3>

                    <p className='font-serif'>It is a long established fact that a reader will be distracted by the readable content of a 
                      page when looking at its layout.
                      The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
                      as opposed to using 'Content here, content here', making it look like readable English
                      </p>
                      <button className='rounded-xl bg-indigo-600 mt-2 text-white p-2 text-xs font-semibold '>See More</button>

                  </div>

          </div>
       <Banner />
        </div>
    </section>
  )
}

export default Services