import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import ReadPopup from '../components/ReadPopup/ReadPopup';
import { useAuth } from '../context/AuthContext';

export default function Root({ routes }) {
  const location = useLocation();
  const { path, name } = routes.find((r) => r.path === location.pathname);
  const { nodeRef } = routes.find((r) => r.path === location.pathname) ?? {};
  const { error, setError } = useAuth();
  console.log(error);
  return (
    <>
      {error && (
        <ReadPopup content={error} onHandler={setError} type={'error'} />
      )}
      <Header name={name} />
      <Outlet />
      <Navbar />
    </>
  );
}
