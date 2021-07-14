import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useComments from '../hooks/useComments';
import useSelectedReview from '../hooks/useSelectedReview';

import PostComment from './PostComment';

const Review = () => {
  const { review_id } = useParams();
  const { selectedReview, setSelectedReview } = useSelectedReview(review_id);
  const { comments, setComments } = useComments(review_id);

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
          {comments.map((comment) => {
            return <li></li>;
          })}
        </ul>
      </section>
    </div>
  );
};

export default Review;
