import React from 'react';
import './Mycss.css';
import SideBar from './SideBar';
import WorkArea from './WorkArea';
import ChatArea from './ChatArea';
import Welcome from './Welcome';
import CreateGroups from './CreateGroups';

function MainContainer() {
    return (<div className='main-container'>
        <SideBar />
        <CreateGroups />
        { /* <Welcome /> */ }
        { /* <ChatArea props= {{name: "Person1", timeStamp: "today"}} /> */}
    </div>);
}

export default MainContainer;

