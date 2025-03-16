import React from 'react';
import '../styles/styles.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <div className="logo">BusinessBot</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;