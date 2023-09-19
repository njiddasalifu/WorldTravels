
 import React from 'react';
 import './homepage.css';
 import Layout from '../Layout/layout';
    function Homepage() {
      return (
        <Layout>
          Hello from here.
          <section className="hero">
            <div className="hero-content">
              <h2 className="hero-title">Travel the world and see the beauty of Nature.</h2>
              <p className="hero-subtitle">Discover new destinations and plan your next adventure.</p>
              <a href="/destinations" className="hero-btn">Let's go</a>
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
        </Layout>
      );
    }

    export default Homepage;