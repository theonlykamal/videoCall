import React from 'react'

function MessageSelf() {
    var prop1 = {name: "You", message: "This is a sample message"};
  return (
    <div className='self-message-container'>
        <div className='messageBox'>
            <p>{prop1.message}</p>
            <p className='self-timestamp'>12:00am</p>
        </div>
    </div>
  )
}

export default MessageSelf