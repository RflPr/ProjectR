// PrivateRoute.js
import React from 'react';
import { useAuth } from './authContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Carregando...</div>;
  }

  return user ? element : <Navigate to="/" />;
};

export default PrivateRoute;

