import React, { createContext, useState } from 'react';
import './Mycss.css';
import SideBar from './SideBar';
import WorkArea from './WorkArea';
import ChatArea from './ChatArea';
import Welcome from './Welcome';
import CreateGroups from './CreateGroups';
import Users_Groups from './Users_Groups';
import { Outlet } from 'react-router-dom';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
import { useDispatch } from "react-redux";

import "@fontsource/inter";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";


export const myContext = createContext();

function MainContainer() {

    const dispatch = useDispatch();
    const [refresh, setRefresh] = useState(true);
    return (
    <div className='main-container'>
        <myContext.Provider value={{ refresh: refresh, setRefresh: setRefresh }}>
            <SideBar />
            <Outlet />
        </myContext.Provider>
        { /* <CreateGroups /> */}
        { /* <Welcome /> */ }
        { /* <ChatArea props= {{name: "Person1", timeStamp: "today"}} /> */}
        { /* <Users_Groups /> */}
    </div>);
}

export default MainContainer;

