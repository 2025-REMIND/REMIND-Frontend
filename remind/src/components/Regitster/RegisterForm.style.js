import styled from 'styled-components';

export const RegitsterFormLayout = styled.div`
  height: 85vh;
  display: flex;
  justify-content: center;
  background-color: #fdf9f7;
`;

export const Wrapper = styled.div`
  background-color: #fff;
  border: 1px solid #ecc5d1;
  border-radius: 20px;
  width: 55rem;
  height: 850px;
  margin: auto;
  padding: 60px 80px;  /* 패딩 추가해서 내부 여백 확보 */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);

  h1 {
    text-align: center;
    color: #d55b7b;
    font-size: 40px;
    margin-bottom: 60px;
  }
`;

export const Form = styled.form`
  flex: 1;              /* 폼이 Wrapper의 남은 공간 채우도록 */
  display: flex;
  flex-direction: column;
  
`;

export const Row = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 40px;
`;

export const Label = styled.label`
  flex: 0 0 120px; /* 조금 넉넉한 고정 너비 */
  font-weight: bold;
  color: #3f2e2e;
  margin-top: 14px;

  span {
    color: red;
    margin-left: 4px;
  }
`;

export const InputRow = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column; /* 안내문 아래 배치 위해 세로 정렬 */
  gap: 6px;
`;

export const InputWithButton = styled.div`
  display: flex;
  gap: 10px;  
`;

export const Input = styled.input`
  flex: 1;
  padding-left:12px;
  width: 28rem;
  height: 60px;
  padding-right: 40px;
  border: 1px solid ${(props) => (props.$isError ? '#ff0000' : '#3f2e2e')};
  background-color: ${(props) => (props.$isError ? '#FF000033' : 'white')};
  border-radius: 25px;
  font-size: 14px;
  box-sizing: border-box;
  transition: all 0.2s ease;

  &::placeholder {
    color: #aaa;
  }
`;

export const CheckButton = styled.button`
  padding: 12px 16px;
  border: none;
  border-radius: 12px;
  width: 140px;
  height: 60px;
  background-color: #f6bfcf;
  color: white;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #e0abc1;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  flex: 1;
  width : 28rem;
`;

export const ToggleIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  cursor: pointer;
  color: #b55b7b;
  font-size: 18px;
  user-select: none;
`;

export const Guideline = styled.p`
  font-size: 12px;
  color: #999;
  margin: 0;
  padding-left: 4px; /* 라벨 너비와 정렬 맞추려고 약간 들여쓰기 */
`;

export const SubmitButton = styled.button`
  margin-top: 60px;
  width:30rem;
  height: 5rem;
  border-radius: 20px;
  border: 1px solid #d55b7b;
  color: #d55b7b;
  background-color: white;
  font-weight: bold;
  font-size: 18px;
    
  margin: 60px auto 0 auto;  /* 위쪽 마진 60px, 좌우 auto로 가운데 정렬 */

  &:hover {
    background-color: #fce4ec;  
    color:white;
        
    border: none;
  }
`;

export const LoginText = styled.p`
  margin-top: 40px;
  text-align: center;
  color: #666;
  font-size: 18px;
  text-decoration: underline;
  cursor: pointer;
`;

export const ApiErrorMessage=styled.div`
  color:#ff0000;
  margin-left: 7rem;
    font-size: 14px;

`