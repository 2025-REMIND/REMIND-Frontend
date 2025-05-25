import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MainHomePage from "./pages/MainHomePage";
import MemoryRecordPage from "./pages/MemoryRecordPage";
import GlobalStyle from "./styles/globalStyles";
import TodayPlanPage from './pages/TodayPlanPage';
import ChatBot from './components/chatbot/Chatbot';
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
        <Route path = "/todayplan" element = { <TodayPlanPage /> />
        <Route path = "/chatbot" element={<ChatBot/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;