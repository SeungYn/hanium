import React from 'react';
import { IconContext } from 'react-icons';
import styles from './GroupCategory.module.css';

export const GroupCategory = ({ type, types, onTypeChange }) => (
  <nav className={styles.nav}>
    {types.map((t, i) => (
      <div key={i} className={styles.type}>
        <button
          onClick={() => onTypeChange(t)}
          className={`${styles.typeBtn} ${
            type.koName === t.koName ? styles.avtive : styles.unActive
          }`}
        >
          <IconContext.Provider value={{ className: styles.reactIcon }}>
            {t.icon}
          </IconContext.Provider>
        </button>

        <span
          className={`${styles.typeName} ${
            types.koName === t.koName && styles.selected
          }`}
        >
          {t.koName}
        </span>
      </div>
    ))}
  </nav>
);
