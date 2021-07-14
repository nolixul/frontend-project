import React, { useEffect, useState } from 'react';
import { getCategories } from '../utils/api';

const useCategories = () => {
  const [categories, setCategories] = useState([]);

  getCategories().then((categoriesFromApi) => {
    setCategories(categoriesFromApi);
  });
  return { categories, setCategories };
};

export default useCategories;
