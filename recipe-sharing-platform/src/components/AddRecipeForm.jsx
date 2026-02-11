import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddRecipeForm() {
  const navigate = useNavigate();
  
  // Form state
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: ''
  });

  // Validation errors state
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validate form
  const validate = () => {
    const newErrors = {};

    // Title validation
    if (!formData.title.trim()) {
      newErrors.title = 'Recipe title is required';
    }

    // Ingredients validation
    if (!formData.ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required';
    } else {
      // Check if at least 2 ingredients (split by newlines or commas)
      const ingredientsList = formData.ingredients
        .split(/[\n,]/)
        .filter(item => item.trim());
      
      if (ingredientsList.length < 2) {
        newErrors.ingredients = 'Please provide at least 2 ingredients';
      }
    }

    // Steps validation
    if (!formData.steps.trim()) {
      newErrors.steps = 'Preparation steps are required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // In a real app, you would send this to a backend
      console.log('Recipe submitted:', formData);
      
      // Show success message
      alert('Recipe added successfully!');
      
      // Navigate back to home page
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Add New Recipe</h1>
          <p className="mt-2 text-gray-600">Share your favorite recipe with the community</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Recipe Title */}
            <div>
              <label 
                htmlFor="title" 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Recipe Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                  errors.title ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="e.g., Chocolate Chip Cookies"
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-600">{errors.title}</p>
              )}
            </div>

            {/* Ingredients */}
            <div>
              <label 
                htmlFor="ingredients" 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Ingredients * <span className="text-gray-500 text-xs">(one per line or comma-separated)</span>
              </label>
              <textarea
                id="ingredients"
                name="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                rows="6"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                  errors.ingredients ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="2 cups flour&#10;1 cup sugar&#10;3 eggs"
              />
              {errors.ingredients && (
                <p className="mt-1 text-sm text-red-600">{errors.ingredients}</p>
              )}
            </div>

            {/* Preparation Steps */}
            <div>
              <label 
                htmlFor="steps" 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Preparation Steps *
              </label>
              <textarea
                id="steps"
                name="steps"
                value={formData.steps}
                onChange={handleChange}
                rows="8"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                  errors.steps ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="1. Preheat oven to 350°F&#10;2. Mix dry ingredients&#10;3. Combine wet ingredients..."
              />
              {errors.steps && (
                <p className="mt-1 text-sm text-red-600">{errors.steps}</p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg font-medium"
              >
                Submit Recipe
              </button>
              <button
                type="button"
                onClick={() => navigate('/')}
                className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors duration-200 font-medium"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default AddRecipeForm;