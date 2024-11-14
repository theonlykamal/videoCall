import React, { useState } from 'react'
import { addDays, addMonths, eachDayOfInterval, endOfMonth, format, getDay, isSameDay, isSameMonth, isToday, parse, parseISO, startOfMonth, subDays, subMonths } from "date-fns";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { IconButton } from '@mui/material';
import DayEvents from './DayEvents';
import TodayTwoToneIcon from '@mui/icons-material/TodayTwoTone';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';



const WEEKDAYS = ["Sun", "Mon", "Tue","Wed","Thu","Fri", "Sat" ];


const Calender = ({daySelect,onSelect,todayDate,onToday,events}) => {



    
    const [monthday, setMonthDay] = useState(todayDate)
    
    

    let currentDate = monthday;

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
            <div className='calender-header' style={{
                    marginTop: 0,
                    marginBlockEnd: "20px"
                    
                }}>
                <div>
                <h2  style={{
                    margin: 0
                }}>
                    {format(currentDate,"MMMM yyyy")}
                </h2>
                </div>
                

                <div className="header-icons">
                    <div>
                        <IconButton sx={{ backgroundColor: "#F9F9F9", color: "#EF4444",width: "40px",height:"40px",
                            '&:hover': {
                                color: '#F9F9F9',
                                backgroundColor: '#EF4444',
                            },}}
                            onClick={() => {
                                setMonthDay(todayDate);
                                onSelect(todayDate);
                            }}>
                            <TodayTwoToneIcon color='#F9F8F8' sx={{
                    
                                borderRadius:"9999px",
                            }}/>
                        </IconButton>
                    </div>
                    <div className='item'>
                    <IconButton sx={{ backgroundColor: "#F9F9F9", color: "#EF4444",width: "40px",height:"40px",
                            '&:hover': {
                                color: '#F9F9F9',
                                backgroundColor: '#EF4444',
                            },}}
                            onClick={() => {
                    
                            }}>
                            <AddCircleOutlineTwoToneIcon color='#F9F8F8' sx={{
                    
                                borderRadius:"9999px",
                            }}/>
                        </IconButton>
                    </div>
                    <div>
                        <IconButton onClick={() => {setMonthDay(subMonths(monthday,1))}} >
                            <ArrowLeftIcon />
                        </IconButton>
                        <IconButton onClick={() => {setMonthDay(addMonths(monthday,1))}} >
                            <ArrowRightIcon />
                        </IconButton>
                    </div>
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
                                    (isSameMonth(day,monthday) ? "" : " surround") +
                                    (isSameDay(day,daySelect) ? " selected" : "") +
                                    (isToday(day) ? " today" : "") +
                                    ((isToday(day) && isSameDay(day,daySelect)) ? " sel-today" : "")
                                }
                                
                                onClick={() => {onSelect(day)}}

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

                <DayEvents day ={daySelect} events={events} />

            </div>
    </div>
    
  )
}

export default Calender