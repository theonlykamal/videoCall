import React , { useLayoutEffect, useEffect, useState } from 'react'
import "./Mycss.css";
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Users() {
  
    const [users, setUsers] = useState([]);
    const [query, setQuery] = useState([]);


    const userData = JSON.parse(localStorage.getItem("userData"));
    const nav = useNavigate();

    if (!userData) {
        console.log("User not Authenticated");
        nav(-1);
    }
    
    function byuseLayoutEffect() {
        console.log("Users refreshed");
        //console.log();
        
        const config = {
            headers: {
                Authorization : `Bearer ${userData.data.token}`,
            },
            params: { search : `${query}` },
        };
        axios.get("http://localhost:5000/user/fetchUsers", config).then((data) => {
            console.log("UData refershed in Users panel");
            setUsers(data.data);
            console.log(data.data);
            
        });
    }
  
    
    
    return (
    <div className='list-container'>
        <div className = 'search'>
            <IconButton>
            <SearchIcon onClick = {byuseLayoutEffect}/>
            </IconButton>
            <input placeholder='search' className = 'search-box'
            value={query} onChange={e => setQuery(e.target.value)}></input>
        </div>
        <div className='ug-list'>
            
            
            {users.map((user,index) => {     
                    
                    return(        
                        <div className = 'list-tem'>
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