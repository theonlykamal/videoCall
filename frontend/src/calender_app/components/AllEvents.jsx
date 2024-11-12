import React from 'react'

import Paper from '@mui/material/Paper';

const AllEvents = () => {


  return (
    <div className='all-events'>
        AllEvents

        <Paper
            elevation={10}
            sx = {{
            flex: 1,
            display: "flex",
            flexDirection: "column"
            }}
        >
            paper

            <div className='on-events-paper'>
                OnPaper


                
            </div>
        </Paper>

    </div>
  )
}

export default AllEvents