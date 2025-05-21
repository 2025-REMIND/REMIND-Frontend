// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { LoginForm } from './components/LoginForm/LoginForm';
// import { RegisterForm } from './components/Regitster/RegisterForm';
// import MainHomePage from "./pages/MainHomePage";
// import MemoryRecordPage from "./pages/MemoryRecordPage";
import GlobalStyle from "./styles/globalStyles";
import Header from './components/todayplan/header/Header';
import Mission from "./components/todayplan/mission/Mission";
import Suggest from "./components/todayplan/suggest/Suggest";
import Comment from "./components/todayplan/comment/Comment";

function App() {
  return (
  //   <BrowserRouter>
  //     <GlobalStyle />
  //     <Routes>
  //       <Route path="/" element = { <LoginForm /> } />
  //       <Route path="/login" element = { <LoginForm /> } />
  //       <Route path="/register" element = { <RegisterForm /> } />
  //       <Route path = "/home" element = { <MainHomePage /> } />
  //       <Route path = "/memoryrecord" element = { <MemoryRecordPage /> } />
  //     </Routes>
  //   </BrowserRouter>
  // );
    <>
      <GlobalStyle />
      <Header />
      <Mission />
      <Suggest />
      <Comment />
    </>
  )
}

export default App;