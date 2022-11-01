import React from 'react';
import styles from './GroupCategory.module.css';
import { FaUserFriends } from 'react-icons/fa';

export const GroupCategory = ({ type, types, onTypeChange }) => (
  <nav className={styles.nav}>
    {types.map((t, i) => (
      <button key={i} onClick={() => onTypeChange(t)} className={styles.type}>
        <i>아이콘</i>
        <span
          className={`${styles.typeName} ${
            types.koName === t.koName && styles.selected
          }`}
        >
          {t.koName}
        </span>
      </button>
    ))}
  </nav>
);
