import React, { useState } from 'react'
import { addDays, addMonths, eachDayOfInterval, endOfMonth, format, getDay, isSameDay, isSameMonth, isToday, parse, parseISO, startOfMonth, subDays, subMonths } from "date-fns";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { IconButton } from '@mui/material';
import DayEvents from './DayEvents';


const WEEKDAYS = ["Sun", "Mon", "Tue","Wed","Thu","Fri", "Sat" ];


const Calender = ({events}) => {
    let today = new Date();

    let [todayDate,setTodayDate] = useState(today);
    let [selectedDay,setSelectedDay] = useState(today);

    let currentDate = todayDate;

    let firstDayOfMonth = startOfMonth(currentDate);
    let lastDayOfMonth = endOfMonth(currentDate);

    let daysInMonth = eachDayOfInterval({
        start: firstDayOfMonth,
        end: lastDayOfMonth
    });

    let startingDayIndex = getDay(firstDayOfMonth);
    let endingDayIndex = getDay(lastDayOfMonth);

    let firstDayOfNextMonth= addDays(lastDayOfMonth,1)
    let daysInNextMonth  = [];
    if (endingDayIndex < 6) {
        daysInNextMonth = eachDayOfInterval({
            start: firstDayOfNextMonth,
            end: addDays(lastDayOfMonth,6-endingDayIndex)
        });
    }
    

    let lastDayOfPrevMonth= subDays(firstDayOfMonth,1);
    let daysInPrevMonth = [];
    if (startingDayIndex > 0) {
        daysInPrevMonth = eachDayOfInterval({
            start: subDays(firstDayOfMonth,startingDayIndex),
            end: lastDayOfPrevMonth
        });
    }

    let calenderMonth = daysInPrevMonth.concat(daysInMonth,daysInNextMonth);

    


  return (

    <div className='cal-page-paper'>
        <div className='calender-container'>
            <div className='calender-header'>
                <div></div>
                <h2 style={{
                    marginTop: 0
                }}>
                    {format(currentDate,"MMMM yyyy")}
                </h2>
                <div>
                    <IconButton onClick={() => {setTodayDate(subMonths(todayDate,1))}} >
                        <ArrowLeftIcon /> 
                    </IconButton> 

                    <IconButton onClick={() => {setTodayDate(addMonths(todayDate,1))}}>
                        <ArrowRightIcon /> 
                    </IconButton> 
                </div>
            </div>
            <div className='calender-grid'>
                {WEEKDAYS.map((day) => {
                    return <div key={day} className='week-days'>{day}</div>
                })}

                {calenderMonth.map((day) => {
                    return (
                        <div>
                            <div 
                                key = {day} 
                                className={"month-days" + 
                                    (isSameMonth(day,todayDate) ? "" : " surround") +
                                    (isSameDay(day,selectedDay) ? " selected" : "") +
                                    (isToday(day) ? " today" : "") +
                                    ((isToday(day) && isSameDay(day,selectedDay)) ? " sel-today" : "")
                                }
                                onClick={() => {setSelectedDay(day)}}

                            >
                                {format(day,"d")}
                            </div>

                            <div className='wrapper-center'>
                                {events.some(event => isSameDay(parseISO(event.startDatetime),day)) && 
                                    <div className='event-day'>
                                        
                                    </div> }
                            </div>
                        </div>
                    )
                })}

                
            </div>

            

        </div>

        <div className='day-events-container'>

                <DayEvents day ={selectedDay} events={events} />

            </div>
    </div>
    
  )
}

export default Calender