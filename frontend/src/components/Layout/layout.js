import React from 'react';
import Header from './Header/header';
import Footer from './Footer/footer';

function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;