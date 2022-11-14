import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import ReadPopup from '../components/ReadPopup/ReadPopup';
import TradeCategory from '../components/Trade/TradeCategory/TradeCategory';
import { useAuth } from '../context/AuthContext';

export default function Root({ routes }) {
  const location = useLocation();
  console.log(location.pathname);
  let { name } = routes.find((r) => r.path === location.pathname) ?? {};
  name = location.pathname.includes('detail') && 'detail';
  console.log(name !== 'detail');
  const { nodeRef } = routes.find((r) => r.path === location.pathname) ?? {};
  const { error, setError } = useAuth();

  return (
    <>
      {error && (
        <ReadPopup content={error} onHandler={setError} type={'error'} />
      )}
      {name !== ('채팅' || '그룹검색' || 'detail') && <Header name={name} />}
      {name === '장터' && <TradeCategory />}
      <Outlet />
      {name !== '채팅' && <Navbar />}
    </>
  );
}
