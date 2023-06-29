import React, { useState } from "react";
import moment from "moment";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Button } from "@mui/material";
import "./Appointment.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Appointmentservices = () => {
  const { pathname } = useLocation();
  const apptID = pathname.split("/")[2];
  const notify = (messsage) => toast(messsage);
  const navigate = useNavigate();

  const [app_date, setSelectedDate] = useState(null);
  const [bookedDates, setBookedDates] = useState([]);

  const isWeekend = (date) => {
    return date.day() === 0 || date.day() === 6;
  };

  const isDateDisabled = (date) => {
    const currentDate = moment();
    const isBeforeToday = moment(date).isBefore(currentDate, "day");
    const isWeekendDay = isWeekend(moment(date));
    // const isFullyBookedDay = isFullyBooked(moment(date));
    return isBeforeToday || isWeekendDay;
  };

  // const isFullyBooked = (date) => {
  //   const selectedDayBookings = bookedDates.filter((bookingDate) =>
  //     moment(bookingDate).isSame(date, "day")
  //   );
  //   return selectedDayBookings.length >= 100;
  // };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // const handleBooking = async (e) => {
  //   try {
  //     await axios
  //       .post(
  //         `http://localhost:8000/api/app/schedule_app/${apptID}`,
  //         JSON.stringify({ app_date: app_date }),
  //         {
  //           headers: { "Content-Type": "application/json" },
  //           withCredentials: true,
  //         }
  //       )
  //       .then((res) => {
  //         notify.success("You have succefully");
  //         navigate("/services");
  //         console.log(res);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         notify("You have not scheduled ");
  //       });
  //   } catch (err) {
  //     console.log(err);
  //     notify("You have not scheduled ");
  //     // console.log("someerrrrrr");
  //   }
  // };
  const handleBooking = async (e) => {
    e.preventDefault();

    if (!apptID || !app_date) {
      notify("Invalid booking data");
      return;
    }
    console.log(app_date);

    const date = new Date(app_date);
    // const formattedDate = date
    //   .toLocaleDateString()
    //   .split("/")
    //   .reverse()
    //   .join("-");
    const formattedDate = date.toISOString().split("T")[0];
    console.log(formattedDate);
    try {
      const token = localStorage.getItem("tokens"); // Retrieve token from localStorage
      const response = await axios.post(
        `http://localhost:8000/api/app/schedule_app/${apptID}`,
        { app_date: formattedDate, apptID },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include token in the Authorization header
          },
        }
      );

      if (response.status === 200) {
        if (response?.data[0] === "appointment date is full!!!") {
          notify("Appointment date is full !!!");
          return;
        }
        notify("You have successfully scheduled your appointment");
        navigate("/services");
        console.log(response.data);
      } else {
        notify("Failed to schedule appointment");
        console.log(response);
      }
    } catch (err) {
      console.log(err);
      notify("Failed to schedule appointment");
    }
  };

  const currentMonth = moment().month();
  const maxDate = moment().add(4, "months").endOf("month").toDate();

  return (
    <div className="appointment-container">
      <h2 className="text-2xl font-bold">Appointment Booking</h2>
      <div className="calendar-container">
        <Calendar
          value={app_date}
          onChange={handleDateChange}
          tileDisabled={({ date }) => isDateDisabled(moment(date))}
          minDetail="year"
          maxDetail="month"
          minDate={moment().startOf("month").toDate()}
          maxDate={maxDate} // Set the maximum selectable date to the end of the next 3 months
        />
      </div>
      <div className="button-container">
        <Button
          variant="contained"
          color="primary"
          onClick={handleBooking}
          disabled={!app_date || isDateDisabled(app_date)}
        >
          Book Appointment
        </Button>
      </div>
    </div>
  );
};

export default Appointmentservices;
