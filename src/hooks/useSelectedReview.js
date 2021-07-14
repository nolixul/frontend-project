import { useState, useEffect } from 'react';
import { getSelectedReview } from '../utils/api';

const useSelectedReview = (review_id) => {
  const [selectedReview, setSelectedReview] = useState({});

  useEffect(() => {
    getSelectedReview(review_id).then((reviewFromApi) => {
      setSelectedReview(reviewFromApi);
    });
  }, [review_id]);

  return { selectedReview, setSelectedReview };
};

export default useSelectedReview;
