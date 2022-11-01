import React from 'react';
import { v4 as uuidV4 } from 'uuid';
import styles from './Groups.module.css';

export default function Groups({ groups }) {
  return (
    <ul className={styles.group}>
      {groups.map((group) => (
        <li key={group.id} onClick={() => console.log(group.id, 'join!!')}>
          <p className={styles.title}>{group.clubName}</p>
          <p
            className={styles.personCount}
          >{`인원 수 : ${group.currentCount}/${group.maximumCount}`}</p>
        </li>
      ))}
    </ul>
  );
}
