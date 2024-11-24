import React from 'react'
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
import "@fontsource/inter";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

import VideoChatApp from './videochat_app/VideoChatApp'
import Login from './videochat_app/Login';




const Main = () => {
 
  return (
    
    <BrowserRouter>
      <Routes>
        <Route exact path = '/' element = {<Login />} />
        <Route exact path = 'app' element = {<VideoChatApp />} />            
    </Routes>

      
    </BrowserRouter> 
  )
}

export default Main