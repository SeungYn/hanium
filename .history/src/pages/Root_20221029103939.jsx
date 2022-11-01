import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

export default function Root({ routes }) {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Outlet />
      <Navbar />
    </>
  );
}