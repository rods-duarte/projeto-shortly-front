import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import SignUp from '../pages/SignUp';

import '../../assets/css/reset.css';
import '../../assets/css/style.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
