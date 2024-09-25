import React from 'react'
import Chat from './chatapp/Chat'
import NotesApp from './notesapp/notesApp' 
import Login from './chatapp/Componenets/Login'
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
import ChatArea from './chatapp/Componenets/ChatArea'
import Users from './chatapp/Componenets/Users'
import Groups from './chatapp/Componenets/Groups'
import CreateGroups from './chatapp/Componenets/CreateGroups'
import Welcome from './chatapp/Componenets/Welcome'
import MainContainer from './chatapp/Componenets/MainContainer'
import PApp from './chatapp/chatApp'
import Everything from './Everything'
import Empty  from "./Empty";


const Main = () => {
  return (
    
    <BrowserRouter>
      <Routes>
            <Route exact path = '/' element = {<Login />} />
            <Route exact path = 'et' element = {<Everything />}>
                <Route exact path = 'notes' element = {<NotesApp />} />
                <Route exact path = 'profile' element = {<Empty />} />
                <Route exact path = 'app' element = {<MainContainer />}>
                    <Route path = 'welcome' element = {<Welcome />} />
                    <Route path = 'chat' element = {<ChatArea />} />
                    <Route path = 'users' element = {<Users />} />
                    <Route path = 'groups' element = {<Groups />} />
                    <Route path = 'create-groups' element = {<CreateGroups />} />
                </Route>
            </Route>
    </Routes>

      
    </BrowserRouter> 
  )
}

export default Main