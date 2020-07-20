import React from 'react';

import './ChatMessage.css';
import SentMessage from './SentMessage';
import ReceivedMessage from './ReceivedMessage';

const ChatMessage = ({ message, messageType }) => {
    if (messageType === 'sent') {
        return <SentMessage message={message} />
    } else {
        return <ReceivedMessage message={message} />
    }
};

export default ChatMessage;