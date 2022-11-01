import React, { useEffect, useState } from 'react';
import { GroupCategory } from '../../components/GroupCategory/GroupCategory';
import styles from './FirstPage.module.css';

const types = [
  { enName: 'study', koName: '공부' },
  { enName: 'hobby', koName: '취미' },
  { enName: 'friend', koName: '친구' },
];
export default function FirstPage({ groupService }) {
  const [filterType, setFilterType] = useState(types[0]);
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    console.log(filterType);
  }, []);
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
