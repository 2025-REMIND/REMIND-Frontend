import styled from 'styled-components';

export const ChatWrapper = styled.div`
  width: 100%;
  height: 92vh;
  background: #fffaf8;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: 'Pretendard', sans-serif;
  box-shadow: 0 0.37vh 0.93vh rgba(0,0,0,0.1);
`;

export const ChatBox = styled.div`
  flex: 1;
  padding: 1.9vh 15vw; // ✅ 좌우 여백을 15%씩
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1.1vh;
`;

export const Message = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: ${({ from }) => (from === 'user' ? 'flex-end' : 'flex-start')};
  gap: 1vh;
  max-width: 100%; // ✅ 여백은 ChatBox에서 처리
`;



export const BotIcon = styled.img`
  height: 8em;
  margin-top: 0.4vh;
`;


export const MessageText = styled.div`
  background: ${({ from }) => (from === 'user' ? '#ffd5eb' : '#fff')};
  color: #333;
  padding: 1.1vh 1.5vh;
  white-space: pre-wrap;
  font-size: 1.3vh;
  line-height: 1.5;
  max-width: 60%; // ✅ 말풍선 너비 확장
  box-shadow: 0.09vh 0.09vh 0.28vh rgba(0, 0, 0, 0.1);
  border-top-left-radius: 2.8vh;
  border-top-right-radius: 2.8vh;
  border-bottom-left-radius: ${({ from }) => (from === 'user' ? '2.8vh' : '0')};
  border-bottom-right-radius: ${({ from }) => (from === 'user' ? '0' : '2.8vh')};
  ${({ from }) => from === 'bot' && `
    margin-bottom: 16px; /* ✅ 아이콘보다 살짝 위로 */
  `}
`;


export const MessageInputBox = styled.div`
  display: flex;
  padding: 1.1vh;
  border-top: 0.1vh solid #eab1d5;
  background: #fff0f5;
`;

export const Input = styled.input`
  flex: 1;
  padding: 0.93vh 1.3vh;
  border: none;
  border-radius: 1.9vh;
  outline: none;
  font-size: 1.3vh;
  background: #fff;
`;

export const SendButton = styled.button`
  margin-left: 0.74vh;
  background: #f8cde6;
  border: none;
  border-radius: 50%;
  width: 3.7vh;
  height: 3.7vh;
  font-size: 1.7vh;
  cursor: pointer;
`;
