import React from 'react';
import './footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
        <div className="social-links">
            <a href="https://www.instagram.com/ryan_wesley_lightfoot/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="ryanlightfoot509@gmail.com">ryanlightfoot509@gmail.com</a>
            <a href="https://www.linkedin.com/in/ryan-lightfoot-profile/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/ryanlightfoot" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <p>© 2025 Ryan Lightfoot</p>
    </footer>
  );
};

export default Footer;
