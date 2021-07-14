import { useState, useEffect } from 'react';
import { getReviews } from '../utils/api';

const useReviews = (setReviews) => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [sortBy, setSortBy] = useState();

  useEffect(() => {
    console.log(sortBy, 'SORT BY IN USE EFFECT');
    getReviews(selectedCategory, sortBy).then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
    });
  }, [selectedCategory, sortBy]);
  return { selectedCategory, setSelectedCategory, sortBy, setSortBy };
};

export default useReviews;
