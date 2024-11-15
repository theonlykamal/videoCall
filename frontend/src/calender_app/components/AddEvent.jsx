import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import { IconButton, TextField } from '@mui/material';
import { useState } from 'react';

export default function AddEvent({onAdd,events,day}) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
 // console.log(events);
  

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };




  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  const [data, setData] = useState("")

  const changeHandler = (e) => {
    console.log(data)
    setData(e.target.value);
  }

  const handleClose = (event) => {
    console.log(events)

    onAdd(data);
        console.log(events)
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2}>
      
      <div>
        
          <IconButton sx={{ backgroundColor: "#F9F9F9", color: "#EF4444",width: "40px",height:"40px",
            '&:hover': {
                color: '#F9F9F9',
                backgroundColor: '#EF4444',
            },}}
            ref={anchorRef}
            
            id="composition-button"
            aria-controls={open ? 'composition-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            >
            <AddCircleOutlineTwoToneIcon color='#F9F8F8' sx={{
    
                borderRadius:"9999px",
            }}
            
            />
                        </IconButton>
        
        
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="top"
          transition
          disablePortal
          sx={{
            marginBottom:"20px"
          }}
          
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'top-start' ? 'left top' : 'left top',
              }}
              
            >
              <Paper
              
              className='hvr-bubble-bottom'>
                <ClickAwayListener onClickAway={handleClose}
                >
                  
                  
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}


                  >
                    <TextField 
                      onChange = {changeHandler}
                      id="outlined-password-input" 
                      label ='Event Name' 
                      sx={{}}
                      
                      
                      name = "event-name"
                      onKeyDown={(event) => {
                        if (event.code === "Enter") {
                           
                        }
                      }}
              />
                    <MenuItem sx = {{
                      
                      
                    }}
                    id = "add-button"
                    onClick={handleClose}><div style={{
                      textAlign: "center",
                      width: "100%",
                      backgroundColor:"lightgreen",
                      fontFamily: "Inter",
                      
                    }} >Add</div></MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}
