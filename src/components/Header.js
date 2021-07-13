import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='Header'>
      <Link to='/'>
        <h1>Golden Games</h1>
      </Link>
    </div>
  );
};

export default Header;
