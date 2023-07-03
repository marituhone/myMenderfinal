import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NoData from "../Components/common/NoData";

function Bid() {
  const [bids, setBids] = useState([]);

  useEffect(() => {
    const fetchBids = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/bid/Bid_list"
        );
        console.log(bids);
        setBids(response.data);
      } catch (error) {
        console.error("Error fetching bids:", error);
      }
    };

    fetchBids();
  }, []);

  return (
    <section className="space-y-8 bg-slate-300 px-8 py-3">
      {bids.length === 0 ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            padding: "3rem 0",
            justifyContent: "center",
            textAlign: "center",
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
            <div>No Bid Available</div>
          </div>
        </div>
      ) : (
        // <p className="text-center text-gray-500">Bid List is Empty</p>
        bids.map((bid) => (
          <div
            className="all m-auto mt-3 w-full space-y-4 rounded-md border-2 border-white/25 bg-white px-10 py-2 shadow-sm"
            key={bid.id}
          >
            <div className="upper border-gray/20  ml-4 flex flex-col  justify-around space-y-6 border-b py-2 text-blue-950 md:ml-0 md:flex-row md:space-y-0">
              <h1 className="font-serif text-2xl">{bid.title}</h1>
            </div>
            <div className="upper  border-gray/20 ml-4  flex flex-col justify-around border-b py-6 md:ml-0 md:space-y-3">
              <div className="flex space-x-2 font-serif text-blue-950">
                <p className="font-semibold">Bidding start description :</p>
                {/* <p>6/19/2023</p> */}
                {bid.description}
              </div>
              <div className="flex space-x-2 font-serif text-blue-950">
                <p className="font-semibold">Bidding start date :</p>
                <p>7/2/2023</p>
              </div>
            </div>
            <div className="flex space-x-8 px-2 py-2">
              <div className="flex w-28 space-x-3 rounded-md border px-1.5 py-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="indigo"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
                <p className="font-serif font-normal text-indigo-700">Save</p>
              </div>
              <div>
                <Link to={`/payment/${bid.id}`}>
                  <button className="rounded-lg bg-green-300 p-2 font-serif font-normal">
                    Bidding Open
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))
      )}
    </section>
  );
}

export default Bid;
