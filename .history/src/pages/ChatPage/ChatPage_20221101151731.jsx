import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ChatHeader from '../../components/Chat/ChatHeader/ChatHeader';
import ChatSideBar from '../../components/Chat/ChatSideBar/ChatSideBar';
import { useAuth } from '../../context/AuthContext';
import styles from './ChatPage.module.css';
import { IconContext } from 'react-icons';
import { IoSendSharp } from 'react-icons/io5';
import { parseDate } from '../../util/data';

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
      const chat = JSON.parse(data.body);
      onChatCreate(chat);
    });

    return () => {
      onDisSubscribeChat();
    };
  }, [stompConnectState]);
  console.log(user);
  return (
    <main className={styles.container}>
      <ChatSideBar
        members={groupInfo.memberInfoDtos}
        sideBarToggle={sideBarToggle}
        sideBarToggleHandler={() => setSideBarToggle(false)}
      />
      <ChatHeader sideBarToggleHandler={() => setSideBarToggle((t) => !t)} />
      <ul className={styles.chats}>
        {chats.map((c, i) => {
          const time = parseDate(c.sendTime);
          console.log(user.nickname, c.nickname);
          return (
            <li
              key={c.chatId}
              className={`${styles.chat} ${
                user.nickname === c.sender && styles.chat__reverse
              }`}
            >
              {i === 0 && <p className={styles.nickname}>{c.sender}</p>}
              {/* 이전 채팅 시간이랑 현재 채팅이 다르거나 닉네임이 다르면 닉네임 출력 */}
              {i !== 0 &&
                (parseDate(c.sendTime) != parseDate(chats[i - 1].sendTime) ||
                  c.sender !== chats[i - 1].sender) && (
                  <p className={styles.nickname}>{c.sender}</p>
                )}

              <div
                className={`${styles.content} ${
                  user.nickname === c.sender && styles.content__reverse
                }`}
              >
                <p className={styles.message}>{c.message}</p>
                {/* 전 시간이랑 같고 다음 채팅 닉네임이랑 다르면 시간 출력 */}
                {i !== 0 &&
                  i < chats.length - 1 &&
                  (parseDate(c.sendTime) == parseDate(chats[i - 1].sendTime)
                    ? (parseDate(c.sendTime) !==
                        parseDate(chats[i + 1].sendTime) ||
                        c.sender !== chats[i + 1].sender) && (
                        <p
                          className={`${styles.time} ${
                            user.nickname === c.sender && styles.chat__reverse
                          }`}
                        >
                          {parseDate(c.sendTime)}
                        </p>
                      )
                    : parseDate(c.sendTime) !==
                        parseDate(chats[i + 1].sendTime) && (
                        <p
                          className={`${styles.time} ${
                            user.nickname === c.sender && styles.chat__reverse
                          }`}
                        >
                          {parseDate(c.sendTime)}
                        </p>
                      ))}
                {i === chats.length - 1 && (
                  <p
                    className={`${styles.time} ${
                      user.nickname === c.sender && styles.content__reverse
                    }`}
                  >
                    {parseDate(c.sendTime)}
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
