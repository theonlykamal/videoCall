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
  let nextId = events.length+1;

  function addEventHandler( nameEve ) {
    if (nameEve.length > 0) {
      const endTime = addHours(selectedDay,1).toISOString()
      const startTime = selectedDay.toISOString()
      console.log(startTime);
      
        setEvents([
          ...events,
          { 
            id: nextId, 
            name: nameEve ,
            imageUrl: "",
            startDatetime: startTime,
            endDatetime: endTime,
          }
        ]);
      
    }

    
  }

  function doneEventHandler (id) {
   const newEvents =  events.map((event) => {
    var temp = Object.assign({},event)
      if (temp.id == id) {
        temp.done = !temp.done
        return temp;
      } else {
        return temp
      }
    })
    setEvents(newEvents)
  }


  return (
	<div className='main-page'>
        <CalenderPage daySelect   =  {selectedDay} 
                      todayDate   =  {todayDate}  
                      onSelect    =  {setSelectedDay}
                      onToday     =  {setTodayDate}
                      events      =  {events} 
                      onAdd       =  {addEventHandler}
                      
                      />
        <EventsPage onDone = {doneEventHandler} 
                    daySelect = {selectedDay} 
                    events = {events} />
        
	</div>
  )
};

export default MainPage

