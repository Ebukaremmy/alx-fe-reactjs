import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuthenticated = true; // simulate login

  return isAuthenticated ? children : <Navigate to="/" />;
}
