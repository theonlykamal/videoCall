import React , { useLayoutEffect, useEffect, useState, useContext } from 'react'
import "./Mycss.css";
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { refreshSidebarFun } from "../Features/refreshSidebar";
import { myContext } from "./MainContainer";

function Users() {
  
    const { refresh, setRefresh } = useContext(myContext);

    const server = process.env.BACKEND;
    const [users, setUsers] = useState([]);
    const [query, setQuery] = useState([]);

    const dispatch = useDispatch();


    const userData = JSON.parse(localStorage.getItem("userData"));
    const nav = useNavigate();

    if (!userData) {
        console.log("User not Authenticated");
        nav(-1);
    }
    
    function byuseLayoutEffect() {
        console.log("Clicked " , query);
        //console.log();
        
        const config = {
            headers: {
                Authorization : `Bearer ${userData.data.token}`,
            },
            params: { search : `${query}` },
        };
        axios.get(`${server}/user/fetchUsers`, config).then((data) => {
            //console.log("UData refershed in Users panel");
            setUsers(data.data);
            //console.log(data.data);
            
        });

        console.log("revieced response ");
    }

    useEffect(() => {
        console.log("Clicked " , query);
        //console.log();
        
        const config = {
            headers: {
                Authorization : `Bearer ${userData.data.token}`,
            },
            params: { search : `${query}` },
        };
        axios.get(`${server}/user/fetchUsers`, config).then((data) => {
            //console.log("UData refershed in Users panel");
            setUsers(data.data);
            //console.log(data.data);
            
        });

        console.log("revieced response ");
    },[refresh]);

    //useEffect(byuseLayoutEffect(), [refresh])
  
    
    
    return (
    <div className='list-container'>
        <div className = 'search'>
            <IconButton 
            onClick = {byuseLayoutEffect}                   
            >
            <SearchIcon />
            </IconButton>

            <input placeholder='search' className = 'search-box'
                value={query} 
                onChange={e => setQuery(e.target.value)}
                onKeyDown={(event) => {
                    if (event.code === "Enter") {
                    byuseLayoutEffect();
                    }
                }}
            >
            </input>
        </div>
        <div className='ug-list'>
            
            
            {users.map((user,index) => {     
                    
                    return(        
                        <div className = 'list-tem' 
                            key = {index}
                            onClick = { () => {
                                console.log("Creating chat with ", user.name);
                                const config = {
                                    headers: {
                                        Authorization : `Bearer ${userData.data.token}`,
                                    }
                                };
                                axios.post(
                                    `${server}/chat`,
                                    {
                                        userId: user._id,
                                    },
                                    config
                                );
                                dispatch(refreshSidebarFun());
                            }}
                        >
                        <p className='con-icon'>T</p>
                        <p className='con-title'>{user.name}</p>
                        </div>
                    );
            })}
            
            
            
            
        </div>
    </div>
  );
}

export default Users;