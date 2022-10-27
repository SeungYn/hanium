import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import { AiOutlineHome } from 'react-icons/ai';
import { BsList } from 'react-icons/bs';
import { IoChatbubbleOutline } from 'react-icons/io';
export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <NavLink to='/' style={({ isActive }) => styles.navlink}>
            <AiOutlineHome />
          </NavLink>
          <BsList />
          <IoChatbubbleOutline />
        </li>
      </ul>
    </nav>
  );
}
