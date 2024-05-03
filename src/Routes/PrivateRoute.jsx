import useAuth from "../customHook/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <span className="loading loading-bars loading-lg"></span>;
  }

  if (user?.email) {
    return children;
  }
  return <Navigate to="/login" state={location.pathname} replace />;
};

export default PrivateRoute;
