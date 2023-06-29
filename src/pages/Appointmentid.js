import React, { useState } from "react";
import moment from "moment";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Button } from "@mui/material";
import "./Appointment.css";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AppointmentId = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [bookedDates, setBookedDates] = useState([]);
  const [fullName, setFullName] = useState("");
  const [phoneNo, setPhoneNo] = useState();
  const navigate = useNavigate();

  const isWeekend = (date) => {
    return date.day() === 0 || date.day() === 6;
  };

  const isDateDisabled = (date) => {
    const currentDate = moment();
    const isBeforeToday = moment(date).isBefore(currentDate, "day");
    const isWeekendDay = isWeekend(moment(date));
    const isFullyBookedDay = isFullyBooked(moment(date));
    return isBeforeToday || isWeekendDay || isFullyBookedDay;
  };

  const isFullyBooked = (date) => {
    const selectedDayBookings = bookedDates.filter((bookingDate) =>
      moment(bookingDate).isSame(date, "day")
    );
    return selectedDayBookings.length >= 100;
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      if (selectedDate && fullName && phoneNo) {
        const date = new Date(selectedDate);
        const formattedDate = date.toISOString().split("T")[0];

        const response = await axios.post(
          `http://127.0.0.1:8000/api/app/schedule_app_ID/`,
          { app_date: formattedDate, Full_name: fullName, phone: phoneNo },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.status === 200) {
          if (response?.data[0] === "appointment date is full!!!") {
            toast.warning("Appointment date is full !!!");
            return;
          }
          toast.success("You have successfully scheduled your appointment");
          navigate("/");
          console.log(response.data);
        } else {
          toast.error("Failed to schedule appointment");
          console.log(response);
          return;
        }
        setSelectedDate(null);
        setFullName("");
        setPhoneNo(0);
      } else {
        toast.error("Enter all the fields");
      }
    } catch (err) {
      toast.error("Failed to schedule the appointment");
    }
  };

  const currentMonth = moment().month();
  const maxDate = moment().add(4, "months").endOf("month").toDate(); 

  return (
    <div className="appointment-container">
      <h2 className="text-2xl font-bold">Appointment Booking</h2>
      <div
        style={{
          alignItems: "center",
          gap: "10px",
        }}
        className=" button-container"
      >
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          placeholder="Enter full name"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div
        style={{
          alignItems: "center",
          gap: "10px",
        }}
        className=" button-container"
      >
        <label htmlFor="fullName">Phone:</label>
        <input
          type="number"
          placeholder="Enter Phone number"
          id="phoneNo"
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
          className="rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="calendar-container">
        <Calendar
          value={selectedDate}
          onChange={handleDateChange}
          tileDisabled={({ date }) => isDateDisabled(moment(date))}
          minDetail="year"
          maxDetail="month"
          minDate={moment().startOf("month").toDate()}
          maxDate={maxDate} // Set the maximum selectable date to the end of the next 3 months
        />
      </div>
      <div
        style={{
          marginBottom: "10px",
        }}
        className="button-container"
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleBooking}
          disabled={!selectedDate || !fullName || isDateDisabled(selectedDate)}
        >
          Book Appointment
        </Button>
      </div>
    </div> 
  );
};

export default AppointmentId;
