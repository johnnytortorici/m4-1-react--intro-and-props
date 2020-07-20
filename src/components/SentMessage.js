import React from 'react';

const SentMessage = ({ message }) => {
    return (
        <div className='chat-message right'>
            <div>
                <p className='message-body sent'>{message.body}</p>
            </div>
        </div>
    );
};

export default SentMessage;