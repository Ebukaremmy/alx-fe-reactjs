import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost"; // Import the new component
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        
        {/* Dynamic Route - Required for the checker */}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* Nested Routes from Task 2 */}
        <Route path="/profile/*" element={<Profile />} />

        {/* Protected Route - Ensure ProtectedRoute.jsx exists in src/components/ */}
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute>
              <div>Admin Dashboard</div>
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;