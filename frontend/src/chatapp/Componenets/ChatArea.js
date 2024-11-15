import React, { useContext, useEffect, useRef, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MessageOthers from './MessageOthers';
import MessageSelf from './MessageSelf';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import axios from "axios";
import { myContext } from "./MainContainer";

function fChatArea() {
    var props = {name : "Test#1", lastMessage : "Last Message #1", timeStamp : "today"}
  return (
    <div className='chatarea-container'>
        <div className='chatarea-header'>
            <p className='con-icon'>{props.name[0]}</p>
            <div className='header-text'>
                <p className='con-title'>{props.name}</p>
                <p className='con-timestamp'>{props.timeStamp}</p>
            </div>
            <IconButton>
                <DeleteIcon />
            </IconButton>
        </div>
        <div className='message-container'>
            <MessageOthers />
            <MessageSelf />
            <MessageOthers />
            <MessageSelf />
            <MessageOthers />
            <MessageSelf /> 
            <MessageOthers />
            <MessageSelf />
            <MessageOthers />
            <MessageSelf />
            <MessageOthers />
            <MessageSelf /> 
            <MessageOthers />
            <MessageSelf />
            <MessageOthers />
            <MessageSelf />
            <MessageOthers />
            <MessageSelf /> 
        </div>
        <div className='text-input-area'>
            <input placeholder='Type a message' className='search-box'></input>
            <IconButton>
                <SendIcon />    
            </IconButton>
        </div>
    </div>
  )
}



function ChatArea() {
  const server = process.env.REACT_APP_BACKEND;
  
  
  const lightTheme = useSelector((state) => state.themeKey);
  const [messageContent, setMessageContent] = useState("");
  const messagesEndRef = useRef(null);
  const dyParams = useParams();
  const [chat_id, chat_user] = dyParams._id.split("&");
  // console.log(chat_id, chat_user);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [allMessages, setAllMessages] = useState([]);
  // console.log("Chat area id : ", chat_id._id);
  // const refresh = useSelector((state) => state.refreshKey);
  const { refresh, setRefresh } = useContext(myContext);
  const [loaded, setloaded] = useState(false);
  const sendMessage = () => {
    // console.log("SendMessage Fired to", chat_id._id);
    const config = {
      headers: {
        Authorization: `Bearer ${userData.data.token}`,
      },
    };
    axios
      .post(
        `${server}/message/`,
        {
          content: messageContent,
          chatId: chat_id,
        },
        config
      )
      .then(({ data }) => {
        console.log("Message Fired");
      });
  };
  // const scrollToBottom = () => {
  //   messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  // };

  useEffect(() => {
    console.log("Users refreshed");
    const config = {
      headers: {
        Authorization: `Bearer ${userData.data.token}`,
      },
    };
    axios
      .get(`${server}/message/` + chat_id, config)
      .then(({ data }) => {
        setAllMessages(data);
        setloaded(true);
        // console.log("Data from Acess Chat API ", data);
      });
    // scrollToBottom();
  }, [refresh, chat_id, userData.data.token]);

  if (!loaded) {
    return (
      <div
        style={{
          border: "20px",
          padding: "10px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Skeleton
          variant="rectangular"
          sx={{ width: "100%", borderRadius: "10px" }}
          height={60}
        />
        <Skeleton
          variant="rectangular"
          sx={{
            width: "100%",
            borderRadius: "10px",
            flexGrow: "1",
          }}
        />
        <Skeleton
          variant="rectangular"
          sx={{ width: "100%", borderRadius: "10px" }}
          height={60}
        />
      </div>
    );
  } else {
    return (
      <div className='chatarea-container'>
        <div className='chatarea-header'>
          <p className='con-icon'>
            {chat_user[0]}
          </p>
          <div className='header-text'>
            <p className='con-title'>
              {chat_user}
            </p>
            {/* <p className={"con-timeStamp" + (lightTheme ? "" : " dark")}>
              {props.timeStamp}
            </p> */}
          </div>
          <IconButton >
            <DeleteIcon />
          </IconButton>
        </div>
        <div className='message-container'>
          {allMessages
            .slice(0)
            .map((message, index) => {
              const sender = message.sender;
              const self_id = userData.data._id;
              if (sender._id === self_id) {
                // console.log("I sent it ");
                return <MessageSelf props={message} key={index} />;
              } else {
                // console.log("Someone Sent it");
                return <MessageOthers props={message} key={index} />;
              }
            })}
        </div>
        <div ref={messagesEndRef} className="BOTTOM" />
        <div className='text-input-area'>
          <input
            placeholder="Type a Message"
            className='text-input-area-box'
            value={messageContent}
            onChange={(e) => {
              setMessageContent(e.target.value);
            }}
            onKeyDown={(event) => {
              if (event.code == "Enter") {
                // console.log(event);
                sendMessage();
                setMessageContent("");
                setRefresh(!refresh);
              }
            }}
          />
          <IconButton
           
            onClick={() => {
              sendMessage();
              setRefresh(!refresh);
            }}
          >
            <SendIcon />
          </IconButton>
        </div>
      </div>
    );
  }
}

export default ChatArea;
