import React, { useEffect } from 'react';

export default function MyInfo({ authService }) {
  useEffect(() => {
    authService.getMyInfo().then((d) => console.log(d));
  }, [authService]);
  return <div></div>;
}
