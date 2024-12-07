import React from 'react';
export default function Profile() {
    return (
        <div
  id="profileImageContainer"
  style={{
    marginLeft: '-700px', // Negative margin moves the container to the left
    marginTop: '-150px'
  }}
>
  <img
    src="/images/prom.PNG"
    alt="Profile"
    id="profileImage"
    style={{ borderRadius: '10%', width: '275px', height: '550px'}}
  />
</div>
    )
}
