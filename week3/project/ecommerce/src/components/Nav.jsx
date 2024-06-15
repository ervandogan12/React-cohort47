
import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul className='nav-items'>
        <li><Link to="/">Products</Link></li>
        <li><Link to="/favourites">Favourites</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;