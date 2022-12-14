import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ChatHeader from '../../components/Chat/ChatHeader/ChatHeader';
import ChatSideBar from '../../components/Chat/ChatSideBar/ChatSideBar';
import { useAuth } from '../../context/AuthContext';
import styles from './ChatPage.module.css';
import { IconContext } from 'react-icons';
import { IoSendSharp } from 'react-icons/io5';

export default function ChatPage({ chatService }) {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [groupInfo, setGroupInfo] = useState({ ...state?.data });
  const { error, serError, user } = useAuth();
  const [sideBarToggle, setSideBarToggle] = useState(false);
  const [members, setMembers] = useState([]);
  const [chatInput, setChatInput] = useState('');
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

  const onSubmit = (e) => {
    e.preventDefault();
    chatService.onSend('/pub/club/message', {
      roomId: groupInfo.chatRoomId,
      sender: user.nickname,
      message: chatInput,
    });
    setChatInput('');
  };

  const onChatCreate = () => {};

  //????????? ?????? ?????????
  const [stompConnectState, setStompConnectState] = useState(false);
  useEffect(() => {
    if (!state) {
      navigate(-1);
    }

    console.log(groupInfo);
    chatService
      .getChats(groupInfo.clubId, 0)
      .then((data) => setChats([...data.chats]));
    //????????? ??????
    chatService.onConnect(() => setStompConnectState(true));
    chatService.getChats(groupInfo.clubId, 0).then((data) => {
      console.log(data);
      setChats([...data.chats]);
    });

    return () => {
      console.log('clear');
      chatService.onDisConnect(() => setStompConnectState(false));
    };
  }, []);

  //????????????
  useEffect(() => {
    if (!stompConnectState) {
      return;
    }
    console.log(stompConnectState);
    let onDisSubscribeChat = () => {
      console.log('????????????');
    };
    chatService.onSubscribe(groupInfo.chatRoomId, '/sub/chat/', (data) => {
      console.log(data);
      const chat = JSON.parse(data.body);
      console.log(chat);
    });

    return () => {
      onDisSubscribeChat();
    };
  }, [stompConnectState]);

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
              {/* ?????? ?????? ???????????? ?????? ????????? ???????????? ???????????? ????????? ????????? ?????? */}
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
                {/* ??? ???????????? ?????? ?????? ?????? ??????????????? ????????? ?????? ?????? */}
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
      <form onSubmit={onSubmit} className={styles.sendForm}>
        <input
          type='text'
          className={styles.input}
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
        />
        <button className={styles.sendBtn}>
          <IconContext.Provider value={{ className: styles.icon }}>
            <IoSendSharp />
          </IconContext.Provider>
        </button>
      </form>
    </main>
  );
}
