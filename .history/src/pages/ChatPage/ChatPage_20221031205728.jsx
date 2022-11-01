import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ChatHeader from '../../components/Chat/ChatHeader/ChatHeader';
import ChatSideBar from '../../components/Chat/ChatSideBar/ChatSideBar';
import { useAuth } from '../../context/AuthContext';
import styles from './ChatPage.module.css';

export default function ChatPage({ chatService }) {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [groupInfo, setGroupInfo] = useState({ ...state?.data });
  const { error, serError } = useAuth();
  const [sideBarToggle, setSideBarToggle] = useState(false);
  const [members, setMembers] = useState([]);

  const [chats, setChats] = useState([
    { id: 1, nickname: '123', chat: '123', time: 123 },
    { id: 13, nickname: '123', chat: '123', time: 123 },
    { id: 14, nickname: '123', chat: '123', time: 123 },
    { id: 12, nickname: '123', chat: '123', time: 1231 },
    { id: 11, nickname: '123', chat: '123', time: 1231 },
    { id: 451, nickname: '123', chat: '123', time: 1231 },
    { id: 71, nickname: '123', chat: '123', time: 1231 },
    { id: 1, nickname: '123', chat: '123', time: 123 },
    { id: 1, nickname: '123', chat: '123', time: 123 },
    { id: 1, nickname: '3', chat: '123', time: 123 },
    { id: 1, nickname: '3', chat: '123', time: 123 },
    { id: 1, nickname: '3', chat: '123', time: 123 },
    { id: 1, nickname: '3', chat: '123', time: 123 },
    { id: 1, nickname: '3', chat: '123', time: 123 },
    { id: 1, nickname: '3', chat: '123', time: 123 },
    { id: 1, nickname: '3', chat: '123', time: 123 },
  ]);
  //스텀프 연결 플래그
  const [stompConnectState, setStompConnectState] = useState(false);
  useEffect(() => {
    if (!state) {
      navigate(-1);
    }
    console.log(groupInfo);
    chatService
      .getChats(groupInfo.clubId, 0)
      .then((data) => setChats([...data.chats]));
    //채팅방 연결
    chatService.onConnect(() => setStompConnectState(true));
    //chatService.getChats(groupInfo.clubId, 0).then((data) => setChats([...data]));
    return () => {
      console.log('clear');
      chatService.onDisConnect(() => setStompConnectState(false));
    };
  }, []);
  return (
    <main className={styles.container}>
      <ChatSideBar
        members={[]}
        sideBarToggle={sideBarToggle}
        sideBarToggleHandler={() => setSideBarToggle(false)}
      />
      <ChatHeader sideBarToggleHandler={() => setSideBarToggle((t) => !t)} />
      <ul className={styles.chats}></ul>
      <input type='text' className={styles.input} />
    </main>
  );
}
