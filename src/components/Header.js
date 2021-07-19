import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../contexts/User';

const Header = () => {
  const { username } = useContext(UserContext);

  return (
    <div className='Header'>
      <Link to='/' className='text-link'>
        <h1>Golden Games</h1>
      </Link>
      <p className='loggedInArea'>
        Logged in as: <span className='username'>{username}</span>
      </p>
    </div>
  );
};

export default Header;
