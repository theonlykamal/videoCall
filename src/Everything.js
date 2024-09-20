import React from 'react'
import PApp from './chatapp/chatApp'
import NotesApp from './notesapp/notesApp' 
import Login from './chatapp/Componenets/Login'
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
import ChatArea from './chatapp/Componenets/ChatArea'
import Users from './chatapp/Componenets/Users'
import Groups from './chatapp/Componenets/Groups'
import CreateGroups from './chatapp/Componenets/CreateGroups'
import Welcome from './chatapp/Componenets/Welcome'
import MainContainer from './chatapp/Componenets/MainContainer'

const Main = () => {
  return (
    <BrowserRouter>
    <Routes>
            <Route path = '/' element = {<Login />} />
            { /* <Route exact path = '/notes' element = {<NotesApp />} /> */}
            <Route path = 'notes' element = {<NotesApp />} />
            <Route exact path = 'app' element = {<MainContainer />}>
              <Route path = 'welcome' element = {<Welcome />} />
              <Route path = 'chat' element = {<ChatArea />} />
              <Route path = 'users' element = {<Users />} />
              <Route path = 'groups' element = {<Groups />} />
              <Route path = 'create-groups' element = {<CreateGroups />} />
            </Route>
    </Routes>
    </BrowserRouter> 
  )
}

export default Main