import React from 'react';
import EventsPage from './EventsPage';
import CalenderPage from './CalenderPage';

const MainPage = () => {
  return (
	<div className='main-page'>
        <CalenderPage />
        <EventsPage />
        
	</div>
  )
};

export default MainPage

