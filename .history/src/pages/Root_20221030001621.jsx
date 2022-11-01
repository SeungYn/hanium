import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import { useAuth } from '../context/AuthContext';

export default function Root({ routes }) {
  const location = useLocation();
  const route = routes.find((r) => r.path === location.pathname);
  const { error, setError } = useAuth();

  return (
    <>
      <Header name={route.name} />
      <Outlet />
      <Navbar />
    </>
  );
}