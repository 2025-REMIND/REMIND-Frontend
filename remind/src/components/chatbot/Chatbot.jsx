import React, { useState, useRef, useEffect } from 'react';
import * as S from './Chatbot.style';
import Header from './header/ChatbotHeader';
import ChatInput from './input/ChatInput';
import RimiIcon from '../../assets/chatbot/Rimi.svg';
import createPostApi from '../../api/chatbot/CreatePostApi';

const Chatbot = () => {
  const chatEndRef = useRef(null);
  
  // 첫 메시지는 고정 인삿말
  const [messages, setMessages] = useState([
    {
      from: 'bot',
      text: `안녕! 나는 너희 둘의 기억을 함께 모아줄 감정 기록 AI, 리미야!
오늘, 우리만의 특별한 대화를 시작해볼까?
먼저 너의 이름을 알려줘!`
    }
  ]);
  
  const [input, setInput] = useState('');
  const memberId = localStorage.getItem('userId');

  // 사용자가 메시지 보낼 때만 API 호출
  const handleSend = async () => {
    if (!input.trim()) return;

    // 사용자 메시지 추가
    const userMessage = { from: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);

    try {
      // API 호출
      const responseContent = await createPostApi(memberId, input);
      // 봇 응답 메시지 추가
      setMessages((prev) => [...prev, { from: 'bot', text: responseContent }]);
    } catch (error) {
      setMessages((prev) => [...prev, { from: 'bot', text: '서버 오류가 발생했습니다.' }]);
    }

    setInput('');
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      <Header />
      <S.ChatWrapper>
        <S.ChatBox>
          {messages.map((msg, idx) => (
            <S.Message key={idx} from={msg.from}>
              {msg.from === 'bot' && <S.BotIcon src={RimiIcon} alt="리마" />}
              <S.MessageText from={msg.from}>{msg.text}</S.MessageText>
            </S.Message>
          ))}
          <div ref={chatEndRef} />
        </S.ChatBox>
        <ChatInput input={input} setInput={setInput} onSend={handleSend} />
      </S.ChatWrapper>
    </>
  );
};

export default Chatbot;
