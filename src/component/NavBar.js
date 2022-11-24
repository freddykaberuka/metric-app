import React from 'react';
import image1 from '../assets/micro.png';
import image2 from '../assets/setting.png';

function NavBar() {
  // eslint-disable-next-line no-unused-vars
  const links = [
    {
      id: 1,
      path: '/',
      text: 'homepage',
    },
    {
      id: 2,
      path: '/categories',
      text: 'details',
    },
  ];
  return (
    <div className="nav-container">
      <div className="nav-burger">
        <h1>215</h1>
        <h1>European Country</h1>
      </div>
      <div className="nav-image">
        <img src={image1} alt="microphone" />
        <img src={image2} alt="setting" />
      </div>
    </div>
  );
}

export default NavBar;
