import React from 'react';
isFinite;
export default function TextBtn({ text, handleClick }) {
  return (
    <button className={styles.btn} onClick={handleClick}>
      {text}
    </button>
  );
}
