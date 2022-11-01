import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { AuthErrorEventBus, AuthProvider } from './context/AuthContext';
import TokenStorage from './db/token';
import HttpClient from './network/http';
import AuthService from './service/auth';
import GroupService from './service/group';

const baseURL = 'https://a9eed7d2c59d48.lhr.life';
const tokenStorage = new TokenStorage();
const authErrorEventBus = new AuthErrorEventBus();
const httpClient = new HttpClient(baseURL, authErrorEventBus, tokenStorage);
const authService = new AuthService(httpClient, tokenStorage);
const groupService = new GroupService(httpClient, tokenStorage);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider
      authService={authService}
      authErrorEventBus={authErrorEventBus}
      tokenStorage={tokenStorage}
    >
      <App authService={authService} />
    </AuthProvider>
  </React.StrictMode>
);
