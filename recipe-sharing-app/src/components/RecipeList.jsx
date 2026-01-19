import { useRecipeStore } from '../store/recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore(state => 
    state.searchTerm ? state.filteredRecipes : state.recipes
  );

  return (
    <div>
      <h2>All Recipes</h2>
      {recipes.length === 0 ? <p>No recipes found.</p> : recipes.map(recipe => (
        <div key={recipe.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipe/${recipe.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};
export default RecipeList;