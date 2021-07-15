import useReviews from '../hooks/useReviews';
import useCategories from '../hooks/useCategories';

// COME BACK AND RE-FACTOR SO CLICKING ON A CATEGORY CHANGES THE URL - PARAMETRIC ENDPOINTS WITH ROUTING, SEE NOTES. REFACTOR TO USE CUSTOM HOOKS

const NavBar = ({ setReviews }) => {
  const { categories } = useCategories();
  const { setSelectedCategory, setSortBy, isLoading, hasError } =
    useReviews(setReviews);

  if (isLoading) return <p>Loading...</p>;
  if (hasError) return <p>Oops! Something went wrong...</p>;
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
      <label forhtml='sort-by-select'> Sort By</label>
      <select
        name='sort-by-dropdown'
        id='sort-by-select'
        onChange={(event) => {
          setSortBy(event.target.value);
        }}
      >
        <option value='created_at'>select option</option>
        <option value='created_at'>new</option>
        <option value='comment_count'>most active</option>
        <option value='votes'>popular</option>
      </select>
    </nav>
  );
};

export default NavBar;
