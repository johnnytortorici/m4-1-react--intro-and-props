import React from 'react';

import Avatar from './Avatar';

const ReceivedMessage = ({ message }) => {
    return (
        <div className='chat-message'>
            <Avatar size='small' user={message.user} />
            <div class='message-box'>
                <p className='username'>{message.user.username}</p>
                <div className='bubble'>
                    <img className='tip-received' src='/assets/tip-received.svg' />
                    <p className='message-body received'>{message.body}</p>
                </div>
            </div>
        </div>
    );
};

export default ReceivedMessage;