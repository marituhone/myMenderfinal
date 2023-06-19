import React, { useState } from 'react';
import moment from 'moment';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Button } from '@mui/material';
import './Appointment.css'; 

const AppointmentId = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [bookedDates, setBookedDates] = useState([]);

  const isWeekend = (date) => {
    return date.day() === 0 || date.day() === 6; 
  };

  const isDateDisabled = (date) => {
    const currentDate = moment();
    const isBeforeToday = moment(date).isBefore(currentDate, 'day');
    const isWeekendDay = isWeekend(moment(date));
    const isFullyBookedDay = isFullyBooked(moment(date));
    return isBeforeToday || isWeekendDay || isFullyBookedDay;
  };
  
  const isFullyBooked = (date) => {
    const selectedDayBookings = bookedDates.filter((bookingDate) =>
      moment(bookingDate).isSame(date, 'day')
    );
    return selectedDayBookings.length >= 100;
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleBooking = () => {
    if (selectedDate) {
      setBookedDates((prevBookedDates) => [...prevBookedDates, selectedDate]);
      setSelectedDate(null);
    }
  };

  const currentMonth = moment().month();
  const maxDate = moment().add(4, 'months').endOf('month').toDate();

  return (
    <div className="appointment-container">
      <h2 className="text-2xl font-bold">Appointment Booking</h2>
      <div className="calendar-container">
        <Calendar
          value={selectedDate}
          onChange={handleDateChange}
          tileDisabled={({ date }) => isDateDisabled(moment(date))}
          minDetail="year" 
          maxDetail="month" 
          minDate={moment().startOf('month').toDate()} 
          maxDate={maxDate} // Set the maximum selectable date to the end of the next 3 months
        />
      </div>
      <div className="button-container">
        <Button
          variant="contained"
          color="primary"
          onClick={handleBooking}
          disabled={!selectedDate || isDateDisabled(selectedDate)}
        >
          Book Appointment
        </Button>
      </div>
    </div>
  );
};

export default AppointmentId;
