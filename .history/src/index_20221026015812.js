import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthErrorEventBus, AuthProvider } from './context/AuthContext';
import TokenStorage from './db/token';
import HttpClient from './network/http';
import AuthService from './service/auth';

const baseURL = 'https://d4a8ab3f9df191.lhr.life';
const tokenStorage = new TokenStorage();
const authErrorEventBus = new AuthErrorEventBus();
const httpClient = new HttpClient(baseURL, authErrorEventBus, tokenStorage);
const authService = new AuthService(httpClient, tokenStorage);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider
        authService={authService}
        authErrorEventBus={authErrorEventBus}
        tokenStorage={tokenStorage}
      >
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
