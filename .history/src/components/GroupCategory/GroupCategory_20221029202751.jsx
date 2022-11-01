import React from 'react';
import { IconContext } from 'react-icons';
import styles from './GroupCategory.module.css';

export const GroupCategory = ({ type, types, onTypeChange }) => (
  <nav className={styles.nav}>
    {types.map((t, i) => (
      <div className={styles.type}>
        <button
          key={i}
          onClick={() => onTypeChange(t)}
          className={styles.typeBtn}
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
