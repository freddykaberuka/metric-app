import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
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
    <div>
      <ul>
        {links.map((link) => <li key={link.id}><Link to={link.path}>{link.text}</Link></li>)}
      </ul>
    </div>
  );
}

export default NavBar;
