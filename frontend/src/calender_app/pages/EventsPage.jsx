import React, { useState } from 'react';
import AllDays from '../components/AllDays';
import AllEvents from '../components/AllEvents';


const EventsPage = ({onDone,daySelect, events}) => {



  return (
	<div className='events-page'>

		<AllDays daySelect = {daySelect} events = {events} />
		<AllEvents onDone = {onDone} daySelect = {daySelect} events = {events} />

	</div>
  )
};

export default EventsPage

