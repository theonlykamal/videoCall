import React , {useState} from 'react';
import Paper from '@mui/material/Paper';
import Calender from '../components/calender';

import { parseISO } from 'date-fns';

const CalenderPage = ({daySelect,onSelect,todayDate,onToday,events}) => {
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
      <Calender daySelect = {daySelect} 
                      todayDate = {todayDate}  
                      onSelect ={(day) => {onSelect(day)}}
                      onToday = {(date) => {onToday(date)}}
                      events = {events}/>  
      
    </Paper>
   
  </div>
  )
};

export default CalenderPage

