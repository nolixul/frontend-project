import { useState, useEffect } from 'react';
import { getSelectedReview } from '../utils/api';

const useSelectedReview = (review_id) => {
  const [selectedReview, setSelectedReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getSelectedReview(review_id).then((reviewFromApi) => {
      setSelectedReview(reviewFromApi);
      setIsLoading(false);
    });
  }, [review_id]);

  return { selectedReview, setSelectedReview, isLoading, setIsLoading };
};

export default useSelectedReview;
