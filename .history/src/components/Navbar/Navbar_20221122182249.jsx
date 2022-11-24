import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import { AiOutlineHome } from 'react-icons/ai';
import { BsList, BsPerson } from 'react-icons/bs';
import { IoChatbubbleOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';

const contents = [
  { path: '/main', name: '홈', iconComponent: <AiOutlineHome /> },
  { path: '/group', name: '그룹', iconComponent: <BsList /> },
  { path: '/myGroup', name: '내 그룹', iconComponent: <BsList /> },
  { path: '/trade/trade', name: '장터', iconComponent: <BsList /> },
  { path: '/trade/noteList', name: '쪽지함', iconComponent: <BsList /> },
  { path: '/myInfo', name: '내 정보', iconComponent: <BsPerson /> },
];

export default function Navbar() {
  //버튼 클릭시 넷바 위로 나타내기
  const navMenuRef = useRef();
  const btnRef = useRef();
  const [navToggle, setNavToggle] = useState(false);

  const handleBtn = (e) => {
    setNavToggle((t) => {
      if (t) btnRef.current.style.transform = 'rotate(0deg)';
      else btnRef.current.style.transform = 'rotate(30deg)';

      return !t;
    });
  };

  return (
    <nav className={styles.nav}>
      <IconContext.Provider value={{ className: styles.reactIcon }}>
        <div
          ref={navMenuRef}
          className={`${styles.navMenu} ${
            navToggle ? styles.navAppear : styles.navDisappear
          }`}
        >
          {contents.map(({ path, name, iconComponent }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? `${styles.active} ${styles.link}`
                  : `${styles.unactive} ${styles.link}`
              }
            >
              {iconComponent}
              <span className={styles.text}>{name}</span>
            </NavLink>
          ))}
        </div>
      </IconContext.Provider>
      <button ref={btnRef} className={styles.btn} onClick={handleBtn}>
        <BsList />
      </button>
    </nav>
  );
}
