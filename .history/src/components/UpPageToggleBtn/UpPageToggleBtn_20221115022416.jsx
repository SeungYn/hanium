import React from 'react';

export default function UpPageToggleBtn({ name, HandleClick }) {
  return (
    <button className={styles.makerBtn} onClick={() => HandleClick()}>
      {name}
    </button>
  );
}
