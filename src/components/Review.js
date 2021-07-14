import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getSelectedReview } from '../utils/api';
import PostComment from './PostComment';

const Review = () => {
  const [selectedReview, setSelectedReview] = useState({});
  const { review_id } = useParams();

  useEffect(() => {
    getSelectedReview(review_id).then((reviewFromApi) => {
      setSelectedReview(reviewFromApi);
    });
  }, [review_id]);

  return (
    <div className='Review'>
      <section className='fullReview'>
        <p>{selectedReview.title}</p>
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
