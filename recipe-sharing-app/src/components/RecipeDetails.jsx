import { useRecipeStore } from '../store/recipeStore';
import { useParams } from 'react-router-dom';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore(state => state.recipes.find(r => r.id === Number(id)));
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);
  const isFavorite = useRecipeStore(state => state.favorites.includes(Number(id)));

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <button onClick={() => isFavorite ? removeFavorite(recipe.id) : addFavorite(recipe.id)}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
      <hr />
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};
export default RecipeDetails;