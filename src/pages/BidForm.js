import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

// import axios from   '../../api/axios'

function BidForm() {
  const [money, setMoney] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);

  const handleBooking = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("tokens"); // Retrieve token from localStorage
      console.log(id);
      const response = await axios.post(
        `http://127.0.0.1:8000/api/bid/BidCommpitionInfo`,
        JSON.stringify({ final_price: money, bid_id: id }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include token in the Authorization header
          },
        }
      );
      toast.success("You have successfully scheduled the appointment");
      navigate("/bid");
      console.log(response);
    } catch (err) {
      toast.error("Failed to schedule the appointment");
    }
  };

  return (
    <>
      <div className="flex min-h-screen flex-row justify-center bg-gray-100 px-6 py-12 lg:px-8">
        <div className="flex min-h-screen w-2/3 bg-gray-100 pt-24">
          the beneficiary and the HDPO following successful selection from the
          lottery, and calls for the family’s payment of the 20 percent
          down-payment. Once paid, the bank issues the family with a receipt
          which they must deliver to the HDPO along with Form 03 to initiate the
          signing of the title deed.
        </div>

        <div>
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="text-center text-2xl font-semibold text-gray-900">
              pay now
            </h2>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="rounded-lg bg-white px-6  py-8 shadow sm:px-10">
              <form className="mb-0 space-y-6">
                <div>
                  <label
                    htmlFor="money"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Amount of money
                  </label>
                  <div className="mt-1">
                    <input
                      type="number"
                      id="money" // Fix input's id attribute
                      aria-describedby="pnote"
                      onChange={(e) => setMoney(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-3 py-1.5 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  {/* <Link to="/register"> */}
                  <button
                    className="w-full justify-center rounded-md border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={handleBooking} // Add onClick event
                  >
                    pay
                  </button>
                  {/* </Link> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BidForm;
