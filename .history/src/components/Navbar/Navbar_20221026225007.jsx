import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import { AiOutlineHome } from 'react-icons/ai';
import { BsList, BsPerson } from 'react-icons/bs';
import { IoChatbubbleOutline } from 'react-icons/io5';
export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive
                ? `${styles.active} ${styles.link}`
                : `${styles.active} ${styles.link}`
            }
          >
            <AiOutlineHome />
            <span className={styles.text}>홈</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/1'
            className={({ isActive }) =>
              isActive
                ? `${styles.active} ${styles.link}`
                : `${styles.active} ${styles.link}`
            }
          >
            <BsList />
            <span className={styles.text}>미정</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/2'
            className={({ isActive }) =>
              isActive
                ? `${styles.active} ${styles.link}`
                : `${styles.active} ${styles.link}`
            }
          >
            <IoChatbubbleOutline />
            <span className={styles.text}>채팅</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/3'
            className={({ isActive }) =>
              isActive
                ? `${styles.active} ${styles.link}`
                : `${styles.active} ${styles.link}`
            }
          >
            <BsPerson />
            <span className={styles.text}>내정보</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
