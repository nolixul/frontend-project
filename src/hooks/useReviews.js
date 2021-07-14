import { useState, useEffect } from 'react';
import { getReviews } from '../utils/api';

const useReviews = (setReviews) => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [sortBy, setSortBy] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getReviews(selectedCategory, sortBy).then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
      setIsLoading(false);
    });
  }, [selectedCategory, sortBy]);
  return {
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    isLoading,
    setIsLoading
  };
};

export default useReviews;
