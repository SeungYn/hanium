import React from 'react';
import { GroupCategory } from '../../components/GroupCategory/GroupCategory';
import styles from './FirstPage.module.css';
export default function FirstPage() {
  return (
    <main className={styles.body}>
      <GroupCategory />
    </main>
  );
}
