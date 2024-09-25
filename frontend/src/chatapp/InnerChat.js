import React from 'react'
//import PApp from './chatApp'
//import NotesApp from './notesapp/notesApp' 
import Login from './Componenets/Login'
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
import ChatArea from './Componenets/ChatArea'
import Users from './Componenets/Users'
import Groups from './Componenets/Groups'
import CreateGroups from './Componenets/CreateGroups'
import Welcome from './Componenets/Welcome'
import MainContainer from './Componenets/MainContainer'

const InnerChat = () => {
  return (
    <BrowserRouter>
    <Routes>
            {/* {<Route path = '/' element = {<Login />} />} */}
            { /* <Route exact path = '/notes' element = {<NotesApp />} /> */}
    {/* {           <Route path = 'notes' element = {<NotesApp />} />} */}
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
export default InnerChat;