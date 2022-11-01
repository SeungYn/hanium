import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ChatHeader from '../../components/Chat/ChatHeader/ChatHeader';
import ChatSideBar from '../../components/Chat/ChatSideBar/ChatSideBar';
import { useAuth } from '../../context/AuthContext';
import styles from './ChatPage.module.css';

import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

export default function ChatPage({ chatService }) {
  const so = new SockJS('https://2e9fb6909c9043.lhr.life/ws-stomp');
  const st = new Stomp.over(so);
  st.connect(
    {
      Authorization: 'Bearer ' + this.getAccessToken(),
    },
    (s) => {
      console.log('서버와 연결되었습니다.');

      console.log(s);
    },
    (e) => {
      console.log(e);
      console.log('서버와 연결이 안됩니다.');
    }
  );
  const navigate = useNavigate();
  const { state } = useLocation();
  const [groupInfo, setGroupInfo] = useState({ ...state?.data });
  const { error, serError, user } = useAuth();
  const [sideBarToggle, setSideBarToggle] = useState(false);
  const [members, setMembers] = useState([]);

  const [chats, setChats] = useState([
    { id: 1, nickname: '123', chat: '123', time: 123 },
    { id: 13, nickname: '123', chat: '123', time: 123 },
    { id: 14, nickname: '123', chat: '123', time: 123 },
    { id: 12, nickname: '123', chat: '123', time: 1231 },
    { id: 11, nickname: '123', chat: '123', time: 1231 },
    { id: 451, nickname: '123', chat: '123', time: 1231 },
    { id: 31, nickname: '123', chat: '123', time: 1231 },
    { id: 41, nickname: '123', chat: '123', time: 123 },
    { id: 61, nickname: '123', chat: '123', time: 123 },
    { id: 9871, nickname: '3', chat: '123', time: 123 },
    { id: 7651, nickname: '3', chat: '123', time: 123 },
    { id: 761, nickname: '3', chat: '123', time: 123 },
    { id: 431, nickname: '3', chat: '123', time: 123 },
    { id: 4321, nickname: '1', chat: '123', time: 123 },
    { id: 32321, nickname: '1', chat: '123', time: 123 },
    { id: 6541, nickname: '1', chat: '123', time: 123 },
  ]);
  //스텀프 연결 플래그
  const [stompConnectState, setStompConnectState] = useState(false);
  // useEffect(() => {
  //   if (!state) {
  //     navigate(-1);
  //   }
  //   console.log(groupInfo);
  //   chatService
  //     .getChats(groupInfo.clubId, 0)
  //     .then((data) => setChats([...data.chats]));
  //   //채팅방 연결
  //   chatService.onConnect(() => setStompConnectState(true));
  //   //chatService.getChats(groupInfo.clubId, 0).then((data) => setChats([...data]));
  //   return () => {
  //     console.log('clear');
  //     chatService.onDisConnect(() => setStompConnectState(false));
  //   };
  // }, []);

  return (
    <main className={styles.container}>
      <ChatSideBar
        members={[]}
        sideBarToggle={sideBarToggle}
        sideBarToggleHandler={() => setSideBarToggle(false)}
      />
      <ChatHeader sideBarToggleHandler={() => setSideBarToggle((t) => !t)} />
      <ul className={styles.chats}>
        {chats.map((c, i) => {
          console.log(user.nickname === c.nickname);
          return (
            <li
              className={`${styles.chat} ${
                user.nickname === c.nickname && styles.chat__reverse
              }`}
            >
              {i === 0 && <p className={styles.nickname}>{c.nickname}</p>}
              {/* 이전 채팅 시간이랑 현재 채팅이 다르거나 닉네임이 다르면 닉네임 출력 */}
              {i !== 0 &&
                (c.time != chats[i - 1].time ||
                  c.nickname !== chats[i - 1].nickname) && (
                  <p className={styles.nickname}>{c.nickname}</p>
                )}

              <div
                className={`${styles.content} ${
                  user.nickname === c.nickname && styles.content__reverse
                }`}
              >
                <p className={styles.message}>{c.chat}</p>
                {/* 전 시간이랑 같고 다음 채팅 닉네임이랑 다르면 시간 출력 */}
                {i !== 0 &&
                  i < chats.length - 1 &&
                  c.time == chats[i - 1].time &&
                  (c.time !== chats[i + 1].time ||
                    c.nickname !== chats[i + 1].nickname) && (
                    <p
                      className={`${styles.time} ${
                        user.nickname === c.nickname && styles.chat__reverse
                      }`}
                    >
                      {c.time}
                    </p>
                  )}
                {i === chats.length - 1 && (
                  <p
                    className={`${styles.time} ${
                      user.nickname === c.nickname && styles.content__reverse
                    }`}
                  >
                    {c.time}
                  </p>
                )}
              </div>
            </li>
          );
        })}
      </ul>
      <input type='text' className={styles.input} />
    </main>
  );
}
