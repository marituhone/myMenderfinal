import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';

function TrtCal() {
   
  return (
    <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
    </div>
  )
}

export default TrtCal