import styled from 'styled-components';

export const RegitsterFormLayout = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fdf9f7;
`;

export const Wrapper = styled.div`
  background-color: #fff;
  border: 1px solid #ecc5d1;
  border-radius: 20px;
  width: 1000px;
  height: 850px;
  margin: auto;
  padding: 60px 80px;  /* 패딩 추가해서 내부 여백 확보 */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    color: #b55b7b;
    font-size: 28px;
    margin-bottom: 40px;
  }
`;

export const Form = styled.div`
  flex: 1;              /* 폼이 Wrapper의 남은 공간 채우도록 */
  display: flex;
  flex-direction: column;
  
`;

export const Row = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
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
  width: 650px;
`;

export const Input = styled.input`
  flex: 1;
  padding-left:12px;
  width: 100%;
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
  width : 500px;
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
  width: 420px;
  height: 80px;
  border-radius: 20px;
  border: 1px solid #b55b7b;
  color: #b55b7b;
  background-color: white;
  font-weight: bold;
  font-size: 18px;
  
  display: block;   /* block 요소로 만들기 */
  margin: 60px auto 0 auto;  /* 위쪽 마진 60px, 좌우 auto로 가운데 정렬 */

  &:hover {
    background-color: #fde8f0;
  }
`;

export const LoginText = styled.p`
  margin-top: 24px;
  text-align: center;
  color: #666;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
`;
