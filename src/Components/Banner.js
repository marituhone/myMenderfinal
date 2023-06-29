import React, { useState } from "react";
import { Link } from "react-router-dom";

function Banner() {
  const rules = [
    {
      text: "All applicants should secure an online appointment when applying for a Serivices",
    },
    {
      text: "Confirmed appointment is required,appointment when applying for a Serivices",
    },
    {
      text: "Applicants are reminded to be on site not earlier than 30 minutes on their selected date and time of appointment at their chosen consular office.",
    },
    {
      text: "Personal appearance is required for new applicants.",
    },
    {
      text: "Please be warned that dealing with fixers (illegal arrangements) is at your own risk and expense.",
    },
    {
      text: "Prepare all the originals and photocopies of the documentary requirements for service application.",
    },
  ];
  return (
    <section className="banners py-12">
      <div className="all">
        <h2 className="pt-8 text-center font-serif text-2xl font-bold">
          Manage Your Account With Confidence
        </h2>
        <div className="ml-20 mt-12 flex flex-col  justify-center space-y-6 md:ml-0 md:flex-row md:space-x-44 md:space-y-0">
          <div className="flex w-64 flex-col items-center justify-center  text-center">
            <h2 className="py-3  text-center  font-serif text-2xl  font-light">
              Create account
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-14 w-14 items-center "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            <p className="break-words py-4 text-center font-serif ">
              It's free and easy to create your account. Get a feel for how our
              online booking system works before committing to payment.
            </p>
          </div>
          <div className="flex w-64 flex-col items-center justify-center  text-center">
            <h2 className="py-3  text-center  font-serif text-2xl font-light text-gray-700">
              Book for Services
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-14 w-14 items-center"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>

            <p className="break-words py-3 text-center font-serif text-gray-700">
              It's free and easy to create your account. Get a feel for how our
              online booking system works before committing to payment.
            </p>
          </div>
          <div className="flex w-64 flex-col items-center justify-center  text-center">
            <h2 className="py-3  text-center  font-serif text-2xl font-light text-gray-700">
              Save Time
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-14 w-14 items-center"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <p className="break-words py-3 text-center font-serif text-gray-700">
              It's free and easy to create your account. Get a feel for how our
              online booking system works before committing to payment.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <Link to="/register">
            <button className="mt-14 items-center rounded-full bg-indigo-600 px-20 py-2 text-center font-normal text-white focus:ring-indigo-500 md:mt-12">
              Get Started
            </button>
          </Link>
        </div>
      </div>
      <div className="banner2 mt-12 space-y-4 bg-slate-50">
        <h3 className="pt-8 text-center font-serif text-2xl font-bold ">
          {" "}
          Before You Apply
        </h3>
        <div className="p-4">
          {rules.map((rule) => (
            <div className="flex items-center md:ml-20">
              <div className="align-self-start pb-2 pl-2 pr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="mr-2 h-6 w-6  flex-shrink-0 bg-black"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <div className="mt:8 align-self-end pb-2 pl-2 pr-2">
                <p className="flex-1 flex-shrink-0 text-sm leading-8">
                  {rule.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Banner;
