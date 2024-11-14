import React from 'react'
import Paper from '@mui/material/Paper';
import { eachDayOfInterval, endOfYear, format, isAfter, isBefore, isSameDay, isSameYear, parseISO, startOfToday, startOfYear } from 'date-fns';



const AllDays = ({daySelect, events}) => {

    

    let date = startOfToday();
    if(!isSameYear(daySelect,date)){
        date = daySelect;
    }

    let yearStart = startOfYear(date);
    let yearEnd = endOfYear(date);

    let allDays = eachDayOfInterval({
        start: yearStart,
        end: yearEnd
    });

    window.location.href = "#"+daySelect





    

  return (
    <div className='all-days'>
        {/* AllDays */}

        <div className="all-events-header">
                

              </div>

        <Paper
            elevation={10}
            sx = {{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            overflowY: "scroll",
            scrollbarWidth: "none",
            scrollPaddingBlock: "50px",
            
            
            }}
        >
            {/* paper */}

            <div className='on-days-paper'>
                {/* OnPaper */}

                <div className='all-days-list'>
                    {/* List */}

                    {allDays.map((day) => {
                        return(
                            
                                <div key = {day} 
                                    className={"day " +
                                        (format(day,"EEE ")) +
                                        (isAfter(day,new Date()) ? "after-today " : "upto-today ") +
                                        (isSameDay(day,daySelect) ? "all-day-select " : "")
                                    }
                                    id={day}
                                    
                                >
                                    {/* day */}

                                    <div className="date">

                                        {format(day,"dd MMM yy EEE")}
                                    </div>
                                    
                                    <div className="event-link-list">
                                        {/* events-link-list */}

                                        {events.filter((event) => 
                                            isSameDay(parseISO(event.startDatetime),day)).map((dayEvent) => {
                                                return(
                                                    <div key = {dayEvent.id} className='event-link'>
                                                            {dayEvent.name}
                                                    </div>
                                                )
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