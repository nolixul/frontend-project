import { useParams } from 'react-router';
import useComments from '../hooks/useComments';
import useSelectedReview from '../hooks/useSelectedReview';

import PostComment from './PostComment';

const Review = () => {
  const { review_id } = useParams();
  const { selectedReview, isLoading, hasError } = useSelectedReview(review_id);
  const { comments } = useComments(review_id);
  // increase and decrease review and comment votes

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
        <button>⬆️</button> <button>⬇️</button>
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
                <button>⬆️</button> <button>⬇️</button>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Review;
