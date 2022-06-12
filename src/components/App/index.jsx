import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/useLocalStorage';

import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';

import TokenContext from '../../contexts/tokenContext';

import '../../assets/css/reset.css';
import '../../assets/css/style.css';

export default function App() {
  const [token, setToken] = useLocalStorage('token', null);
  return (
    <BrowserRouter>
      <TokenContext.Provider value={{token, setToken}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </TokenContext.Provider>
    </BrowserRouter>
  );
}
