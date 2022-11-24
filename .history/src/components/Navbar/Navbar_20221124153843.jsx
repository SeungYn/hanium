import React, { useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { BsList, BsPerson } from 'react-icons/bs';
import { IoChatbubbleOutline } from 'react-icons/io5';
import { RiShoppingBag3Line } from 'react-icons/ri';
import { IconContext } from 'react-icons';
import { BiCommentDetail } from 'react-icons/bi';
import { GrGroup } from 'react-icons/gr';

const contents = [
  {
    path: '/',
    name: '홈',
    iconComponent: (active) => (
      <AiOutlineHome className={active ? styles.active : styles.unactive} />
    ),
  },
  // { path: '/', name: '그룹', iconComponent: <BsList /> },
  {
    path: '/myGroup',
    name: '내 그룹',
    iconComponent: (active) => (
      <GrGroup className={active ? styles.active : styles.unactive} />
    ),
  },
  {
    path: '/trade/trade',
    name: '장터',
    iconComponent: (active) => (
      <RiShoppingBag3Line
        className={active ? styles.active : styles.unactive}
      />
    ),
  },
  {
    path: '/trade/noteList',
    name: '쪽지함',

    iconComponent: (active) => (
      <AiOutlineMail className={active ? styles.active : styles.unactive} />
    ),
  },
  {
    path: '/myInfo',
    name: '내 정보',
    iconComponent: (active) => (
      <BsPerson className={active ? styles.active : styles.unactive} />
    ),
  },
];

export default function Navbar() {
  //버튼 클릭시 넷바 위로 나타내기
  const navMenuRef = useRef();
  const btnRef = useRef();
  const [navToggle, setNavToggle] = useState(false);

  const location = useLocation();

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
                path === location.pathname
                  ? `${styles.active} ${styles.link}`
                  : `${styles.unactive} ${styles.link}`
              }
            >
              {iconComponent(path === location.pathname)}
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
