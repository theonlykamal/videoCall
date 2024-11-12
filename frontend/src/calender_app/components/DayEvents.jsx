import React from 'react'
import { Paper } from '@mui/material'
import { format, isSameDay, parseISO } from 'date-fns';

const DayEvents = ({ day, events }) => {

    let selectedDayMeetings = events.filter(event =>
        isSameDay(parseISO(event.startDatetime), day)
    );



  return (

    
    <div className='day-events'>
        <Paper elevation={10} sx={{flex: 1}} >
            <div className='on-paper'>
                <div className='header'>
                        <h3 style= {{margin: 0}}>{format(day,"MMMM d, yyyy")}</h3>
                </div>
                <div className='list'>
                    {selectedDayMeetings.map((selectedDayMeeting) => {
                        let startDateTime = parseISO(selectedDayMeeting.startDatetime)
                        let endDateTime = parseISO(selectedDayMeeting.endDatetime)

                        return (
                            <div className='event'>
                                <img src={selectedDayMeeting.imageUrl} className='img'/>
                                    <div className='details'>
                                        <p className='name'>{selectedDayMeeting.name}</p>
                                        <p className='time'>
                                            <time dateTime={selectedDayMeeting.startDatetime}>
                                                {format(startDateTime, 'h:mm a')}
                                            </time>{' '}
                                            -{' '}
                                            <time dateTime={selectedDayMeeting.endDatetime}>
                                                {format(endDateTime, 'h:mm a')}
                                            </time>
                                        </p>
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

export default DayEvents