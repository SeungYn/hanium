import React from 'react';
import styles from './Header.module.css';
import { BsSearch } from 'react-icons/bs';
import { IconContext } from 'react-icons';

export default function Header({ name }) {
  return (
    <header className={styles.header}>
      <h3 className={styles.title}>{name}</h3>
      <button>
        <IconContext value={{ className: styles.icon }}>
          <BsSearch />
        </IconContext>
      </button>
    </header>
  );
}
