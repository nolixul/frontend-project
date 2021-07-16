import { useParams } from 'react-router';
import { useState } from 'react';
import useComments from '../hooks/useComments';
import useSelectedReview from '../hooks/useSelectedReview';
import UseVotes from '../hooks/useVotes';
import { patchReviewVotes } from '../utils/api';

import PostComment from './PostComment';

const Review = () => {
  const [reviewVotes, setReviewVotes] = useState();
  const { review_id } = useParams();

  const { selectedReview, isLoading, hasError } = useSelectedReview(review_id);
  const { comments } = useComments(review_id);

  const updateVotes = () => {
    setReviewVotes(selectedReview.votes + 1);
    patchReviewVotes(review_id);
  };

  if (isLoading) return <p>Loading...</p>;
  if (hasError) return <p>Oops! Something went wrong...</p>;
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
        <p>Votes: {selectedReview.votes}</p>
        <button onClick={updateVotes}>⬆️</button>
      </section>
      <section>
        <ul className='commentsList'>
          <PostComment />
          {comments.map((comment) => {
            return (
              <li>
                <p>{comment.body}</p>
                <p>{comment.author}</p>
                <p>{comment.created_at}</p>
                <p>Votes: {comment.votes}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Review;
