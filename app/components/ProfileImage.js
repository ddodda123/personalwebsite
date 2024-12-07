
import React from 'react';
import profileImage from '../images/prom.PNG'
export default function Profile() {
    return (
        <div id="profileImageContainer">
            <img 
                src={profileImage}
                alt="Profile" 
                id="profileImage"
                style={{ borderRadius: '50%', width: '150px', height: '150px' }}
            />
        </div>
    );
}