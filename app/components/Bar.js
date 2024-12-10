import React from 'react';

export default function Bar() {
  return (
    <div
      id="headerRow"
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        backgroundColor: 'rgba(31, 41, 55, 0.7)',
        zIndex: 1000,
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        color: '#ffffff',
        marginLeft: "-50px"
      }}
    >
      <h2
        id="logo"
        style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#8affb9',
          margin: 0,
          cursor: 'pointer',
          marginLeft: "30px"
        }}
      >
        Dhruv Dodda
      </h2>
      <div
        id="headerIcons"
        style={{
          display: 'flex',
          gap: '20px',
          fontSize: '1rem',
          fontWeight: '500',
        }}
      >
        <a
          href="#hero"
          style={{
            cursor: 'pointer',
            textDecoration: 'none',
            color: '#ffffff',
            transition: 'color 0.3s',
          }}
        >
          Home
        </a>
        <a
          href="#experiences"
          style={{
            cursor: 'pointer',
            textDecoration: 'none',
            color: '#ffffff',
            transition: 'color 0.3s',
          }}
        >
          Experiences
        </a>
        <a
          href="#contact"
          style={{
            cursor: 'pointer',
            textDecoration: 'none',
            color: '#ffffff',
            transition: 'color 0.3s',
          }}
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}