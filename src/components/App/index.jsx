import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/useLocalStorage';

import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Ranking from '../pages/Ranking';

import TokenContext from '../../contexts/tokenContext';
import UserContext from '../../contexts/userContext';

import '../../assets/css/reset.css';
import '../../assets/css/style.css';

export default function App() {
  const [token, setToken] = useLocalStorage('token', null);
  const [user, setUser] = useLocalStorage('userData' ,null);
  return (
    <BrowserRouter>
      <TokenContext.Provider value={{token, setToken}}>
        <UserContext.Provider value={{user, setUser}}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path='/' element={<Ranking />} />
          </Routes>
        </UserContext.Provider>
      </TokenContext.Provider>
    </BrowserRouter>
  );
}
