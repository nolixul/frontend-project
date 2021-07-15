import { useState, useEffect } from 'react';
import { getReviews } from '../utils/api';

const useReviews = (setReviews) => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [sortBy, setSortBy] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
    getReviews(selectedCategory, sortBy)
      .then((reviewsFromApi) => {
        setReviews(reviewsFromApi);
        setIsLoading(false);
      })
      .catch((error) => {
        setHasError(true);
      });
  }, [selectedCategory, sortBy, setReviews]);
  return {
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    isLoading,
    hasError
  };
};

export default useReviews;
