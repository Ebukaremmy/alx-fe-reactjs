import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./Profile";
import Home from "./Home";
import BlogPost from "./BlogPost";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/profile">Profile</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
