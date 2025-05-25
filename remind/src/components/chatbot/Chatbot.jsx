import React, { useState, useRef, useEffect } from 'react';
import * as S from './Chatbot.style';
import Header from './header/ChatbotHeader';
import ChatInput from './input/ChatInput';
import RimiIcon from '../../assets/chatbot/Rimi.svg'
const Chatbot = () => {
  //질문 목록
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
  //현재 몇 번째 질문인지 추적하는 인덱스
  const [questionIndex, setQuestionIndex] = useState(0);
  //지금까지 사용자와 봇이 주고 받은 메시지를 저장하는 배열
  //from : bot, user 판단 -> bot인 경우 icon + 흰 배경 텍스트 박스
  //                        user -> 오른쪽의 텍스트 박스 + 자주색 박스스
  const [messages, setMessages] = useState([
    { from: 'bot', text: questions[0] }
  ]);
  // 현재 입력창에 사용자가 입력 중인 텍스트 
  const [input, setInput] = useState('');
  // 사용자가 채팅 입력 후 전송 버튼을 눌렸을 때 실행
  // 사용자의 메시지를 messages에 추가
  // 질문이 남아 있다면 다음 봇 메시지를 추가
  // 질문이 끝났으면 종료 메시지를 출력
  // 입력창 초기화
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
