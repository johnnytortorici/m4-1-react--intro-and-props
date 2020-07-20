import React from 'react';

const ReceivedMessage = ({ message }) => {
    return (
        <div className='chat-message'>
            <img src={message.user.avatar} alt={message.user.username} />
            <div>
                <p>{message.user.username}</p>
                <p className='message-body received'>{message.body}</p>
            </div>
        </div>
    );
};

export default ReceivedMessage;