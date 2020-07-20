import React from 'react';

import Avatar from './Avatar';

const ReceivedMessage = ({ message }) => {
    return (
        <div className='chat-message'>
            <Avatar size='small' user={message.user} />
            <div class='message-box'>
                <p>{message.user.username}</p>
                <p className='message-body received'>{message.body}</p>
            </div>
        </div>
    );
};

export default ReceivedMessage;