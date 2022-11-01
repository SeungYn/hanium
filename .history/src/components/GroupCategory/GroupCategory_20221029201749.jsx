import React from 'react';
import styles from './GroupCategory.module.css';

export const GroupCategory = ({ type, types, onTypeChange }) => (
  <nav className={styles.nav}>
    {types.map((t, i) => (
      <button key={i} onClick={() => onTypeChange(t)} className={styles.type}>
        {t.icon}
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
