import React from 'react'
import Paper from '@mui/material/Paper';
import { eachDayOfInterval, endOfYear, format, isAfter, isBefore, isSameDay, parseISO, startOfToday, startOfYear } from 'date-fns';


const AllDays = ({events}) => {

    let date = startOfToday();
    let yearStart = startOfYear(date);
    let yearEnd = endOfYear(date);

    let allDays = eachDayOfInterval({
        start: yearStart,
        end: yearEnd
    });


    

  return (
    <div className='all-days'>
        AllDays

        <Paper
            elevation={10}
            sx = {{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            overflowY: "scroll",
            scrollbarWidth: "none",
            
            
            }}
        >
            paper

            <div className='on-days-paper'>
                OnPaper

                <div className='all-days-list'>
                    List

                    {allDays.map((day) => {
                        return(
                            
                                <div key = {day} 
                                    className="day">
                                    day

                                    <div className={"date " +
                                        (format(day,"EEE ")) +
                                        (isAfter(day,new Date()) ? "after-today " : "upto-today ")
                                    }>

                                        {format(day,"dd MMM - EEE")}
                                    </div>
                                    
                                    <div className="event-link">
                                        events-link

                                        {events.filter((event) => 
                                            isSameDay(parseISO(event.startDatetime),day)).map((dayEvent) => {

                                            })}

                                    </div>

                                </div>
                        )
                    })}



                </div>
            </div>
        </Paper>
    </div>
  )
}

export default AllDays