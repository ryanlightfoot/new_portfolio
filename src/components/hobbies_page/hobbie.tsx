import './hobbie.css';
import React from 'react';
import hobbyImage from '../../assets/images/hobby_img/20240619100713_IMG_4351.webp';
import hobbyImage2 from '../../assets/images/hobby_img/IMG_2520.webp';

const Hobbies: React.FC = () => {
  return (
    <div>
      <h1>Photography</h1>
      <p>My photography journey started with taking photos for Jeffreys Bay Animal Sanctuary</p>
      <img src={hobbyImage} alt="Hobby" className='hobby-image'/>
      <img src={hobbyImage2} alt="Hobby" className='hobby-image'/>
    </div>
  );
};

export default Hobbies; 