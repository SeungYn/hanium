import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import ReadPopup from '../components/ReadPopup/ReadPopup';
import { useAuth } from '../context/AuthContext';

export default function Root({ routes }) {
  const location = useLocation();
  console.log(routes);
  const { name } = routes.find((r) => r.path === location.pathname) ?? {};
  const { nodeRef } = routes.find((r) => r.path === location.pathname) ?? {};
  const { error, setError } = useAuth();
  console.log(error);
  return (
    <>
      {error && (
        <ReadPopup content={error} onHandler={setError} type={'error'} />
      )}
      {name !== ('채팅' && '그룹검색') && <Header name={name} />}
      <Outlet />
      {name !== '채팅' && <Navbar />}
    </>
  );
}
