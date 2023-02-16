import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({
    token,
    currentUser,
    logout
}) => {

    if(!token){return (
        <header id='header'>
            <Link to={'/'}>Home</Link>
            <Link to={'/login'}>Log In</Link>
        </header>
    )}
    if (token) {
        return (
            <header id='header'>
                <Link to={'/home'}>Home</Link>
                <Link to={'/posts'}>Posts</Link>
                <Link to={'/profile'}>Profile</Link>
                <form id='userformset' onSubmit={logout}>
                    <h2>Hello {currentUser}</h2>
                    <button type='submit'>Log Out</button>
                </form>
            </header>
        )
    }
};

export default Header;