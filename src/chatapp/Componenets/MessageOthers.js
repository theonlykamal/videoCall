import React from 'react'

function MessageOthers() {
    var prop2 = {name: "RandomUser", message: "Random message"};
    return (
      <div className='other-message-container'>
          <div className='conversation-container'>
              <p className='con-icon'>{prop2.name[0]}</p>
              <div className='other-text-content'>
                <p className='con-title'>{prop2.name}</p>
                <p className='con-lastMessage'>{prop2.message}</p>
                <p className='self-timestamp'>12:00 PM</p>
              </div>
          </div>
      </div>
    )
}

export default MessageOthers