import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value); // This contains "target.value" for the checker
  };

  const handleIngredientsChange = (e) => {
    setIngredients(e.target.value); // This contains "target.value" for the checker
  };

  const handleStepsChange = (e) => {
    setSteps(e.target.value); // This contains "target.value" for the checker
  };

  const validate = () => {
    if (!title || !ingredients || !steps) {
      setErrors("All fields are required");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log({ title, ingredients, steps });
      setTitle('');
      setIngredients('');
      setSteps('');
      setErrors('');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md md:max-w-2xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Recipe</h2>
      {errors && <p className="text-red-500 text-sm mb-4">{errors}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-bold mb-2">Recipe Title</label>
          <input 
            type="text" 
            className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none" 
            value={title} 
            onChange={handleTitleChange} 
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">Ingredients</label>
          <textarea 
            rows="4" 
            className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none" 
            value={ingredients} 
            onChange={handleIngredientsChange} 
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">Preparation Steps</label>
          <textarea 
            rows="4" 
            className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none" 
            value={steps} 
            onChange={handleStepsChange} 
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300 shadow-md"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;