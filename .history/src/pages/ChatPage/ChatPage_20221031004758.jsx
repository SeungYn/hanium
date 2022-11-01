import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ChatHeader from '../../components/Chat/ChatHeader/ChatHeader';
import ChatSideBar from '../../components/Chat/ChatSideBar/ChatSideBar';
import styles from './ChatPage.module.css';

export default function ChatPage() {
  const { state } = useLocation();
  const [sideBarToggle, setSideBarToggle] = useState(false);
  const [members, setMembers] = useState([
    { nickname: '1' },
    { nickname: '2' },
    { nickname: '3' },
  ]);
  return (
    <main className={styles.container}>
      <ChatSideBar
        members={members}
        sideBarToggle={sideBarToggle}
        sideBarToggleHandler={() => setSideBarToggle(false)}
      />
      <ChatHeader sideBarToggleHandler={() => setSideBarToggle((t) => !t)} />

      <input type='text' className={styles.input} />
    </main>
  );
}
