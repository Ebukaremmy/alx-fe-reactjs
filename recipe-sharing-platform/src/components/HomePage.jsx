import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import recipesData from '../data.json';

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Load recipes from data.json when component mounts
    setRecipes(recipesData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Recipe Sharing Platform</h1>
          <p className="mt-2 text-gray-600">Discover and share amazing recipes</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Add Recipe Button */}
        <div className="mb-8">
          <Link 
            to="/add-recipe"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Add New Recipe
          </Link>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <Link 
              key={recipe.id} 
              to={`/recipe/${recipe.id}`}
              className="block"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                {/* Recipe Image */}
                <img 
                  src={recipe.image} 
                  alt={recipe.title}
                  className="w-full h-48 object-cover"
                />
                
                {/* Recipe Content */}
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {recipe.title}
                  </h2>
                  <p className="text-gray-600 line-clamp-3">
                    {recipe.summary}
                  </p>
                  
                  {/* Read More Link */}
                  <div className="mt-4">
                    <span className="text-blue-600 font-medium hover:text-blue-700">
                      View Recipe →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {recipes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No recipes found. Add your first recipe!</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default HomePage;