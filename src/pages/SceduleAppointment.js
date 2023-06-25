import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ScheduleAppointment() {
  const [services, setServices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 4;

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://your-api-url/services/');
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = services.slice(indexOfFirstService, indexOfLastService);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className='space-y-10 md:mb-10 '>
      <h2 className='font-serif font-normal text-3xl px-8'>Schedule Appointment</h2>
      <div className='all space-x-6 space-y-4 md:space-y-0 flex flex-col md:flex-row '>
        <div className='left  md:max-w-4xl space-y-4 shadow-lg rounded px-4 md:ml-6'>
          <div className='space-y-6 bg-white'>
            {currentServices.map(service => (
              <div key={service.id} className='service1 flex flex-col md:flex-row  md:max-w-full bg-slate-100  font-serif font-light  md:px-8'>
                <div className='bg-blue-700 p-14 space-y-2 items-center'>
                  <strong className='text-white font-semibold  ml-24 sm:ml-0'>{service.name}</strong>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" bg-white rounded-full w-6 h-6   mx-auto md:ml-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
                <div className='hover:bg-blue-700 px-4  w-full'>
                  <p className='py-10 font-normal'>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="pagination">
            {services.length > servicesPerPage && (
              <ul className="flex justify-center space-x-4">
                {Array.from({ length: Math.ceil(services.length / servicesPerPage) }, (_, i) => (
                  <li key={i} className={`cursor-pointer ${currentPage === i + 1 ? 'font-semibold' : 'font-normal'}`} onClick={() => paginate(i + 1)}>
                    {i + 1}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        {/* Rest of the component code */}
      </div>
    </section>
  );
}

export default ScheduleAppointment;
