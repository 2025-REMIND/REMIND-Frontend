import React from 'react';
import * as S from './ChatInput.style';
import { FiImage, FiSend } from 'react-icons/fi'; 

const ChatInput = ({ input, setInput, onSend }) => {
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
        />
      </S.InputBox>
      <S.SendButton onClick={onSend}>
        <FiSend />
      </S.SendButton>
    </S.InputWrapper>
  );
};

export default ChatInput;
