import React from 'react';

import './ChatMessage.css';

const ChatMessage = ({message}) => {
    console.log(message);
    return (
        <div className='chat-message'>
            <img src={message.user.avatar} alt={message.user.username} />
            <div>
                <p>{message.user.username}</p>
                <p class='message-body'>{message.body}</p>
            </div>
        </div>
    )
};

export default ChatMessage;