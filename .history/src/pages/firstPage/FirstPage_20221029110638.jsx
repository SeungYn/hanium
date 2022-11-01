import React, { useState } from 'react';
import { GroupCategory } from '../../components/GroupCategory/GroupCategory';
import styles from './FirstPage.module.css';

const types = [
  { en: 'study', ko: '공부' },
  { en: 'hobby', ko: '취미' },
  { en: 'friend', ko: '친구' },
];
export default function FirstPage() {
  const [filterType, setFilterType] = useState(types[0]);
  return (
    <main className={styles.body}>
      <GroupCategory
        type={filterType}
        types={types}
        onTypeChange={(filter) => setFilterType(filter)}
      />
    </main>
  );
}
