import React, { useState, useRef, useEffect } from 'react';
import * as S from './Chatbot.style';
import Header from './header/ChatbotHeader';
import ChatInput from './input/ChatInput';
import RimiIcon from '../../assets/chatbot/Rimi.svg'
const Chatbot = () => {
  const questions = [
    `안녕! 나는 너희 둘의 기억을 함께 모아줄 감정 기록 AI, 리미야!
오늘, 우리만의 특별한 대화를 시작해볼까?
먼저 너의 이름을 알려줘!`,
    `고마워! 그럼 이번엔 너의 연인 이름도 알려줘.
둘만의 이야기를 더 따뜻하게 기록하고 싶거든.`,
    `너는 어디 근처에 살고 있어? 
그 공간도 너의 이야기 중 하나니까, 리미가 알고 싶어!`,
    `애인은 어디 살고 있어? 
너희 동선을 보면 리미가 어울리는 미션을 떠올릴 수 있을 것 같아!`,
  `안녕 000! 나는 너희 기억을 함께 기록할 리미야:)
최근에 애인과 함께 했던 순간 중에서, 
유난히 마음에 남았던 기억이 있다면 알려줘!`,

];

  const chatEndRef=useRef(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [messages, setMessages] = useState([
    { from: 'bot', text: questions[0] }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { from: 'user', text: input };
    const updatedMessages = [...messages, userMessage];

    const nextIndex = questionIndex + 1;
    if (nextIndex < questions.length) {
      updatedMessages.push({ from: 'bot', text: questions[nextIndex] });
      setQuestionIndex(nextIndex);
    } else {
      updatedMessages.push({ from: 'bot', text: '모든 질문이 끝났어요. 리마와 이야기 나눠줘서 고마워요! 😊' });
    }

    setMessages(updatedMessages);
    setInput('');
  };
  //massages가 의존성 배열로서, massages가 바뀔때마다 마지막 요소로 스크롤 하는 역할

  useEffect(()=>{
    chatEndRef.current?.scrollIntoView({behavior: 'smooth'});

  },[messages]);
  

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
        <div ref={chatEndRef}/>
        {/*massages 변경 시 자동 스크롤*/ }
        </S.ChatBox>
        <ChatInput input={input} setInput={setInput} onSend={handleSend} />
      </S.ChatWrapper>
    </>
  );
};

export default Chatbot;
