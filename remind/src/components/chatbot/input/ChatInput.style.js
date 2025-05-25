import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1.1vh 1.85vw;
  background-color: #fffaf8;
  width: 45.3vw;
  margin: 0 auto;
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  border: 0.1vh solid #d49bad;
  border-radius: 3vh;
  overflow: hidden;
  background-color: white;
`;

export const ImageButton = styled.button`
  width: 4.4vh;
  height: 4.4vh;
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
  width: 4.4vh;
  height: 4.4vh;
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
