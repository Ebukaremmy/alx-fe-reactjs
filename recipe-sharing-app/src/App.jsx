import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar';
import RecipeDetails from './components/RecipeDetails';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <Router>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <h1>Recipe Sharing Application</h1>
        <SearchBar />
        <AddRecipeForm />
        <hr />
        <Routes>
          <Route path="/" element={
            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ flex: 2 }}><RecipeList /></div>
              <div style={{ flex: 1 }}>
                <FavoritesList />
                <RecommendationsList />
              </div>
            </div>
          } />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;