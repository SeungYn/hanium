import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { AuthErrorEventBus, AuthProvider } from './context/AuthContext';
import TokenStorage from './db/token';
import HttpClient from './network/http';
import AuthService from './service/auth';
import GroupService from './service/group';
import StompDI from './network/StompDI';
import ChatService from './service/chat';
import TradeService from './service/trade';

const baseURL = 'https://0d2df4b9366598.lhr.life';
const tokenStorage = new TokenStorage();
const authErrorEventBus = new AuthErrorEventBus();
const httpClient = new HttpClient(baseURL, authErrorEventBus, tokenStorage);
const stompClient = new StompDI(baseURL, () => tokenStorage.getToken());
const authService = new AuthService(httpClient, tokenStorage);
const groupService = new GroupService(httpClient, tokenStorage);
const chatService = new ChatService(httpClient, tokenStorage, stompClient);
const tradeService = new TradeService(httpClient, tokenStorage);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider
      authService={authService}
      authErrorEventBus={authErrorEventBus}
      tokenStorage={tokenStorage}
    >
      <App
        authService={authService}
        groupService={groupService}
        chatService={chatService}
      />
    </AuthProvider>
  </React.StrictMode>
);
