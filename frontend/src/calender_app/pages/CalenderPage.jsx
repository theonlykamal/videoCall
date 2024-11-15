import React , {useState} from 'react';
import Paper from '@mui/material/Paper';
import Calender from '../components/calender';

import { parseISO } from 'date-fns';

const CalenderPage = ({daySelect,onSelect,todayDate,onToday,events,onAdd}) => {

  

  
  
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
                      onSelect ={onSelect}
                      onToday = {onToday}
                      events = {events}
                      onAdd = {onAdd}/>  
      
    </Paper>
   
  </div>
  )
};

export default CalenderPage

