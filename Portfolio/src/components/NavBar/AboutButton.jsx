import React from 'react';
import { Link } from 'react-router-dom';

const AboutButton = () => {
  const aboutButtonStyle = {
    
    backgroundColor: 'red',  // Example color
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
    fontSize: '16px',
    margin: '0 10px',
  };

  return (
    <Link to="/about" style={aboutButtonStyle}>
      About
    </Link>
  );
};
export default AboutButton;