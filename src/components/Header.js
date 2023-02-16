import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header id='header'>
            <Link to={'/'}>Home</Link>
            <Link to={'/login'}>Log In</Link>
        </header>
    )
};

export default Header;