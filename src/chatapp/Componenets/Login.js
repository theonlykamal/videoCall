import React from 'react'
import pic from '../icons8-productivity-64.png'
import { Button, TextField } from '@mui/material'
import './Mycss.css';
function Login() {
  return (
    <div className='login-container'>
        <div className='image-container'>
            <img src = {pic} alt='Logo' className='welcome-logo' />
        </div>
        <div className='login-box'>
            <p>Login to your account</p>
            <TextField id="outlined-basic" label="Enter user name" variant="outlined" />
            <TextField id="outlined-password-input" label ='Password' type='password' autoComplete='current-password'/>
            <Button variant="outlined">Login</Button>

        </div>
    </div>
  )
}

export default Login