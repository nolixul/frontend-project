import useReviews from '../hooks/useReviews';
import useCategories from '../hooks/useCategories';

const NavBar = ({ setReviews }) => {
  const { categories } = useCategories();
  const { setSelectedCategory, setSortBy, isLoading, hasError } =
    useReviews(setReviews);

  if (hasError) return <p>Oops! Something went wrong...</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <nav className='NavBar'>
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
