import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const CardOne = ({
  total,
  approved,
  pending,
  rejected,
  departmenet,
  percent,
}) => {
  return (
    <>
      <div className="border-stroke px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark rounded-sm border bg-white p-6">
        <div className="h-11.5 w-11.5 bg-meta-2 dark:bg-meta-4 flex items-center justify-start rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#5C6BC0"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
            />
          </svg>
        </div>
        <div className="mt-4 flex items-end justify-between">
          <div>
            <div className="flex flex-row gap-7">
              <div className="flex flex-col gap-1">
                {total && (
                  <h4 className="text-xl font-normal text-indigo-400 dark:text-white">
                    {total}
                  </h4>
                )}
                {approved && (
                  <h4 className="text-xl font-normal text-green-500 dark:text-white">
                    {approved}
                  </h4>
                )}
              </div>
              <div className="flex flex-col gap-1">
                {pending && (
                  <h4 className="text-xl font-normal text-orange-600 dark:text-white">
                    {pending}
                  </h4>
                )}
                {rejected && (
                  <h4 className="text-xl font-normal text-red-800 dark:text-white">
                    {rejected}
                  </h4>
                )}
              </div>
            </div>
            <span className="text-sm font-medium text-gray-500">
              {departmenet}
            </span>
          </div>
          {percent && (
            <span className="text-meta-3 flex items-center gap-1 text-sm font-medium">
              {percent}%
              <svg
                class="fill-meta-3"
                width="10"
                height="11"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
                  fill=""
                />
              </svg>
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default CardOne;
