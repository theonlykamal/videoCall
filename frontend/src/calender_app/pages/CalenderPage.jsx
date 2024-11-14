import React , {useState} from 'react';
import Paper from '@mui/material/Paper';
import Calender from '../components/calender';
import { events } from '../assets/fakeEvents';
import { parseISO } from 'date-fns';

const CalenderPage = () => {
  console.log(parseISO(events[0].startDatetime));
  
  const [allEvents, setAllEvents] = useState(events);
  
  
  return (

    
	<div className='calender-page'>
    <Paper 
      elevation={10}
      sx = {{
        flex: 1,
      }}
      
      className='calender-page-paper'
    >
      <Calender events = {allEvents}/>  
      
    </Paper>
   
  </div>
  )
};

export default CalenderPage

