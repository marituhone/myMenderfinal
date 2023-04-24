import React from 'react'
import Navbar from './Navbar'

function Aboutus() {
  return (
   <section className='w-full m-auto px-10 py-10 '>
    
    <div className='about'>
        <div className='containerupper mb-32 flex flex-col md:flex-row justify-between space-x-8'>
            <div className='content md:w-2/3 ml-5'>
                <h1 className='font-extrabold text-3xl mb-4'>what we do?</h1>
                <p>We started our business with an aim to be the leading company in the field of web hosting and 
                    related services by creating long-term value for our clients. Hahucloud team achieving this by disciplined work approach and the commitment towards technological excellence.
                    The most important thing towards which we are completely focused is the satisfaction of customers and providing them excellent support.
                    This can be achieved only by providing high quality and cost-effective web-solutions and services to our customers which we are doing very successful. 
                    Everything that we do reflects our commitment towards the top standards in personal and corporate ethics. We have been achieving excellence by following our principals and we are on the path of achieving our aim.
                    </p>
                    <a className='font-semibold text-2sm'>Learn More</a>
            </div>
            <div className='img rounded-full  bg-black overflow-hidden  w-full md:w-1/3 mt-5 md:mt-6 '>
                <img className='w-full'  src='https://motopress.com/wp-content/uploads/2020/11/motopress-appointment-731x548.jpg'></img>
            </div>
        </div>
        <div className='containerlower space-y-6 md:space-y-0 flex flex-col  md:flex-row  ml-8 md:space-x-10'>
            
            <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Vision</h5>
                </a>
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                Go to this step by step guideline process on how to certify for your weekly benefits
                Go to this step by step guideline process on how to certify for your weekly benefits
                Go to this step by step guideline process on how to certify for your weekly benefits
                Go to this step by step guideline process on how to certify for your weekly benefits
                Go to this step by step guideline process on how to certify for your weekly benefits
                </p>
               
            </div>
          
            <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Vision</h5>
                </a>
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                Go to this step by step guideline process on how to certify for your weekly benefits
                Go to this step by step guideline process on how to certify for your weekly benefits
                Go to this step by step guideline process on how to certify for your weekly benefits
                Go to this step by step guideline process on how to certify for your weekly benefits
                Go to this step by step guideline process on how to certify for your weekly benefits
                </p>
               
            </div>
            <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Value</h5>
                </a>
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                Go to this step by step guideline process on how to certify for your weekly benefits
                Go to this step by step guideline process on how to certify for your weekly benefits
                Go to this step by step guideline process on how to certify for your weekly benefits
                Go to this step by step guideline process on how to certify for your weekly benefits
                Go to this step by step guideline process on how to certify for your weekly benefits
                </p>
               
            </div>


        </div>
    </div>
   </section>
  )
}

export default Aboutus