import React, { useState } from 'react';
import { allEvents } from '../assets/fakeEvents';
import CalenderPage from './CalenderPage';
import EventsPage from './EventsPage';

const MainPage = () => {

  let today = new Date();
  let [todayDate,setTodayDate] = useState(today);
  let [selectedDay,setSelectedDay] = useState(today);

  return (
	<div className='main-page'>
        <CalenderPage daySelect = {selectedDay} 
                      todayDate = {todayDate}  
                      onSelect ={(day) => {setSelectedDay(day)}}
                      onToday = {(date) => {setTodayDate(date)}}
                      events = {allEvents} />
        <EventsPage daySelect = {selectedDay} events = {allEvents} />
        
	</div>
  )
};

export default MainPage

