// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header className="header">
    <h1 className="logo"><span><i>World</i></span>Travels</h1>
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/destinations">Destinations</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;