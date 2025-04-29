import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../App.css';

function PrivateRoute({ children }) {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default PrivateRoute;
