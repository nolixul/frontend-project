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
  // put in the request params object above, look at API to do it.
  return data.reviews;
};
