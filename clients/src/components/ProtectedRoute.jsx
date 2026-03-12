import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  // Grab the user object from Redux
  const user = useSelector((state) => state.user);

  // If the user does not exist, redirect them to the Login page
  if (!user) {
    return <Navigate to="/Login" replace />;
  }

  // If they are logged in, render the component they requested
  return children;
};

export default ProtectedRoute;