import React, { useEffect, useState } from "react";
// import Accordion from "../Components/Accordion";
// import { accordions } from "../Components/Data";
import axios from "axios";
import { toast } from "react-toastify";

function Requirements() {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  const [requirement, setRequirement] = useState([]);

  useEffect(() => {
    const fetchReq = async () => {
      try {
        const token = localStorage.getItem("tokens");
        const response = await axios.get(
          "http://127.0.0.1:8000/api/services/requirment_list/",
          {
            headers: {
              "Content-Type": "application/json",
              // Authorization: `Bearer ${token}`,
            },
          }
        );
        setRequirement(response.data);
        // setRequirement([{
        //   description:"asdasdasd sdfsd f dsf sdf as df sdf as da sf asd dsf sr we rs  dsf sdf as df sdf as da sf asd dsf sr we rs dsf sdf as df sdf as da sf asd dsf sr we rs dsf sdf as df sdf as da sf asd dsf sr we rs",
        //    date_created:"123m 123 123 "
        // }]);
      } catch (error) {
        toast.error("Error fetching requirement");
        console.error("Error fetching requirement:", error);
      }
    };

    fetchReq();
  }, []);

  function convertDate(app_date) {
    const date = new Date(app_date);
    const formattedDate = date.toISOString().split("T")[0];
    return formattedDate;
  }

  return (
    <section className="mb-32 mt-10">
      <div className="flex w-full max-w-[720] flex-col gap-6 px-24">
        {requirement.length === 0 ? (
          <>
            <div
              style={{
                boxShadow: "0px 0px 11px -6px #0000008a",
                borderRadius: "10px",
              }}
              className="border-l-8 border-red-500 px-2  py-2 shadow-sm"
            >
              <div className="accordion">
                <div className="accordion-header">
                  <h3>No requirements available</h3>
                </div>
              </div>
            </div>
          </>
        ) : (
          requirement?.map((item, id) => {
            const { description, date_created } = item;
            return (
              <div
                style={{
                  boxShadow: "0px 0px 11px -6px #0000008a",
                  borderRadius: "10px",
                }}
                className="border-l-8 border-indigo-500 px-2  py-2 shadow-sm"
                key={id}
              >
                <div className="accordion">
                  <div className="accordion-header">
                    <span
                      style={{
                        fontSize: "13px",
                        color: "gray",
                      }}
                      className="accordion-date"
                    >
                      {convertDate(date_created)}
                    </span>
                    {/* <h3>{title}</h3> */}
                  </div>
                  <div className="accordion-content">
                    {expanded ? (
                      <p>{description}</p>
                    ) : (
                      <p>{description?.slice(0, 50)}...</p>
                    )}
                    <button
                      style={{
                        borderRadius: "33px",
                        padding: "3px 13px",
                        background: " gray",
                        color: "white",
                        marginTop: "10px",
                      }}
                      onClick={toggleAccordion}
                    >
                      {expanded ? "See Less" : "See More"}
                    </button>
                  </div>
                </div>
                {/* <Accordion title={re1} content={re1}></Accordion> */}
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}

export default Requirements;
