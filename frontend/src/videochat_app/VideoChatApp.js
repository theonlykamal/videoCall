import React, { useState } from 'react'
import axios from 'axios';
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { IconButton } from '@mui/material';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";




const VideoChatApp = () => {
  const server = process.env.REACT_APP_CHAT;
  console.log(server)
  const [roomId, setRoomId] = useState("");
  const [url, setURL] = useState("");

  const navigate = useNavigate();

  const getRoomIdHandler = async () =>  {
      try { 
        //config 
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };


        //response
        const response = await axios.get(
          `${server}/`,
          
          config
        );

        console.log(response.data)
        setRoomId(response.data);
  

      } catch (error) {

      }

  
  };

  const joinRoomHandler = async () => {



      setURL(server + "/"+roomId);





 
  };

  const changeHandler = (e) => {
    setRoomId(e.target.value)
  }
  const restHandler = () =>{
    setURL("")
  }

  const reloadHandler = () =>{
    restHandler()
    joinRoomHandler()
  }
return (
  <div className='video-chat'>
      <div class="header">

      <div class="create" style={{display: "flex"}}>
        <button className="button"
              onClick={getRoomIdHandler}
            >
              CREATE ID
            </button>
          <div className="room-id"
          >
              {roomId}
        </div >


      </div>
        <div class="button-wrapper" style={{display: "flex"}}>

        <IconButton
            onClick={() => {
              localStorage.removeItem("userData");
              navigate("/");
            }}
          >
            <ExitToAppIcon />
          </IconButton>

        <button className="button"
            onClick={restHandler}
          >
            LEAVE
          </button>
          <input type='text' 
                name='roomId'
                className='room-id-input'
                onChange={changeHandler}>
          
          </input>
         
          <button className="button"
            onClick={joinRoomHandler}
          >
            JOIN
          </button>
        </div>
      </div>
      <div class="iframe-wrapper">
        <iframe
            allow = {"camera " + `${url}; microphone ${url}`}
            src={url}
        >
        
        
        </iframe>
      </div>

  </div>
)
}

export default VideoChatApp