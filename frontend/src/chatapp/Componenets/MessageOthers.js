import React from 'react'

function MessageOthers({ props }) {
    var prop2 = {name: "RandomUser", message: "Random message"};
    return (
      <div className='other-message-container'>
          <div className='l-conversation-container'>
              <p className='l-con-icon'>{props.sender.name[0]}</p>
              <div className='l-other-text-content'>
                <p className='l-con-title'>{props.sender.name}</p>
               <div className = 'break'> <p className='l-con-lastMessage'>{props.content}</p></div>
                {/* {<p className='self-timestamp'>12:00 PM</p>} */}
              </div>
          </div>
      </div>
    )
}

export default MessageOthers