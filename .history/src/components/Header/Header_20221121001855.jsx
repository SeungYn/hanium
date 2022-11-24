import React from 'react';
import styles from './Header.module.css';
import { BsSearch } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import IconBtn from '../common/IconBtn/IconBtn';

export default function Header({ name }) {
  console.log(name);
  return (
    <header className={styles.header}>
      <h3 className={styles.title}>{name}c</h3>
      <IconBtn>
        <BsSearch />
      </IconBtn>
    </header>
  );
}
