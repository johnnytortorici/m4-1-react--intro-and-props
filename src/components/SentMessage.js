import React from 'react';

const SentMessage = ({ message }) => {
    return (
        <div className='chat-message right'>
            <div className="bubble">
                <p className='message-body sent'>{message.body}</p>
                <img className='tip-sent' src='/assets/tip-sent.svg' />
            </div>
        </div>
    );
};

export default SentMessage;