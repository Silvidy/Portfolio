import react from 'react';
import HomeButton from './NavBar/HomeButton';
import AboutButton from './NavBar/AboutButton';

const NavBar = () => {
    const navStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#333',
        color: 'white',
        textAlign: 'center',
        padding: '10px 0',
        zIndex: 1000,
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };
    
    return (
        <nav style={navStyle}>
        <HomeButton/>
        <AboutButton/>
        </nav>
    );
    }
    export default NavBar;