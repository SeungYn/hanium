import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ChatHeader from '../../components/Chat/ChatHeader/ChatHeader';
import ChatSideBar from '../../components/Chat/ChatSideBar/ChatSideBar';
import { useAuth } from '../../context/AuthContext';
import styles from './ChatPage.module.css';
import { IconContext } from 'react-icons';
import { IoSendSharp } from 'react-icons/io5';
import { parseDate } from '../../util/data';
import { useRef } from 'react';

export default function ChatPage({ chatService, title, groupService }) {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [owner, setOwner] = useState(false);
  const [groupInfo, setGroupInfo] = useState({ ...state?.data });
  const { error, setError, user } = useAuth();
  const [sideBarToggle, setSideBarToggle] = useState(false);
  const [members, setMembers] = useState(
    groupInfo ? groupInfo?.memberInfoDtos : []
  );

  const chatContainerRef = useRef();
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

  const HandlerGroupLeave = (groupId) => {
    groupService
      .leaveGroup(groupId)
      .then((d) => {
        console.log(d);
      })
      .catch((e) => setError(e));
    navigate('/group');
  };
  //스텀프 연결 플래그
  const [stompConnectState, setStompConnectState] = useState(false);
  useEffect(() => {
    console.log(state);

    if (!state) {
      setError('올바르지 않은 접근입니다.');
      return navigate('/group');
    }
    chatService
      .getChats(groupInfo.clubId, 0)
      .then((data) => setChats([...data.chats]));
    chatContainerRef.current.scrollIntoView({ block: 'end', inline: 'end' });
    //채팅방 연결
    chatService.onConnect(() => setStompConnectState(true));
    chatService
      .getChats(groupInfo.clubId, 0)
      .then((data) => {
        console.log(data);

        setChats([...data.chats]);
      })
      .catch((e) => {
        console.log(e);
      });

    return () => {
      console.log('clear');
      chatService.onDisConnect(() => setStompConnectState(false));
    };
  }, []);

  //구독하기
  useEffect(() => {
    if (!stompConnectState && !chatService.connectState()) {
      return;
    }
    console.log(stompConnectState);
    let onDisSubscribeChat = () => {
      console.log('구독종료');
    };
    chatService.onSubscribe(groupInfo.chatRoomId, '/sub/chat/', (data) => {
      const chat = JSON.parse(data.body);
      onChatCreate(chat, setChats, chatContainerRef);
    });

    return () => {
      onDisSubscribeChat();
    };
  }, [stompConnectState]);

  return (
    <main className={styles.container}>
      <ChatSideBar
        groupInfo={groupInfo ? groupInfo : null}
        members={members}
        sideBarToggle={sideBarToggle}
        sideBarToggleHandler={() => setSideBarToggle(false)}
        HandlerGroupLeave={HandlerGroupLeave}
      />
      <ChatHeader
        sideBarToggleHandler={() => setSideBarToggle((t) => !t)}
        title={groupInfo ? groupInfo.clubName : title}
      />
      <ul className={styles.chats} ref={chatContainerRef}>
        {chats.map((c, i) => {
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
                    : (c.sender !== chats[i + 1].sender ||
                        parseDate(c.sendTime) !==
                          parseDate(chats[i + 1].sendTime)) && (
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
          required
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

//새로운 채팅 추가
const onChatCreate = (data, setState, ref) => {
  const { chatId, sender, message, sendTime } = data;
  setState((chats) => [...chats, { chatId, sender, message, sendTime }]);
  console.log(ref);
  ref.current.scrollIntoView({ block: 'end', inline: 'end' });
};
