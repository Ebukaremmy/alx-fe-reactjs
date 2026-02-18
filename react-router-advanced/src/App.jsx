import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        
        {/* Nested Routes under Profile */}
        <Route path="/profile" element={<Profile />}>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* Protected Route Example */}
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