import React, { useContext, useEffect, useState } from 'react'
import './Mycss.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import ConversationItems from './ConversationItems';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { refreshSidebarFun } from "../Features/refreshSidebar";
import { myContext } from "./MainContainer";

export default function SideBar() {
  const server = "https://my-stop-api.vercel.app";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.themeKey);
  // const refresh = useSelector((state) => state.refreshKey);
  const { refresh, setRefresh } = useContext(myContext);
  console.log("Context API : refresh : ", refresh);
  const [conversations, setConversations] = useState([]);
  // console.log("Conversations of Sidebar : ", conversations);
  const userData = JSON.parse(localStorage.getItem("userData"));
  // console.log("Data from LocalStorage : ", userData);
  const nav = useNavigate();
  if (!userData) {
    console.log("User not Authenticated");
    nav("/");
  }

  const user = userData.data;
  useEffect(() => {
    // console.log("Sidebar : ", user.token);
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios.get(`${server}/chat/`, config).then((response) => {
      console.log("Data refresh in sidebar ", response.data);
      setConversations(response.data);
      // setRefresh(!refresh);
    });
  }, [refresh]);

  return (
    <div className='sidebar-container'>
      <div className = 'sb-header'>
        <div>
        <IconButton>
        <AccountCircleIcon /> 
        </IconButton> 
        </div>
        <div>
        <IconButton onClick={() => {navigate('users')}}>
        <PersonAddAlt1Icon />
        </IconButton>
        <IconButton onClick={() => {navigate('groups')}}> 
        <GroupAddIcon />
        </IconButton>
        <IconButton  onClick = {() => {navigate('create-groups')}}>
          <AddCircleIcon />
        </IconButton>
        <IconButton
            onClick={() => {
              localStorage.removeItem("userData");
              navigate("/");
            }}
          >
            <ExitToAppIcon />
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
        {conversations.map((conversation, index)=> {
          var chatName = "";
          if (conversation.isGroupChat) {
            chatName = conversation.chatName;
            //console.log("group ",chatName);
          } else {
            //chatName = conversation.users[1].name;
            conversation.users.map((user) => {
              if (user._id != userData.data._id) {
                chatName = user.name;
                //console.log("user ",user.name," ",chatName);

              }
            });
          }
           
          
          if (conversation.latestMessage === undefined) {
            return(
              <div
                key ={index}
                onClick = {() => {
                  console.log("Refresh fired from sidebar");
                  setRefresh(!refresh);
                }}
              >
                <div 
                  key = {index}
                  className = "conversation-container"
                  onClick = {() => {
                    navigate(
                      "chat/"+
                        conversation._id+
                        "&"+
                        conversation.users[1].name
                    );
                  }}
                  >
                    <p className = "con-icon"> {chatName[0]} </p>
                    <p className = "con-title"> {chatName} </p>
                    <p className = "con-lastMessage">
                      No previous Messages, click here to start a new chat
                    </p> 
                </div>
              </div>
            )
          } else {
            return (
              <div
                key={index}
                className="conversation-container"
                onClick={() => {
                  navigate(
                    "chat/" +
                      conversation._id +
                      "&" +
                      conversation.users[1].name
                  );
                }}
              >
                <p className = "con-icon"> {chatName[0]} </p>
                <p className = "con-title">{chatName}</p>
                <p className = "con-lastMessage">{conversation.latestMessage.content}</p>
                
              </div>
            );
            
          }
         
        })}
      </div>
    </div>
  )
}
