import React from 'react';
import styles from './Header.module.css';
import { BsSearch } from 'react-icons/bs';
import { IconContext } from 'react-icons';

export default function Header({ name }) {
  return (
    <header className={styles.header}>
      <h3 className={styles.title}>{name}</h3>
      <button className={styles.searchBtn}>
        <IconContext.Provider value={{ className: styles.icon }}>
          <BsSearch />
        </IconContext.Provider>
      </button>
    </header>
  );
}
