import React from 'react';
import { v4 as uuidV4 } from 'uuid';
import styles from './Groups.module.css';

export default function Groups({ groups }) {
  return (
    <ul className={styles.group}>
      {groups.map((group) => (
        <li key={uuidV4()}>
          <p className={styles.title}>{group.clubName}</p>
          <p
            className={styles.personCount}
          >{`인원 수 : ${group.currentCount}/${group.maximumCount}`}</p>
        </li>
      ))}
    </ul>
  );
}
