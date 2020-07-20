import React from 'react';

import Header from './Header';
import ChatStream from './ChatStream';
import Footer from './Footer';

import './App.css';

const App = ({ currentUser, conversation }) => {
  return (
    <div className='wrapper'>
      <Header currentUser={currentUser} messages={conversation.messages} />
      <ChatStream currentUser={currentUser} messages={conversation.messages} />
      <Footer />
    </div>
  );
};

export default App;
