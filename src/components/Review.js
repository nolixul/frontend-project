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
        {' '}
        <p>{selectedReview.owner}</p>
        <p>{selectedReview.created_at}</p>
        <img
          src={selectedReview.review_img_url}
          alt='game being reviewed'
          style={{ height: '100px' }}
        ></img>
        <h1>{selectedReview.title}</h1>
        <p>{selectedReview.review_body}</p>
        <p>{selectedReview.designer}</p>
        <p>{selectedReview.category}</p>
        <p>{selectedReview.votes}</p>
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
