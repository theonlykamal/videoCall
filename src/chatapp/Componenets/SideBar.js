import React, { useState } from 'react'
import './Mycss.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import ConversationItems from './ConversationItems';
import { useNavigate } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function SideBar() {
  const navigate = useNavigate();
  const [conversations, setConversations] = useState([
    {
      name: "Test1",
      lastMessage: "Last Message #1",
      timeStamp: "today",
    },
    {
      name: "Test2",
      lastMessage: "Last Message #2", 
      timeStamp: "today",
    },
    {
      name: "Test3",
      lastMessage: "Last Message #3",
      timeStamp: "today",
    },
]);
  return (
    <div className='sidebar-container'>
      <div className = 'sb-header'>
        <div>
        <IconButton>
        <AccountCircleIcon /> 
        </IconButton> 
        </div>
        <div>
        <IconButton onClick={() => {navigate('/app/users')}}>
        <PersonAddAlt1Icon />
        </IconButton>
        <IconButton onClick={() => {navigate('/app/groups')}}> 
        <GroupAddIcon />
        </IconButton>
        <IconButton  onClick = {() => {navigate('/app/create-groups')}}>
          <AddCircleIcon />
        </IconButton>
        </div>
      </div>
      <div className = 'search'> 
        <IconButton>
        <SearchIcon />
        </IconButton>
        <input placeholder='search' className = 'search-box'></input>
      </div>
      <div className = 'sb-conversationItems'> 
        {conversations.map((conversation)=> {
          return <ConversationItems props={conversation} key  = {conversation.name}/>
        })}
      </div>
    </div>
  )
}
