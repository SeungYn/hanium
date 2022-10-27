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
          <NavLink to='/' style={({ isActive }) => styles.navlink}>
            <AiOutlineHome />
          </NavLink>
        </li>
        <li>
          <NavLink to='/1' style={({ isActive }) => styles.navlink}>
            <BsList />
          </NavLink>
        </li>
        <li>
          <NavLink to='/2' style={`${({ isActive }) => styles.navlink}`}>
            <IoChatbubbleOutline />
          </NavLink>
        </li>
        <li>
          <NavLink to='/3' style={({ isActive }) => styles.navlink}>
            <BsPerson />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
