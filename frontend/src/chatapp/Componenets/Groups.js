import React, { useContext, useEffect, useState } from "react";
import "./Mycss.css";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
//import { AnimatePresence, motion } from "framer-motion";
import RefreshIcon from "@mui/icons-material/Refresh";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { refreshSidebarFun } from "../Features/refreshSidebar";
import { myContext } from "./MainContainer";

function Groups() {

    const server = process.env.BACKEND;
  const { refresh, setRefresh } = useContext(myContext);

  const lightTheme = useSelector((state) => state.themeKey);
  const dispatch = useDispatch();
  const [groups, SetGroups] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const nav = useNavigate();
  if (!userData) {
    console.log("User not Authenticated");
    nav("/");
  }

  const user = userData.data;
  useEffect(() => {
    console.log("Users refreshed : ", user.token);
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios
      .get(`${server}/chat/fetchGroups`, config)
      .then((response) => {
        console.log("Group Data from API ", response.data);
        SetGroups(response.data);
      });
  }, [refresh]);

  return (
    
    // {<div
    //     className="list-container"
    //   >
    //     <div className="ug-header">
                
    //       <p className="ug-title">
    //         Available Groups
    //       </p>
    //       <IconButton
           
    //         onClick={() => {
    //           setRefresh(!refresh);
    //         }}
    //       >
    //         <RefreshIcon />
    //       </IconButton>
    //     </div>}
    <div className = "list-container">
        <div className="search">
          <IconButton className="icon">
            <SearchIcon />
          </IconButton>
          <input
            placeholder="Search"
            className="search-box" 
          />
        </div>
        <div className="ug-list">
          {groups.map((group, index) => {
            return (
              <div
                
                className= "list-tem"
                key={index}
                onClick={() => {
                  console.log("Creating chat with group", group.name);
                  const config = {
                    headers: {
                      Authorization: `Bearer ${userData.data.token}`,
                    },
                  };
                   axios.put(
                    `${server}/chat/addSelfToGroup`,
                    {
                      
                        chatId: group._id,
                        userId: userData.data._id,

                    },
                    config
                  );
                  dispatch(refreshSidebarFun());
                }}
              >
                <p className="con-icon">{group.chatName[0]}</p>
                <p className="con-tile">
                  {group.chatName}
                </p>
              </div>
            );
          })}
        </div>
      </div>
   
  );
}

export default Groups;



