import React, { useEffect } from 'react';
import styles from './MyInfo.module.css';

export default function MyInfo({ authService }) {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    authService.getMyInfo().then((d) => console.log(d));
  }, [authService]);
  return <section className={styles.container}></section>;
}
