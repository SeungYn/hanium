import React from 'react';
import styles from './GroupCategory.module.css';
export const GroupCategory = ({ type, types, onTypeChange }) => (
  <nav className={styles.nav}>
    {types.map((t) => (
      <button key={t} onClick={() => onTypeChange()} className={styles.type}>
        <i>아이콘</i>
        <span
          className={`${styles.typeName} ${
            type.koName === t.koName && styles.selected
          }`}
        >
          {t.koName}
        </span>
      </button>
    ))}
  </nav>
);
