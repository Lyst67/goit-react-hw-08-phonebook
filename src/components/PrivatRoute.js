import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLogedIn } from 'redux/auth/auth-selectors';

export const PrivatRoute = ({ children }) => {
  const isLogedIn = useSelector(selectIsLogedIn);
  return isLogedIn ? children : <Navigate to="/login" />;
};
