import React, { useState } from 'react';
import AllDays from '../components/AllDays';
import AllEvents from '../components/AllEvents';
import { events } from '../assets/fakeEvents';

const EventsPage = () => {

	const [allEvents, setallEvents] = useState(events)

  return (
	<div className='events-page'>

		<AllDays events = {allEvents} />
		<AllEvents  events = {allEvents} />

	</div>
  )
};

export default EventsPage

