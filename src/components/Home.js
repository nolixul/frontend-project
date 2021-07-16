import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import Box from './Box';
import NavBar from './NavBar';

const Home = ({ review_id, setReview_id }) => {
  const [reviews, setReviews] = useState([]);

  return (
    <div className='Home'>
      <NavBar setReviews={setReviews} />
      <ul className='reviewsList'>
        {reviews.map((review) => {
          return (
            <Box>
              <Link to={`/review/${review.review_id}`} className='text-link'>
                <li key={review.review_id}>
                  <img
                    src={review.review_img_url}
                    alt='game being reviewed'
                    style={{ height: '100px' }}
                  ></img>
                  <h1>{review.title}</h1>
                  <p>{review.designer}</p>
                  <p>{review.created_at}</p>
                  <p>Votes: {review.votes}</p>
                </li>
              </Link>
            </Box>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
