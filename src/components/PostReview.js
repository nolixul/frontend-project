import React, { useEffect, useState } from 'react';

const PostReview = ({ setReviews }) => {
  const [newReview, setNewReview] = useState({});

  // controlled adding new review process
  useEffect(() => {}, []);

  return (
    <form className='postReview'>
      <p>post review form here</p>
    </form>
  );
};

export default PostReview;
