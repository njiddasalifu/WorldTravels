import React from 'react';
import './Header.css';

const Header = () => (
    
  <nav className='header'>
    {/* <h2>Hi, Welcome to World Travels.</h2>
     */}
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/tours">Tours</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/login">Login</a></li>
    </ul>
  </nav>
);

export default Header;