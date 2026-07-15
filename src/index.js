import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppRouter from './AppRouter';
import reportWebVitals from './reportWebVitals';

import AuthContext from './authContext';
import { useState } from 'react';

function AppWithAuthProvider() {
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.getItem('token')));

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, handleLogout: () => setIsLoggedIn(false) }}>
      <AppRouter />
    </AuthContext.Provider>
  );
}

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <AppWithAuthProvider />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

