import { getCategories, getReviews } from '../utils/api';
import useReviews from '../hooks/useReviews';
import useCategories from '../hooks/useCategories';
// COME BACK AND RE-FACTOR SO CLICKING ON A CATEGORY CHANGES THE URL - PARAMETRIC ENDPOINTS WITH ROUTING, SEE NOTES. REFACTOR TO USE CUSTOM HOOKS

const NavBar = ({ setReviews }) => {
  const { categories, setCategories } = useCategories();
  const { selectedCategory, setSelectedCategory } = useReviews(setReviews);

  return (
    <nav className='NavBar'>
      <label forhtml='categories-select'>Select Category</label>
      <select
        name='categoriesDropDown'
        id='categories-select'
        onChange={(event) => {
          setSelectedCategory(event.target.value);
        }}
      >
        <option value=''>select category</option>
        {categories.map((category) => {
          const categoryName = category.slug;
          return <option value={categoryName}>{categoryName}</option>;
        })}
      </select>
      <select>
        <option>order by</option>
      </select>
    </nav>
  );
};

export default NavBar;
