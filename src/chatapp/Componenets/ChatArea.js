import { IconButton } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

function ChatArea({ props }) {
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
        <div className='message-container'>messages</div>
        <div className='text-input-area'>
            <input placeholder='Type a message' className='search-box'></input>
            <IconButton>
                <SendIcon />
            </IconButton>
        </div>
    </div>
  )
}

export default ChatArea