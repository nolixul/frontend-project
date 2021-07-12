import React from 'react';
import NavBar from './NavBar';
import PostReview from './PostReview';

const Home = () => {
  return (
    <div className='Home'>
      <NavBar />
      <ul className='reviewsList'>
        <PostReview />
        <li>Review list here</li>
      </ul>
    </div>
  );
};

export default Home;
