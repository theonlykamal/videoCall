import React from 'react'
import "./Mycss.css";
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';

function Users_Groups() {
  return (
    <div className='list-container'>
        <div className = 'search'>
            <IconButton>
            <SearchIcon />
            </IconButton>
            <input placeholder='search' className = 'search-box'></input>
        </div>
        <div className='ug-list'>
            <div className = 'list-tem'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test User</p>
            </div>
            <div className = 'list-tem'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test User</p>
            </div>
            <div className = 'list-tem'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test User</p>
            </div>
            <div className = 'list-tem'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test User</p>
            </div>
            <div className = 'list-tem'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test User</p>
            </div>
            <div className = 'list-tem'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test User</p>
            </div>
        </div>
    </div>
  )
}

export default Users_Groups