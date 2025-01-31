import { useSelector } from 'react-redux';
import { isLogin } from '../features/auth/authSelector';
import { Navigate, useLocation } from 'react-router';
interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRouter = ({ children }: ProtectedRouteProps) => {
  const statusLogin = useSelector(isLogin);
  const location = useLocation();
  if (!statusLogin) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRouter;
