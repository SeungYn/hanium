import React from 'react';
import { useLocation } from 'react-router-dom';
import ChatHeader from '../../components/ChatHeader/ChatHeader';

export default function ChatPage() {
  const { state } = useLocation();

  return (
    <>
      <ChatHeader />
    </>
  );
}
