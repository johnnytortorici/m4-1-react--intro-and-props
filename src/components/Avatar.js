import React from 'react';

const Avatar = ({ size, user }) => {
    return (
        <img className={`avatar ${size}`} src={user.avatar} alt={user.username} />
    );
};

export default Avatar;