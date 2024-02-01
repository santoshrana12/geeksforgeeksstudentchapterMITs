import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import DarkMode from './DarkMode.js';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
      <nav id="navbar">
        <Logo />
        <Link to="/">Home</Link>
      <Link to="/Team">Team</Link>
      <Link to="/events">Events</Link>
        <DarkMode />
      </nav>
    );
  };
  
  export default Navbar;


