import React, { useEffect, useState } from 'react';
import styles from './MyInfo.module.css';

export default function MyInfo({ authService }) {
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    authService.getMyInfo().then((d) => console.log(d));
  }, [authService]);
  return <section className={styles.container}></section>;
}
