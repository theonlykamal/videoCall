import React from 'react'
import PApp from './chatapp/chatApp'
import NotesApp from './notesapp/notesApp' 

import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'

const Main = () => {
  return (
    <BrowserRouter>
    
    <div className = 'nav-bar'>
       
        
            <NavLink className = "link" exact to = '/chat'>chat</NavLink>
            <NavLink className = "link" exact to ='/notes'>notes</NavLink>
            
        
    </div>
    <Routes>
            <Route index element = {<NotesApp />} />
            <Route exact path = '/notes' element = {<NotesApp />} />
            <Route exact path = '/chat' element = {<PApp />} />
        </Routes>
    </BrowserRouter> 
  )
}

export default Main