import { useState, useEffect } from 'react';
import { getSelectedReview } from '../utils/api';

const useSelectedReview = (review_id) => {
  const [selectedReview, setSelectedReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
    getSelectedReview(review_id)
      .then((reviewFromApi) => {
        setSelectedReview(reviewFromApi);
        setIsLoading(false);
      })
      .catch((error) => {
        setHasError(true);
      });
  }, [review_id]);

  return { selectedReview, isLoading, hasError };
};

export default useSelectedReview;
