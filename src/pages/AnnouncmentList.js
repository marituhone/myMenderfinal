import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import { toast } from "react-toastify";
import axios from "axios";
import NoData from "../Components/common/NoData";

function AnnouncmentList() {
  const [announcement, setAnnouncement] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchReq = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/announce/announce_list/",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(announcement);
        setAnnouncement(response.data);
        // setAnnouncement([{title:'asdasdas', description:'asdaSD SDF ASDF ASDF SADF S DF ASDF AS DF SADF SAD F SADF SDF AS F SAF SA DF SADF SAD FS DF asdaSD SDF ASDF ASDF SADF S DF ASDF AS DF SADF SAD F SADF SDF AS F SAF SA DF SADF SAD FS DF asdaSD SDF ASDF ASDF SADF S DF ASDF AS DF SADF SAD F SADF SDF AS F SAF SA DF SADF SAD FS DF '}]);
      } catch (error) {
        setAnnouncement([
          {
            title: "ere",
            description:
              "asdsndflasdnfa lsnfdsdfnkasjf nksadfaksjef hawejfnsdmwei jrsdmvlsajdf oiwejfs.cnal'a sjfwaoe;fjsladnasoie jfsdcmlasdkjoiawe jlamdcaowiejf sagfawerwaer",
          },
        ]);
        toast.error("Error fetching Announcement");
        console.error("Error fetching Announcement:", error);
      }
    };

    fetchReq();
  }, []);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <section>
      <div className="all py-10">
        <div className="textpart">
          <h2 className="mb-10 text-center text-3xl font-bold">
            Announcements
          </h2>
        </div>
        <div className="flex w-full flex-col justify-center space-y-6  md:flex-row  md:space-x-10 md:space-y-0">
          {announcement.length === 0 ? (
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
                <div>No announcements available</div>
              </div>
            </div>
          ) : (
            announcement.map((item, id) => {
              const { title, description } = item;
              return (
                <div
                  key={id}
                  style={{
                    width: "90%",
                  }}
                  className="items-center justify-center border  border-x-2 px-4 py-5 leading-7 text-gray-700 shadow-2xl transition delay-150 duration-300 ease-in-out  "
                >
                  <h3 className="py-2 text-center font-bold uppercase">
                    {title}
                  </h3>
                  <p className="font-serif">
                    {showMore ? description : `${description.slice(0, 80)}...`}
                  </p>
                  <button
                    className="mt-2 rounded-xl bg-indigo-600 p-2 text-xs font-semibold text-white"
                    onClick={handleToggle}
                  >
                    {showMore ? "See Less" : "See More"}
                  </button>
                </div>
              );
            })
          )}
        </div>
        <Banner />
      </div>
    </section>
    // <section>
    //   <div className="all py-10">
    //     <div className="textpart">
    //       <h2 className="mb-10 text-center text-3xl font-bold">Announcments</h2>
    //     </div>
    //     <div className="ml-8  flex flex-col justify-between space-y-6  md:flex-row  md:space-x-10 md:space-y-0">
    //       <div className="items-center justify-center border  border-x-2 px-4 py-5 leading-7 text-gray-700 shadow-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
    //         <h3 className="py-2 text-center font-bold uppercase ">
    //           Announcement
    //         </h3>
    //         <p className="font-serif">
    //           It is a long established fact that a reader will be distracted by
    //           the readable content of a page when looking at its layout. The
    //           point of using Lorem Ipsum is that it has a more-or-less normal
    //           distribution of letters, as opposed to using 'Content here,
    //           content here', making it look like readable English
    //         </p>
    //         <button className="mt-2 rounded-xl bg-indigo-600 p-2 text-xs font-semibold text-white ">
    //           See More
    //         </button>
    //       </div>
    //       <div className="items-center justify-center border  border-x-2 px-4 py-5 leading-7 text-gray-700 shadow-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
    //         <h3 className="py-2 text-center font-bold uppercase">Bid</h3>

    //         <p className="font-serif">
    //           It is a long established fact that a reader will be distracted by
    //           the readable content of a page when looking at its layout. The
    //           point of using Lorem Ipsum is that it has a more-or-less normal
    //           distribution of letters, as opposed to using 'Content here,
    //           content here', making it look like readable English
    //         </p>
    //         <button className="mt-2 rounded-xl bg-indigo-600 p-2 text-xs font-semibold text-white ">
    //           See More
    //         </button>
    //       </div>
    //       <div className="items-center justify-center  border  border-x-2 px-4 py-5 leading-7 text-gray-700 shadow-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
    //         <h3 className="py-2 text-center font-bold uppercase ">
    //           Appointment
    //         </h3>

    //         <p className="font-serif">
    //           It is a long established fact that a reader will be distracted by
    //           the readable content of a page when looking at its layout. The
    //           point of using Lorem Ipsum is that it has a more-or-less normal
    //           distribution of letters, as opposed to using 'Content here,
    //           content here', making it look like readable English
    //         </p>
    //         <button className="mt-2 rounded-xl bg-indigo-600 p-2 text-xs font-semibold text-white ">
    //           See More
    //         </button>
    //       </div>
    //       <div className="items-center justify-center border    border-x-2 px-4 py-5 leading-7 text-gray-700 shadow-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
    //         <h3 className="py-2 text-center font-bold uppercase ">
    //           Notification
    //         </h3>

    //         <p className="font-serif">
    //           It is a long established fact that a reader will be distracted by
    //           the readable content of a page when looking at its layout. The
    //           point of using Lorem Ipsum is that it has a more-or-less normal
    //           distribution of letters, as opposed to using 'Content here,
    //           content here', making it look like readable English
    //         </p>
    //         <button className="mt-2 rounded-xl bg-indigo-600 p-2 text-xs font-semibold text-white ">
    //           See More
    //         </button>
    //       </div>
    //     </div>
    //     <Banner />
    //   </div>
    // </section>
  );
}

export default AnnouncmentList;
