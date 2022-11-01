import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ChatHeader from '../../components/Chat/ChatHeader/ChatHeader';
import ChatSideBar from '../../components/Chat/ChatSideBar/ChatSideBar';

export default function ChatPage() {
  const { state } = useLocation();
  const [members, setMembers] = useState([]);
  return (
    <>
      <ChatHeader />
      <ChatSideBar />
    </>
  );
}
