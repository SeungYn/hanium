import React, { useEffect, useState } from 'react';
import styles from './MyInfo.module.css';

export default function MyInfo({ authService }) {
  const [userInfo, setUserInfo] = useState({
    nickname: '테스트',
    email: 'test@test',
    university: '테스트대학교',
    dept: '테스트과',
    sno: 17,
  });
  useEffect(() => {
    authService.getMyInfo().then((d) => console.log(d));
  }, [authService]);
  return (
    <>
      <section className={styles.container}></section>
    </>
  );
}
