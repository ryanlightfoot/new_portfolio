import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header: React.FC = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <header className="header">
      <div className="header-content">
        <span className="header-left">Ryan Lightfoot</span>
        <span className="header-center">
          <Link to="/fun_port_page">Portfolio</Link>
        </span>
        <span className="header-center">
          <Link to="/hobbies_page">Hobbies</Link>
        </span>
        <span className="header-right" onClick={scrollToBottom}>Contact Me</span>
      </div>
      <div className="header-line"></div>
    </header>
  );
};

export default Header;
