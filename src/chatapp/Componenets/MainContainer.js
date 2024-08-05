import React from 'react';
import './Mycss.css';
import SideBar from './SideBar';
import WorkArea from './WorkArea';
import ChatArea from './ChatArea';

function MainContainer() {
    return (<div className='main-container'>
        <SideBar />
        <ChatArea props= {{name: "Person1", timeStamp: "today"}} />
    </div>);
}

export default MainContainer;

