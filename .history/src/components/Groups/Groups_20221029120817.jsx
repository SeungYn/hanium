import React from 'react';
import styles from './Groups.module.css';
export default function Groups({ groups }) {
  return (
    <ul className={styles.group}>
      {groups.map((group) => (
        <li>
          <p className={styles.title}>{group.clubName}</p>
          <p
            className={styles.personCount}
          >{`인원 수 : ${group.currentCount}/${group.maximumCount}`}</p>
        </li>
      ))}
    </ul>
  );
}
