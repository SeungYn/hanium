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

  userInfo.values().map((i) => console.log(i));
  useEffect(() => {
    authService.getMyInfo().then((d) => console.log(d));
  }, [authService]);
  return (
    userInfo && (
      <>
        <section className={styles.container}>
          <p className='content'></p>
          <p className='content'></p>
          <p className='content'></p>
          <p className='content'></p>
          <p className='content'></p>
        </section>
      </>
    )
  );
}
