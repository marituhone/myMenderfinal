// import CardFour from "../../components/CardFour.tsx";
// import CardOne from "../../components/CardOne.tsx";
// import CardThree from "../../components/CardThree.tsx";
// import CardTwo from "../../components/CardTwo.tsx";
// import ChartOne from "../../components/ChartOne.tsx";
// import ChartThree from "../../components/ChartThree.tsx";
// import ChartTwo from "../../components/ChartTwo.tsx";
// import ChatCard from "../../components/ChatCard.tsx";

import { useEffect, useState } from "react";
import CardOne from "../Components/CardOne";
import ChartOne from "../Components/ChartOne";
import ChartThree from "../Components/ChartThree";
import { toast } from "react-toastify";
import axios from "axios";

// import TableOne from "../../components/TableOne.tsx";
// import DefaultLayout from "../../layout/DefaultLayout.tsx";

const UserDashboard = () => {
  const [appointmentService, setAppointmentService] = useState([]);
  const [bid, setBid] = useState([]);

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        const token = localStorage.getItem("tokens");
        const response = await axios.get(
          "http://127.0.0.1:8000/api/app/user_app_list/",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setAppointmentService(response.data);
        console.log(appointmentService);
      } catch (error) {
        toast.error("Error fetching requirement");
        // console.error("Error fetching requirement:", error);
      }
    };

    const fetchBid = async () => {
      try {
        const token = localStorage.getItem("tokens");
        const response = await axios.get(
          "http://127.0.0.1:8000/api/bid/Bidcount/",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setBid(response.data);
        console.log(response.data);
      } catch (error) {}
    };

    fetchBid();
    fetchAppointment();
  }, []);

  const approvedCount = appointmentService.filter(
    (item) => item.ApprovalStatus === "approved"
  ).length;
  const pendingCount = appointmentService.filter(
    (item) => item.ApprovalStatus === "pending"
  ).length;
  const rejectedCount = appointmentService.filter(
    (item) => item.ApprovalStatus === "rejected"
  ).length;
  const totalCount = appointmentService.length;
  const approvalPercentage = ((approvedCount / totalCount) * 100).toFixed(2);

  console.log(approvalPercentage, approvedCount, pendingCount);
  // const approvedBidCount = bid.filter(
  //   (item) => item.ApprovalStatus === "approved"
  // ).length;
  // const pendingBidCount = bid.filter(
  //   (item) => item.ApprovalStatus === "pending"
  // ).length;
  // const rejectedBidCount = bid.filter(
  //   (item) => item.ApprovalStatus === "rejected"
  // ).length;
  // const totalBidCount = bid.length;
  // const approvalBidPercentage = ((approvedBidCount / totalBidCount) * 100).toFixed(2);

  return (
    // <DefaultLayout>
    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
      <div className="2xl:gap-7.5 grid  grid-cols-1 gap-4 md:grid-cols-2  md:gap-6 xl:grid-cols-3">
        <CardOne
          total={totalCount + " Total Appointment"}
          approved={approvedCount + " Approved"}
          pending={pendingCount + " Pending"}
          rejected={rejectedCount + " Rejected"}
          percent={approvalPercentage}
        />
        <CardOne total={bid?.length + " Total Bid"} />
        {/* <CardOne /> */}
      </div>

      {/* <div className="2xl:mt-7.5 2xl:gap-7.5 mt-4 grid grid-cols-6 gap-4 md:mt-6 md:gap-6">
        <ChartOne />
       </div> */}
      <div className="2xl:mt-7.5 2xl:gap-7.5 mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6">
        <ChartThree
          accept={approvedCount}
          pending={pendingCount}
          reject={rejectedCount}
        />
      </div>
    </div>
  );
};

export default UserDashboard;
