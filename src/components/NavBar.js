import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../utils/api';

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
    });
  }, []);

  return (
    <nav className='NavBar'>
      <select>
        <option>select category</option>
        {categories.map((category) => {
          const categoryName = category.slug;
          return <option>{categoryName}</option>;
        })}
      </select>
      <select>
        <option>order by</option>
      </select>
    </nav>
  );
};

export default NavBar;
