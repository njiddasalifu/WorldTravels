
 import React from 'react';
 import './homepage.css';
 import Layout from '../Layout/layout';
 import me1 from '../../assets/images/tour.jpg';
 import me2 from '../../assets/images/gallery-03.jpg';
 import me3 from '../../assets/images/gallery-04.jpg';

    function Homepage() {
      return (
        <Layout>
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
              <img src={me1} alt="Nature" />
              <p>
                <i><b>Miami</b></i>
              </p>
            </div>
            <div className="feature">
              <h3 className="feature-title">Travel Guides</h3>
              <p className="feature-description">Get useful travel tips and guides for your next trip.</p>
              <img src={me2} alt="Nature" />
            </div>
            <div className="feature">
              <h3 className="feature-title">Customized Itineraries</h3>
              <p className="feature-description">Create personalized itineraries based on your preferences.</p>
              <img src={me3} alt="Nature" />
            </div>
          </section>
        </Layout>
      );
    }

    export default Homepage;