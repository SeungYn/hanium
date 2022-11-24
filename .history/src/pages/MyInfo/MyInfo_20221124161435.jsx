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

  console.log(Object.values(userInfo));
  useEffect(() => {
    authService.getMyInfo().then((d) => console.log(d));
  }, [authService]);
  return (
    userInfo && (
      <>
        <section className={styles.container}>
          <p className='content'>{`닉네임 : ${userInfo.nickname}`}</p>
          <p className='content'>{`이메일 : ${userInfo.email}`}</p>
          <p className='content'>{`대학교 : ${userInfo.university}`}</p>
          <p className='content'>{`테스트과 : ${userInfo.dept}`}</p>
          <p className='content'>{`학번 : ${userInfo.sno}`}</p>
        </section>
      </>
    )
  );
}
