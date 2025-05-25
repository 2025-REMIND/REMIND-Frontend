import React, {useRef} from 'react';
import * as S from './ChatInput.style';
import { FiImage, FiSend } from 'react-icons/fi'; 

const ChatInput = ({ input, setInput, onSend }) => {
  const fileInputRef=useRef(null);
  const handlekeyDown = (e)=>{
    if(e.key==='Enter'){//enter키 입력 시
        e.preventDefault();//폼 제출 방지
        onSend();
    }
  };
  const handleImageClick = () => {
    fileInputRef.current?.click(); // 아이콘 클릭 시 input 작동
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log('선택된 파일:', file);
      // 필요하면 여기서 props로 전달하거나 메시지 추가
    }
  };
  return (
    <S.InputWrapper>
      <S.InputBox>
        <S.ImageButton onClick={handleImageClick}>
          <FiImage />
        </S.ImageButton>
        <input
          type='file'
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: 'none' }}
          />
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
