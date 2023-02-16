import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header id='header'>
            <Link to={'/home'}>Home</Link>
            <Link to={'/posts'}>Posts</Link>
        </header>
    )
};

export default Header;