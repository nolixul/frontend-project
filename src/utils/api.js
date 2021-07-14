import axios from 'axios';

const gamesApi = axios.create({
  baseURL: 'https://nc-games-2021.herokuapp.com/api'
});

export const getCategories = async () => {
  const { data } = await gamesApi.get('/categories');
  return data.categories;
};

export const getReviews = async (category) => {
  const { data } = await gamesApi.get('/reviews', {
    params: { category: category }
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
