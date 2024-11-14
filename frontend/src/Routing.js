import React from 'react'
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'

import Login from './chatapp/Componenets/Login'

import ChatArea from './chatapp/Componenets/ChatArea'
import Users from './chatapp/Componenets/Users'
import Groups from './chatapp/Componenets/Groups'
import CreateGroups from './chatapp/Componenets/CreateGroups'
import Welcome from './chatapp/Componenets/Welcome'


import MainContainer from './chatapp/Componenets/MainContainer'
import NotesApp from './notesapp/notesApp' 
import CalenderApp from './calender_app/CalenderApp'
import VideoChatApp from './videochat_app/VideoChatApp'

import Everything from './Everything'
import Empty  from "./Empty";
import { useDispatch } from "react-redux";




const Main = () => {
  const dispatch = useDispatch();

 
 
  return (
    
    <BrowserRouter>
      <Routes>
            <Route exact path = '/' element = {<Login />} />
            <Route exact path = 'et' element = {<Everything />}>
                <Route exact path = 'video' element = {<VideoChatApp />} />
                <Route exact path = 'notes' element = {<NotesApp />} />
                <Route exact path = 'profile' element = {<Empty />} />
                <Route exact path = 'app' element = {<MainContainer />}>
                    <Route path = 'welcome' element = {<Welcome />} />
                    <Route path = 'chat/:_id' element = {<ChatArea />} />
                    <Route path = 'users' element = {<Users />} />
                    <Route path = 'groups' element = {<Groups />} />
                    <Route path = 'create-groups' element = {<CreateGroups />} />
                </Route>
                <Route exact path = 'calender' element = {<CalenderApp />} />
                
            </Route>
    </Routes>

      
    </BrowserRouter> 
  )
}

export default Main