import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import recipesData from '../data.json';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe with matching ID
    const foundRecipe = recipesData.find(r => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  // Loading state
  if (!recipe) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-xl text-gray-600">Loading recipe...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            to="/" 
            className="text-blue-600 hover:text-blue-700 font-medium mb-4 inline-block"
          >
            ← Back to Recipes
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mt-2">{recipe.title}</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Recipe Image */}
        <div className="mb-8">
          <img 
            src={recipe.image} 
            alt={recipe.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Summary */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">About this recipe</h2>
          <p className="text-gray-700 text-lg leading-relaxed">{recipe.summary}</p>
        </div>

        {/* Ingredients Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ingredients</h2>
          <ul className="space-y-2">
            {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
              <li 
                key={index}
                className="flex items-start"
              >
                <span className="text-blue-600 mr-3 mt-1">•</span>
                <span className="text-gray-700">{ingredient}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Instructions Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cooking Instructions</h2>
          <ol className="space-y-4">
            {recipe.instructions && recipe.instructions.map((step, index) => (
              <li 
                key={index}
                className="flex items-start"
              >
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 flex-shrink-0">
                  {index + 1}
                </span>
                <p className="text-gray-700 pt-1">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </main>
    </div>
  );
}

export default RecipeDetail;