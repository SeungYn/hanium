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
            style={({ isActive }) =>
              isActive ? styles.active : styles.unactive
            }
          >
            <AiOutlineHome />
            <span className={styles.text}>홈</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/1'
            style={({ isActive }) =>
              isActive ? `${styles.active} ` : styles.unactive
            }
          >
            <BsList />
            <span className={styles.text}>미정</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/2'
            style={({ isActive }) =>
              isActive ? styles.active : styles.unactive
            }
          >
            <IoChatbubbleOutline />
            <span className={styles.text}>채팅</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/3'
            style={({ isActive }) =>
              isActive ? styles.active : styles.unactive
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
