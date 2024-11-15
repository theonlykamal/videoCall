import React, { useState } from 'react';
import { allEvents } from '../assets/fakeEvents';
import CalenderPage from './CalenderPage';
import EventsPage from './EventsPage';
import { addHours } from 'date-fns';

const MainPage = () => {

  
  let today = new Date();
  let [todayDate,setTodayDate] = useState(today);
  let [selectedDay,setSelectedDay] = useState(today);
  
  let [events,setEvents] = useState(allEvents);
  let nextId = events.length;

  function addEvent( nameEve ) {
    const endTime = addHours(selectedDay,1).toISOString()
    const startTime = selectedDay.toISOString()
    console.log(startTime);
    
      setEvents([
        ...events,
        { 
          id: nextId++, 
          name: nameEve ,
          imageUrl: "",
          startDatetime: startTime,
          endDatetime: endTime,
        }
      ]);
    
  }


  return (
	<div className='main-page'>
        <CalenderPage daySelect = {selectedDay} 
                      todayDate = {todayDate}  
                      onSelect ={setSelectedDay}
                      onToday = {setTodayDate}
                      events = {events} 
                      onAdd = {addEvent}
                      />
        <EventsPage daySelect = {selectedDay} events = {events} />
        
	</div>
  )
};

export default MainPage

