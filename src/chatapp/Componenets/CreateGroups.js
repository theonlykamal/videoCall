import React from 'react'
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import { IconButton } from '@mui/material';

function CreateGroups() {
  return (
    <div className='createGroups-container'>
        <input placeholder='Enter Group Name' className='search-box'></input>
        <IconButton>
            <DoneRoundedIcon />
        </IconButton>
    </div>
  )
}

export default CreateGroups