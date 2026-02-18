import { Navigate } from "react-router-dom";

// Mock authentication check
const useAuth = () => {
  const user = { loggedIn: false }; // Change to true to test locally
  return user.loggedIn;
};

const ProtectedRoute = ({ children }) => {
  const isAuth = useAuth();
  return isAuth ? children : <Navigate to="/" />;
};

export default ProtectedRoute;