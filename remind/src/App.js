import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginForm } from './components/LoginForm/LoginForm';
import { RegisterForm } from './components/Regitster/RegisterForm';
import MainHomePage from "./pages/MainHomePage";
import MemoryRecordPage from "./pages/MemoryRecordPage";
import GlobalStyle from "./styles/globalStyles";
import TodayPlanPage from './pages/TodayPlanPage';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element = { <LoginForm /> } />
        <Route path="/login" element = { <LoginForm /> } />
        <Route path="/register" element = { <RegisterForm /> } />
        <Route path = "/home" element = { <MainHomePage /> } />
        <Route path = "/memoryrecord" element = { <MemoryRecordPage /> } />
        <Route path = "/todayplan" element = { <TodayPlanPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;