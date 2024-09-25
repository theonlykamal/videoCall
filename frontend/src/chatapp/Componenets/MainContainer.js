import React from 'react';
import './Mycss.css';
import SideBar from './SideBar';
import WorkArea from './WorkArea';
import ChatArea from './ChatArea';
import Welcome from './Welcome';
import CreateGroups from './CreateGroups';
import Users_Groups from './Users_Groups';
import { Outlet } from 'react-router-dom';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'

function MainContainer() {
    return (
    <div className='main-container'>
        <SideBar />
        <Outlet />
        { /* <CreateGroups /> */}
        { /* <Welcome /> */ }
        { /* <ChatArea props= {{name: "Person1", timeStamp: "today"}} /> */}
        { /* <Users_Groups /> */}
    </div>);
}

export default MainContainer;

