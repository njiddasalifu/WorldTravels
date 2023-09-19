// Footer.js
import React from 'react';
import './footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {currentYear} WorldTravel by <span><i><b>SALIF</b></i></span>. All rights reserved.</p>
    </footer>
  );
}

export default Footer;