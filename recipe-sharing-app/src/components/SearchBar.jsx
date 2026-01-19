import { useRecipeStore } from '../store/recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  return (
    <input 
      type="text" 
      placeholder="Search recipes..." 
      style={{ padding: '10px', width: '300px' }}
      onChange={(e) => setSearchTerm(e.target.value)} 
    />
  );
};
export default SearchBar;