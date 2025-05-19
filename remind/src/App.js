import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {LoginForm} from './components/LoginForm/LoginForm';
import {RegisterForm} from './components/Regitster/RegisterForm'; // 예시

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
