//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import MainContainer from './Componenets/MainContainer';
import {Outlet} from 'react-router-dom'
function chatApp() {
  return (
    <div className='App'> 
    <MainContainer />
    <Outlet />
    </div>
  )
}

export default chatApp;
