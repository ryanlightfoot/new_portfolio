import React, { useEffect } from 'react';
import './title.css';
import MeNoBack from '../../assets/images/title_image/Me_noback.png';
import DownArrow from '../../assets/svg/down-arrow-svgrepo-com.svg';

const Title: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const image = document.querySelector('.title-image') as HTMLElement;
      const aboutMeContainer = document.querySelector('.about-me-container') as HTMLElement;
      if (image && aboutMeContainer) {
        const scrollY = window.scrollY;
        const maxScroll = 200; // Increase this value for a more gradual effect
        const scale = Math.max(0.9, 1 - (scrollY / maxScroll) * 0.1);
        
        // Calculate left position to align with the left edge
        const leftPosition = Math.max(-40, -scrollY / maxScroll * 40);

        image.style.transform = `scale(${scale})`;
        image.style.left = `${leftPosition}%`;

        // Calculate opacity based on image's left position
        const opacity = Math.min(1, Math.max(0, scrollY / maxScroll));
        aboutMeContainer.style.opacity = `${opacity}`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <div className="software-dev-title-container">
      <h1 className="software-dev-title-text">Hi, I'm Ryan</h1>
      <h1 className="software-dev-title-text">I'm a software developer</h1>
      <img src={DownArrow} alt="Down Arrow" className="down-arrow" />
    </div>
    <div className="about-me-img-container">
      <div>
        <img 
          src={MeNoBack} 
          alt="Ryan Lightfoot" 
          className="title-image" 
          onLoad={(e) => e.currentTarget.classList.add('fade-in')}
        />
      </div>
      <div className="about-me-container">
        <h1 className="about-me-title">ABOUT ME</h1>
        <p className="about-me-paragraph">I am a dynamic IT professional with a strong passion for acquiring and mastering new skills.
                  As a former professional surfer, I thrive on embracing challenges, whether they are physical or intellectual.
                  In my spare time, I dedicate myself to enhancing my expertise by working on coding projects in many different languages.</p>
      </div>
    </div>
    </>
  );
};

export default Title;
