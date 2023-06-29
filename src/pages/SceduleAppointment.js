import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";
import NoData from "../Components/common/NoData";

function ScheduleAppointment() {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();
  // const serviceid = 1;
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 4;

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/services/service_list/"
        );
        setServices(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = services.slice(
    indexOfFirstService,
    indexOfLastService
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleService = (serviceId) => {
    navigate(`/service/${serviceId}`);
    console.log(serviceId);
  };

  return (
    <section className="space-y-10 md:mb-10 ">
      <h2 className="px-8 font-serif text-3xl font-normal">
        Schedule Appointment
      </h2>
      <div className="all flex flex-col space-x-6 space-y-4 md:flex-row md:space-y-0 ">
        <div className="left  space-y-4 rounded px-4 shadow-lg md:ml-6 md:max-w-4xl">
          <div className="space-y-6 bg-white">
            {currentServices.length === 0 ? (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    fontSize: "21px",
                    fontWeight: "700",
                  }}
                >
                  <NoData />
                  <div>No service available</div>
                </div>
              </div>
            ) : (
              currentServices.map((service) => (
                <div
                  key={service.ID}
                  className="service1 flex flex-col bg-slate-100  font-serif font-light  md:max-w-full md:flex-row  md:px-8"
                >
                  <div className="items-center space-y-2 bg-blue-700 p-14">
                    <strong className="ml-24 font-semibold  text-white sm:ml-0">
                      {service.name}
                    </strong>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className=" mx-auto h-6 w-6 rounded-full   bg-white md:ml-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                  <div className="w-full px-4  hover:bg-blue-700">
                    <p className="py-10 font-normal">{service.description}</p>
                    {/* console.log(service.id) */}
                    <p>{service.id}</p>
                    <button onClick={() => handleService(service.ID)}>
                      apply now
                    </button>
                    {/* <Link key={service.ID} to={`/services/${service.ID}`}>
                        <div>apply now</div>
                  </Link> */}
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="pagination">
            {services.length > servicesPerPage && (
              <ul className="flex justify-center space-x-4">
                {Array.from(
                  { length: Math.ceil(services.length / servicesPerPage) },
                  (_, i) => (
                    <li
                      key={i}
                      className={`cursor-pointer ${
                        currentPage === i + 1 ? "font-semibold" : "font-normal"
                      }`}
                      onClick={() => paginate(i + 1)}
                    >
                      {i + 1}
                    </li>
                  )
                )}
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
