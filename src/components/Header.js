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
            <Link to={'/routines'}>Routines</Link>
            <Link to={'/login'}>Log In</Link>
        </header>
    )}
    if (token) {
        return (
            <header id='logginInHeader'>
                <Link to={'/'}>Home</Link>
                <Link to={'/routines'}>Routines</Link>
                <Link to={'/userroutines'}>My Routines</Link>
                <Link to={'/activities'}>Activities</Link>
                <form id='userformset' onSubmit={logout}>
                    <h5>Hello {currentUser}</h5>
                    <button type='submit' id='logOutButton'>Log Out</button>
                </form>
            </header>
        )
    }
};

export default Header;