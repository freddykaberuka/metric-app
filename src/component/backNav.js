import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/micro.png';
import image2 from '../assets/setting.png';
import back from '../assets/backi.png';

function BackNav() {
  return (
    <div className="nav-container">
      <div className="nav-burger">
        <Link to="/"><img src={back} alt="" /></Link>
        <h1>European Country</h1>
      </div>
      <div className="nav-image">
        <img src={image1} alt="microphone" />
        <img src={image2} alt="setting" />
      </div>
    </div>
  );
}

export default BackNav;
