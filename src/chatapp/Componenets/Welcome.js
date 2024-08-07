import React from 'react'
import logo from "../icons8-chat-50.png"

function Welcome() {
  return (
    <div className='welcome-container'>
        <img src = {logo} alt='Logo' className='welcome-logo' />
        <p>View and text to people online</p>
    </div>
  )
}

export default Welcome