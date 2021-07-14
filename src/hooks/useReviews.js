import { useState, useEffect } from 'react';
import { getReviews } from '../utils/api';

const useReviews = (setReviews) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    getReviews(selectedCategory).then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
    });
  }, [selectedCategory]);
  return { selectedCategory, setSelectedCategory };
};

export default useReviews;
