import React from 'react';
import Paper from '@mui/material/Paper';
import Calender from '../components/calender';
import { events } from '../assets/fakeEvents';
import { parseISO } from 'date-fns';

const CalenderPage = () => {
  console.log(parseISO(events[0].startDatetime));
  
  
  return (

    
	<div className='calender-page'>
    <Paper 
      elevation={10}
      sx = {{
        flex: 1,
      }}
      
      className='calender-page-paper'
    >
      <Calender events = {events}/>  
      
    </Paper>
   
  </div>
  )
};

export default CalenderPage

