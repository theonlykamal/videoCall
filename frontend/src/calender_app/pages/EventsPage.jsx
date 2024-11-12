import React from 'react';
import AllDays from '../components/AllDays';
import AllEvents from '../components/AllEvents';

const EventsPage = () => {
  return (
	<div className='events-page'>

		<AllDays />
		<AllEvents />

	</div>
  )
};

export default EventsPage

