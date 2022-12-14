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
  const [chats, setChats] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    chatService.onSend('/pub/club/message', {
      roomId: groupInfo.chatRoomId,
      sender: user.nickname,
      message: chatInput,
    });
    setChatInput('');
  };

  const onChatCreate = (data) => {
    const { chatId, sender, message, sendTime } = data;
    setChats((chats) => [...chats, { chatId, sender, message, sendTime }]);
  };

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
    chatService.getChats(groupInfo.clubId, 0).then((data) => {
      console.log(data);
      setChats([...data.chats]);
    });

    return () => {
      console.log('clear');
      chatService.onDisConnect(() => setStompConnectState(false));
    };
  }, []);

  //구독하기
  useEffect(() => {
    if (!stompConnectState) {
      return;
    }
    console.log(stompConnectState);
    let onDisSubscribeChat = () => {
      console.log('구독종료');
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
