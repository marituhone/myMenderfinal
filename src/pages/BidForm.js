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
        <div className="flex flex-col space-y-6 min-h-screen w-2/3 bg-gray-100 pt-24">
        Introduction

    Background and Context:
        Provide a brief overview of the project and the purpose of the bid document.
        Describe the nature of the shop bid, such as the construction, renovation, or expansion of a retail shop.
    Instructions for Bidders:
        Clearly state the instructions that bidders should follow when preparing and submitting their proposals.
        Include information on proposal format, required documents, and submission requirements.

Scope of Work

    Overview of the Shop Project:
        Provide a summary of the shop project, including its purpose, location, and size.
    Detailed Description of Work:
        Describe the specific tasks and activities involved in the shop project, such as construction, interior design, fixtures, and equipment installation.
        Specify any requirements related to permits, licenses, or compliance with building codes and regulations.
    Deliverables and Milestones:
        Clearly outline the deliverables expected from the bidder, such as completed construction, installed fixtures, and operational equipment.
        Define milestones or deadlines for significant project stages or completion of specific tasks.
    Acceptance Criteria:
        Specify the criteria that will be used to evaluate and accept the deliverables, such as quality standards, compliance with specifications, and adherence to the proposed design.

Technical Requirements

    Shop Specifications and Design:
        Provide detailed specifications of the shop design, including layout, flooring, lighting, and signage.
    Construction and Materials:
        Describe the construction requirements, materials to be used, and any specific techniques or finishes required.
    Equipment and Fixtures:
        Specify the required equipment and fixtures, such as shelving, display units, cash registers, and security systems.
    Utilities and Services:
        Outline the utility connections needed, such as electricity, water, HVAC systems, and internet connectivity.
    Safety and Accessibility:
        Highlight any safety and accessibility requirements, including fire safety measures, emergency exits, and compliance with disability access regulations.

Proposal Submission

    Deadline for Submission:
        Clearly state the deadline by which bidders must submit their proposals.
    Contact Information for Proposal Submission:
        Provide the contact details (email, mailing address, etc.) where bidders should send their proposals.
    Required Documents and Format:
        Specify the documents that bidders need to include in their proposals, such as a cover letter, cost estimates, shop design plans, and references.
        Outline the preferred format (e.g., PDF, Word) for submitting the documents.
    Evaluation Criteria:
        Briefly describe the criteria that will be used to evaluate the proposals, such as experience, cost, design creativity, and timeline.

Bid Evaluation and Selection Process

    Evaluation Methodology:
        Explain the evaluation process, including who will review the proposals and how the evaluation will be conducted.
    Criteria for Evaluating Bids:
        Specify the factors that will be considered during the evaluation, such as relevant experience, price competitiveness, quality, and adherence to the project requirements.
    Selection Process and Timeline:
        Provide an overview of the selection process, including the timeline for review, shortlisting, and final decision.
        <button className="bg-green-300 w-1/5 rounded-xl p-1">
          Download
        </button>
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
