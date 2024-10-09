import React from 'react'

import NotesApp from './notesapp/notesApp' 
import Login from './chatapp/Componenets/Login'
import {BrowserRouter, Routes, Route, NavLink,Outlet} from 'react-router-dom'
import ChatArea from './chatapp/Componenets/ChatArea'
import Users from './chatapp/Componenets/Users'
import Groups from './chatapp/Componenets/Groups'
import CreateGroups from './chatapp/Componenets/CreateGroups'
import Welcome from './chatapp/Componenets/Welcome'
import MainContainer from './chatapp/Componenets/MainContainer'




const Everything = () => {
  return (
    
    <div>
      
    <div className = 'nav-bar'>
       
        
            
            <NavLink className = "link" exact to ='profile'>🪴</NavLink>
            <NavLink className = "link" exact to = 'app'>chat</NavLink>
            <NavLink className = "link" exact to ='notes'>notes</NavLink>
            
          
    </div>

    {/* {<div className = "open-msg-pad">
    <p className = "open-msg">Open an app</p>
    </div> } */}
    
     
    <Outlet /> 
    </div>
    
    
  )
}

export default Everything