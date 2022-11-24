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
          {Object.values(userInfo).map((v) => (
            <p className='content'>{v}</p>
          ))}
        </section>
        <p className='content'>{`닉네임 : ${user.nickname}`}</p>
        <p className='content'>{`이메일 : ${user.email}`}</p>
        <p className='content'>{`대학교 : ${user.university}`}</p>
        <p className='content'>{`테스트과 : ${user.dept}`}</p>
        <p className='content'>{`학번 : ${user.sno}`}</p>
      </>
    )
  );
}
