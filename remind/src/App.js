import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MainHomePage from "./pages/MainHomePage";
import MemoryRecordPage from "./pages/MemoryRecordPage";
import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path = "/home" element = { <MainHomePage /> } />
        <Route path = "/memoryrecord" element = { <MemoryRecordPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;