import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],

  // TASK 0 & 1: Manage the list
  addRecipe: (newRecipe) => set((state) => ({ 
    recipes: [...state.recipes, newRecipe] 
  })),
  
  deleteRecipe: (recipeId) => set((state) => ({
    recipes: state.recipes.filter(recipe => recipe.id !== recipeId)
  })),

  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),

  // TASK 2: Search Logic
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      ),
    }));
  },

  // TASK 3: Favorites & Recommendations
  addFavorite: (recipeId) => set((state) => ({
    favorites: [...state.favorites, recipeId]
  })),

  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  generateRecommendations: () => set((state) => {
    // Simple logic: recommend recipes that are NOT in favorites
    const recommended = state.recipes.filter(recipe =>
      !state.favorites.includes(recipe.id) && Math.random() > 0.4
    );
    return { recommendations: recommended };
  }),
}));

export { useRecipeStore };