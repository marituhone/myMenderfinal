import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const Payment = () => {
  const [isActive, setIsActive] = useState(false);
  const { id } = useParams();

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const buttonStyle = {
    backgroundColor: isActive ? "white" : "blue",
    color: isActive ? "blue" : "white",
    padding: "10px 20px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div className="flex justify-center py-8">
      <div className="flex w-full rounded-lg bg-gray-200 p-4 md:w-2/3 ">
        <div className="w-1/2 p-4 ">
          <h2 className="mb-4 text-2xl font-bold">Pay with</h2>
          <div className="flex flex-col  space-y-12">
            <button
              style={buttonStyle}
              onClick={handleClick}
              className="flex items-center space-x-2 border-b  border-white pb-2"
            >
              <img
                src="https://www.rocketremit.com/wp-content/uploads/2017/10/TeleBirr-Logo-e1674188756476.png"
                alt="Telebirr"
                className="h-6 w-6"
              />
              <span className="font-semibold">Telebirr</span>
            </button>
            <button className="flex items-center space-x-2 border-b border-white pb-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Awash_Bank_Final_logo.jpg/800px-Awash_Bank_Final_logo.jpg?20210922052149"
                alt="Awash"
                className="h-6 w-6"
              />
              <span className="font-semibold">Awash</span>
            </button>
            <button className="flex items-center space-x-2 border-b border-white pb-2">
              <img
                src="https://hellocashonline.files.wordpress.com/2020/09/cropped-hellocash-png-logo.png?w=200"
                alt="Hello Cash"
                className="h-6 w-6"
              />
              <span className="font-semibold">Hello Cash</span>
            </button>
          </div>
          <div className="ml-52 mt-64">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-1/2 rounded-lg bg-white p-4 shadow-md">
          <div className="chapa-logo">
            {/* <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 167 63" style="enable-background:new 0 0 167 63;" xml:space="preserve">
                                <path class="st0" d="M11.8,26.2h23.5l0,0l0,0c0,3.6-2.9,6.5-6.5,6.5c0,0,0,0,0,0h-17c-1.8,0-3.3-1.5-3.3-3.3l0,0l0,0
                                C8.6,27.7,10,26.2,11.8,26.2L11.8,26.2L11.8,26.2z"></path>
                                <path class="st0" d="M35.1,17.6l-4.7,6.5h6.2c3.6,0,6.5-2.9,6.5-6.5c0,0,0,0,0,0H35.1z"></path>
                                <path class="st0" d="M22.4,24l4.6-6.4H11.9C16.3,17.6,20.4,20.1,22.4,24z"></path>
                                <path class="st2" d="M22.4,24.1l0-0.1l-0.1,0.1H22.4z"></path>
                                <path class="st2" d="M27.2,17.4L27,17.6L22.4,24l0,0.1h-0.1l-1.5,2.1l-4.9,6.7c-1.9,2.2-5.3,2.5-7.5,0.6S5.9,28.2,7.8,26
                                c1-1.1,2.4-1.8,3.9-1.9h10.7l0.1-0.1c-2-3.9-6.1-6.4-10.5-6.4l0,0h-0.7C4.6,18-0.4,23.6,0,30.1s6,11.5,12.5,11.1
                                c3.4-0.2,6.6-1.9,8.6-4.5l0.4-0.6l0,0l7.2-9.9l1.5-2.1l4.7-6.5l1.2-1.6C33.4,13.9,29.3,14.5,27.2,17.4z"></path>
                                <path class="st2" d="M81.3,21.5v2.4c0.6-0.6,1.2-1,2-1.3c0.8-0.3,1.7-0.5,2.5-0.5c4.6,0,6.9,2.7,6.9,8.1v11l0,0
                                c-3.1,0-5.7-2.6-5.7-5.7v-4.9c0.1-0.9-0.2-1.8-0.8-2.5c-0.6-0.6-1.3-0.9-2.1-0.8c-0.8,0-1.5,0.3-2.1,0.8c-0.6,0.7-0.8,1.6-0.8,2.5
                                v10.6l0,0c-3.2,0-5.7-2.5-5.7-5.7c0,0,0,0,0,0V15.8l0,0C78.7,15.7,81.3,18.3,81.3,21.5C81.3,21.5,81.3,21.5,81.3,21.5z"></path>
                                <path class="st2" d="M116.1,31.9c0-1.8,0.5-3.5,1.5-4.9c1-1.5,2.3-2.7,3.9-3.5c2.8-1.5,6.2-1.7,9.2-0.6c1.3,0.5,2.4,1.2,3.4,2.1
                                c1,0.9,1.8,2,2.3,3.1c0.6,1.2,0.8,2.6,0.8,3.9c0,1.3-0.3,2.7-0.9,3.9c-0.5,1.2-1.3,2.3-2.3,3.1c-1,0.9-2.1,1.6-3.4,2.1
                                c-2.6,0.9-5.4,0.9-7.9,0l-0.4-0.2l-0.4-0.2v7.6l0,0c-3.2,0-5.7-2.6-5.7-5.7L116.1,31.9z M121.8,32c0,0.8,0.2,1.6,0.7,2.3
                                c0.4,0.7,1,1.3,1.8,1.7c0.7,0.4,1.5,0.6,2.3,0.6c0.8,0,1.7-0.2,2.4-0.6c0.7-0.4,1.3-1,1.8-1.7c0.4-0.7,0.7-1.5,0.7-2.3
                                c0-1.3-0.5-2.5-1.4-3.3c-1.9-1.8-4.9-1.8-6.7,0C122.4,29.6,121.8,30.7,121.8,32L121.8,32z"></path>
                                <path class="st2" d="M148.6,22.1c-5.4,0-9.8,4.4-9.8,9.8s4.4,9.8,9.8,9.8c2.1,0,4.1-0.7,5.8-1.9c1,1.2,2.4,1.9,4,1.9v-9.8
                                C158.4,26.5,154,22.1,148.6,22.1z M148.6,36.6c-2.6,0-4.6-2.1-4.6-4.7c0-2.6,2.1-4.6,4.7-4.6c2.6,0,4.6,2.1,4.6,4.7c0,0,0,0,0,0
                                C153.2,34.5,151.1,36.6,148.6,36.6C148.6,36.6,148.6,36.6,148.6,36.6z"></path>
                                <path class="st2" d="M104.4,22.1c-5.4,0-9.8,4.4-9.8,9.8c0,5.4,4.4,9.8,9.8,9.8c2.1,0,4.1-0.7,5.8-1.9c1,1.2,2.4,1.9,4,1.9v-9.8
                                C114.2,26.5,109.8,22.1,104.4,22.1z M104.4,36.6c-2.6,0-4.7-2.1-4.7-4.6s2.1-4.7,4.6-4.7c2.6,0,4.7,2.1,4.7,4.6c0,0,0,0,0,0
                                C109,34.5,107,36.6,104.4,36.6z"></path>
                                <path class="st2" d="M64.7,35.8c-3.9,0-7-3.2-7-7c0-3.9,3.2-7,7-7c1.9,0,3.6,0.8,4.9,2.1l4.1-4c-4.9-5-13-5.1-18-0.2s-5.1,13-0.2,18
                                s13,5.1,18,0.2c0,0,0.1-0.1,0.1-0.1l-4-4C68.4,35.1,66.6,35.8,64.7,35.8z"></path>
                            </svg> */}
            <img
              src="https://pbs.twimg.com/profile_images/1565219509841326080/m3POypTs_400x400.jpg"
              className="h-56 w-full"
            ></img>
          </div>
          <h2 className="mb-4 text-2xl font-bold">Amount to Pay</h2>
          <h2 className="mb-4 text-3xl font-bold">500 Birr</h2>
          <div className="mb-4">
            <p className="font-serif">Pay to get detailed document</p>
          </div>
          <div>
            <label className="mb-2 block font-serif">Phone Number</label>
            <input
              type="text"
              className="w-full rounded border border-gray-300 px-3 py-2"
            />
          </div>
          <Link to={`/bidform/${id}`}>
            <button className="mt-4 w-full rounded-md bg-indigo-500 p-2 font-serif font-semibold">
              Pay now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Payment;
