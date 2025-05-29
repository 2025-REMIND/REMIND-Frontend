import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.1vh 1.85vw;
  background-color: #fffaf8;
  width: 45.3vw;
  margin: 0 auto;
`;


// export const InputBox = styled.div`
//   display: flex;
//   align-items: center;
//   width: 100%;
//   border: 0.1vh solid #d49bad;
//   border-radius: 3vh;
//   overflow: hidden;
//   background-color: white;
//   margin-top: 0.5vh;
// `;


export const ImageButton = styled.button`
  border: none;
  border-right: 0.1vh solid #d49bad;
  background-color: transparent;
  color: #b36d88;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7vh;
  cursor: pointer;
`;

export const Input = styled.input`
  flex: 1;
  padding: 0 1.5vh;
  border: none;
  outline: none;
  font-size: 1.3vh;
  color: #b36d88;
  
  &::placeholder {
    color: #b36d88;
    opacity: 0.6;
  }
`;

export const SendButton = styled.button`
  background-color: #bd6f8c;
  border: none;
  border-radius: 1.6vh;
  color: white;
  margin-left: 1.1vh;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.7vh;
`;



export const ImagePreviewBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 0.7vh;

  img {
    width: 48px;
    height: 48px;
    object-fit: cover;
    border-radius: 8px;
  }
`;
export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1vh; // 버튼과 입력창 사이 여백
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  flex: 1;  /* ✅ 100% 말고 flex로 설정 */
  border: 0.1vh solid #d49bad;
  border-radius: 3vh;
  overflow: hidden;
  background-color: white;
`;



export const RemoveImageButton = styled.button`
  position: absolute;
  top: -5px;
  right: -5px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  font-size: 12px;
  padding: 2px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;



