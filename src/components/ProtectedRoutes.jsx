import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'state/AuthProvider'

export default function ProtectedRoutes() {
   const { isLogged } = useAuth();
  return isLogged ? <Outlet/> : <Navigate to = "/"/>;
    
}
