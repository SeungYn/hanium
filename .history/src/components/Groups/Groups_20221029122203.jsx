import React from 'react';
import { v4 as uuidV4 } from 'uuid';
import styles from './Groups.module.css';

export default function Groups({ groups }) {
  return (
    <ul className={styles.group}>
      {groups.map((group) => (
        <li key={group.id} onClick={()=>console.log(group.)}>
          <p className={styles.title}>{group.clubName}</p>
          <p
            className={styles.personCount}
          >{`μΈμ μ : ${group.currentCount}/${group.maximumCount}`}</p>
        </li>
      ))}
    </ul>
  );
}
