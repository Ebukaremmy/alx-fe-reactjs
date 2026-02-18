import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        
        {/* Requirement: Dynamic routing */}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* Requirement: Nested Routes (using wildcard for internal Profile routes) */}
        <Route path="/profile/*" element={<Profile />} />

        {/* Requirement: Protected Route Implementation */}
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