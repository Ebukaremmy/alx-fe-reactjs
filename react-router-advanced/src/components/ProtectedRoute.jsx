import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // A simple boolean to simulate authentication
  const isAuthenticated = false; 

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;