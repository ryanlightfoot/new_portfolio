import React, { useState, useEffect, useRef } from 'react';
import './portfolio_cards.css';

const ButtonGrid: React.FC<{ names: string[], onButtonClick: (name: string) => void }> = ({ names, onButtonClick }) => {
  return (
    <div className="button-grid">
      {names.map((name, index) => (
        <button key={index} className="grid-button" onClick={() => onButtonClick(name)}>
          {name}
        </button>
      ))}
    </div>
  );
};

const PortfolioCard: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [isAnimationStarted, setIsAnimationStarted] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const animationRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoading(true);
          const timer = setTimeout(() => {
            setIsLoading(false);
          }, 3000); // 3 seconds

          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const animationObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAnimationStarted(true);
        }
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (animationRef.current) {
      animationObserver.observe(animationRef.current);
    }

    return () => {
      if (animationRef.current) {
        animationObserver.unobserve(animationRef.current);
      }
    };
  }, []);

  const projectNames = ["CAMPWEST", "PORTFOLIO", "BABELAS", "SWELLSEEKERS"];
  const projectDescriptions: { [key: string]: { description: string, githubLink: string | null } } = {
    "CAMPWEST": {
      description: "Completed private projects involving Python, PostgreSQL, Solana, and TypeScript. These projects demonstrate my ability to work with a variety of technologies and deliver robust solutions in different domains. (Current employment)",
      githubLink: null // No GitHub link provided
    },
    "PORTFOLIO": {
      description: "A comprehensive portfolio showcasing my skills and projects as a Front end Developer. This project highlights my expertise in React and TypeScript, featuring a responsive design and interactive elements to provide a seamless user experience.",
      githubLink: "https://github.com/ryanlightfoot/Portfolio"
    },
    "BABELAS": {
      description: "A Kings Cup inspired drinking game developed for Android devices. This interactive party game features custom rules, dynamic card animations, and a modern user interface, making it the perfect companion for social gatherings.",
      githubLink: "https://github.com/ryanlightfoot/Babelas"
    },
    "SWELLSEEKERS": {
      description: "A React-based web application designed for surf enthusiasts to check wave forecasts, weather conditions, and equipment recommendations. Features include 5-day forecasts with hourly data for popular surf spots, user accounts to save favorite locations, and equipment tracking for wetsuits and surfboards. Created for my final project at Nelson Mandela University.",
      githubLink: "https://github.com/ryanlightfoot/SwellSeekersFrontEnd"
    }
  };

  const handleButtonClick = (name: string) => {
    setSelectedProject(name);
  };

  return (
    <div className='NES-back'>
        <p 
          ref={animationRef} 
          className={`cursor ${isAnimationStarted ? 'typewriter-animation' : ''}`}
        >
          This is my portfolio please select a project to view in more detail.
        </p>
        <ButtonGrid names={projectNames} onButtonClick={handleButtonClick} />
        {selectedProject && (
          <div className="project-description">
            <h3>{selectedProject}</h3>
            <p>{projectDescriptions[selectedProject].description}</p>
            {projectDescriptions[selectedProject].githubLink && (
              <a href={projectDescriptions[selectedProject].githubLink} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            )}
          </div>
        )}
    </div>
  );
};

export default PortfolioCard;
