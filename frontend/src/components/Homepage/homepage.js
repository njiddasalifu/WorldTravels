import React from 'react';
import './homepage.css';

function Homepage() {
  return (
    <div className="homepage">
      <header className="header">
        <h1 className="logo">WorldTravel</h1>
        <nav className="navbar">
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/destinations">Destinations</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section className="hero">
        <div className="hero-content">
          <h2 className="hero-title">Explore the World</h2>
          <p className="hero-subtitle">Discover new destinations and plan your next adventure.</p>
          <a href="/destinations" className="hero-btn">Get Started</a>
        </div>
      </section>
      <section className="features">
        <div className="feature">
          <h3 className="feature-title">Popular Destinations</h3>
          <p className="feature-description">Browse through our collection of popular travel destinations.</p>
        </div>
        <div className="feature">
          <h3 className="feature-title">Travel Guides</h3>
          <p className="feature-description">Get useful travel tips and guides for your next trip.</p>
        </div>
        <div className="feature">
          <h3 className="feature-title">Customized Itineraries</h3>
          <p className="feature-description">Create personalized itineraries based on your preferences.</p>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} WorldTravel-by-<i>SALIF</i>. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Homepage;