import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ChatHeader from '../../components/Chat/ChatHeader/ChatHeader';
import ChatSideBar from '../../components/Chat/ChatSideBar/ChatSideBar';
import { useAuth } from '../../context/AuthContext';
import styles from './ChatPage.module.css';

export default function ChatPage({ chatService }) {
  const { state } = useLocation();
  const { error, serError } = useAuth();
  const navigate = useNavigate();
  const [sideBarToggle, setSideBarToggle] = useState(false);
  const [members, setMembers] = useState([
    { nickname: '1' },
    { nickname: '2' },
    { nickname: '3' },
  ]);

  const [chats, setChats] = useState([{}]);
  useEffect(() => {
    //채팅방 연결
    chatService.onConnect();

    return () => {
      chatService.onDisConnect();
    };
  }, []);
  return (
    <main className={styles.container}>
      <ChatSideBar
        members={members}
        sideBarToggle={sideBarToggle}
        sideBarToggleHandler={() => setSideBarToggle(false)}
      />
      <ChatHeader sideBarToggleHandler={() => setSideBarToggle((t) => !t)} />
      <ul className={styles.chats}></ul>
      <input type='text' className={styles.input} />
    </main>
  );
}
