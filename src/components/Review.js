import React from 'react';
import PostComment from './PostComment';

const Review = () => {
  return (
    <div className='Review'>
      <section className='fullReview'>
        <p>Full review Here</p>
      </section>
      <section>
        <ul className='commentsList'>
          <PostComment />
          <li>Comments here</li>
        </ul>
      </section>
    </div>
  );
};

export default Review;
