import React from 'react';
import * as S from './ChatInput.style';
import { FiImage, FiSend } from 'react-icons/fi'; 

const ChatInput = ({ input, setInput, onSend }) => {
  const handlekeyDown = (e)=>{
    if(e.key==='Enter'){//enter키 입력 시
        e.preventDefault();//폼 제출 방지
        onSend();
    }
  };
  return (
    <S.InputWrapper>
      <S.InputBox>
        <S.ImageButton>
          <FiImage />
        </S.ImageButton>
        <S.Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="RIMI와 대화를 시작해보세요!"
          onKeyDown={handlekeyDown}
        />
      </S.InputBox>
      <S.SendButton onClick={onSend}>
        <FiSend />
      </S.SendButton>
    </S.InputWrapper>
  );
};

export default ChatInput;
