import { getComments } from '../utils/api';

import { useState, useEffect } from 'react';

const useComments = (review_id) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getComments(review_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, [review_id, comments]);
  return { comments, setComments };
};

export default useComments;
