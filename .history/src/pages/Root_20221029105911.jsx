import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';

export default function Root({ routes }) {
  const location = useLocation();
  const route = routes.find((r) => r.path === location.pathname);

  return (
    <>
      <Header name={route.name} />
      <Outlet />
      <Navbar />
    </>
  );
}
