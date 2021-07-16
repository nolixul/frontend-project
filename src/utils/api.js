import axios from 'axios';

const gamesApi = axios.create({
  baseURL: 'https://nc-games-2021.herokuapp.com/api'
});

export const getCategories = async () => {
  const { data } = await gamesApi.get('/categories');
  return data.categories;
};

export const getReviews = async (category, sortBy) => {
  const { data } = await gamesApi.get('/reviews', {
    params: { category: category, sort_by: sortBy }
  });
  return data.reviews;
};

export const getSelectedReview = async (review_id) => {
  const { data } = await gamesApi.get(`/reviews/${review_id}`);
  return data.review;
};

export const getComments = async (review_id) => {
  const { data } = await gamesApi.get(`/reviews/${review_id}/comments`);
  return data.comments;
};

export const postComment = async (review_id, newComment) => {
  const { data } = await gamesApi.post(
    `/reviews/${review_id}/comments`,
    newComment
  );

  return data.comment;
};

export const patchReviewVotes = async (review_id) => {
  const incrementByOne = { inc_votes: 1 };
  const { data } = await gamesApi.patch(
    `/reviews/${review_id}`,
    incrementByOne
  );
  return data.review.votes;
};
