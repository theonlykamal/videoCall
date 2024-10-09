import React from 'react'

function MessageOthers({ props }) {
    var prop2 = {name: "RandomUser", message: "Random message"};
    return (
      <div className='other-message-container'>
          <div className='conversation-container'>
              <p className='con-icon'>{props.sender.name[0]}</p>
              <div className='other-text-content'>
                <p className='con-title'>{props.sender.name}</p>
                <p className='con-lastMessage'>{props.content}</p>
                {/* {<p className='self-timestamp'>12:00 PM</p>} */}
              </div>
          </div>
      </div>
    )
}

export default MessageOthers