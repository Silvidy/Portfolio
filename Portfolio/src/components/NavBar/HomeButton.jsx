import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png'; // Adjust the path as necessary

const HomeButton = () => {
  const homeButtonStyle = {
    backgroundColor: 'white',  // Example color
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
    fontSize: '16px',
    margin: '0 10px',
    display: 'flex',
    alignItems: 'center',
  };

  const logoStyle = {
    width: '40px', // Adjust size as necessary
    height: '40px',
    marginRight: '8px',
  };

  return (
    <Link to="/" style={homeButtonStyle}>
      <img src={logo} style={logoStyle} />
    </Link>
  );
};

export default HomeButton;