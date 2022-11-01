import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ChatHeader from '../../components/Chat/ChatHeader/ChatHeader';
import ChatSideBar from '../../components/Chat/ChatSideBar/ChatSideBar';
import { useAuth } from '../../context/AuthContext';
import styles from './ChatPage.module.css';

export default function ChatPage({ chatService }) {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [groupInfo, setGroupInfo] = useState({});
  const { error, serError } = useAuth();
  const [sideBarToggle, setSideBarToggle] = useState(false);
  const [members, setMembers] = useState([]);

  const [chats, setChats] = useState([{}]);
  //스텀프 연결 플래그
  const [stompConnectState, setStompConnectState] = useState(false);
  useEffect(() => {
    if (!state) {
      navigate(-1);
    }
    setGroupInfo({ ...state.data });
    //채팅방 연결
    chatService.onConnect(() => setStompConnectState(true));
    //chatService.getChats(groupInfo.clubId, 0).then((data) => setChats([...data]));
    return () => {
      chatService.onDisConnect(() => setStompConnectState(false));
    };
  }, []);
  return (
    <main className={styles.container}>
      <ChatSideBar
        members={[...groupInfo.memberInfoDtos]}
        sideBarToggle={sideBarToggle}
        sideBarToggleHandler={() => setSideBarToggle(false)}
      />
      <ChatHeader sideBarToggleHandler={() => setSideBarToggle((t) => !t)} />
      <ul className={styles.chats}></ul>
      <input type='text' className={styles.input} />
    </main>
  );
}
