import React from 'react';
import { IconContext } from 'react-icons';
import styles from './IconBtn.module.css';

export default function IconBtn({ children }) {
  return (
    <button>
      <IconContext value={styles.icon}>{children}</IconContext>
    </button>
  );
}
