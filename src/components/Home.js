import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getReviews } from '../utils/api';
import NavBar from './NavBar';
import PostReview from './PostReview';

const Home = () => {
  const { category } = useParams();
  const [reviews, setReviews] = useState([]);

  // useEffect to fetch all reviews OR reviews by category - see notes
  // NOT CONVINCED THIS WILL WORK - HOW IS IT GETTING CATEGORY FOR PARAMS
  useEffect(() => {
    getReviews(category).then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
    });
  }, [category]);

  return (
    <div className='Home'>
      <NavBar />
      <ul className='reviewsList'>
        <PostReview setReviews={setReviews} />
        {reviews.map((review) => {
          return <li>{review.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Home;
