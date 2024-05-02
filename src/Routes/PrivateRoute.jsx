import React from "react";
import useAuth from "../customHook/useAuth";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <span className="loading loading-bars loading-lg"></span>;
  }

  if (user?.email) {
    return children;
  }
  return <Navigate to="/login" replace />;
};

export default PrivateRoute;
