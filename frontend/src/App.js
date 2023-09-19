import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/layout';
import Homepage from './components/Homepage/homepage';

function App() {
  return (
    <Router>
      <Layout>
        Hello from here.
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;