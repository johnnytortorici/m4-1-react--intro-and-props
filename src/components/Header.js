import React from 'react';

import './Header.css';
import Avatar from './Avatar';

const Header = ({ currentUser, messages }) => {
  // return a new array of users who are not the currentUser
  const allUsers = 
  messages.map((message) => { return message.user })
  .filter((user) => { return user !== currentUser });
  // return array with only the 1st instance of the user
  const participants = allUsers.filter((user, index) => { return allUsers.indexOf(user) === index });

  return (<header>
    {
      participants.map(participant => {
        return (
          <div className='participants'>
            <Avatar key={participant.username} size='medium' user={participant} />
            <p>{participant.username}</p>
          </div>
        );
      })
    }
  </header>);
};

export default Header;
