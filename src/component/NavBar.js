import React from 'react';
import image1 from '../assets/micro.png';
import image2 from '../assets/setting.png';
import menu from '../assets/menu.svg';

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
      path: '/detail',
      text: 'details',
    },
  ];
  return (
    <div className="nav-container">
      <div className="nav-burger">
        <img src={menu} alt="" />
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
