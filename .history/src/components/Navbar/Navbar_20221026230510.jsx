import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import { AiOutlineHome } from 'react-icons/ai';
import { BsList, BsPerson } from 'react-icons/bs';
import { IoChatbubbleOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <IconContext.Provider value={{ className: styles.reactIcon }}>
        <div className={styles.navMenu}>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive
                ? `${styles.active} ${styles.link}`
                : `${styles.unactive} ${styles.link}`
            }
          >
            <AiOutlineHome />
            <span className={styles.text}>홈</span>
          </NavLink>

          <NavLink
            to='/1'
            className={({ isActive }) =>
              isActive
                ? `${styles.active} ${styles.link}`
                : `${styles.unactive} ${styles.link}`
            }
          >
            <BsList />
            <span className={styles.text}>미정</span>
          </NavLink>

          <NavLink
            to='/2'
            className={({ isActive }) =>
              isActive
                ? `${styles.active} ${styles.link}`
                : `${styles.unactive} ${styles.link}`
            }
          >
            <IoChatbubbleOutline />
            <span className={styles.text}>채팅</span>
          </NavLink>

          <NavLink
            to='/3'
            className={({ isActive }) =>
              isActive
                ? `${styles.active} ${styles.link}`
                : `${styles.unactive} ${styles.link}`
            }
          >
            <BsPerson />
            <span className={styles.text}>내정보</span>
          </NavLink>
        </div>
        <button className={styles.btn}>
          <BsList />
        </button>
      </IconContext.Provider>
    </nav>
  );
}
