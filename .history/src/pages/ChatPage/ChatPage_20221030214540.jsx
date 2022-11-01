import React from 'react';
import { useLocation } from 'react-router-dom';
import ChatHeader from '../../components/ChatHeader/ChatHeader';
import ChatSideBar from '../../components/ChatSideBar/ChatSideBar';

export default function ChatPage() {
  const { state } = useLocation();

  return (
    <>
      <ChatHeader />
      <ChatSideBar />
    </>
  );
}
