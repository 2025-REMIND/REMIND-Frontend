import styled from "styled-components";

export const LoginFromLayout = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fdf9f7;
`;

export const LoginFromWrapper = styled.div`
  background-color: white;
  border: 1px solid #ecc5d1;
  border-radius: 20px;
  padding: 60px 80px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  width: 400px;

  h1 {
    text-align: center;
    color: #b55b7b;
    margin-bottom: 40px;
    font-size: 28px;
  }
`;

export const InputBox = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

export const InputBoxText=styled.div`
  color: #3f2e2e;
  font-size: 18px;
`

export const Input = styled.input`
  width: 100%;
  padding: 12px 40px 12px 16px;
  background-color: ${(props)=>(props.error ? '#FF000026' : "white")};
  border: 1px solid ${(props) => (props.error ? 'red' : '#555')}; 
  border-radius: 25px;
  font-size: 14px;
  box-sizing: border-box;

  ::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
    border-color: ${(props) => (props.error ? 'red' : '#b55b7b')};
  }
`;


export const LoginButton = styled.button`
  width: 100%;
  padding: 19px 161px 19px 161px;
  border-radius: 20px;
  border: 1px solid #e5b5c5;
  background-color: white;
  color: #b55b7b;
  font-weight: bold;
  margin-top: 20px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #fce4ec;
  }
`;

export const RegisterButton = styled.div`
  text-align: center;
  margin-top: 20px;
 
  p {
    font-size: 14px;
    color: #666;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const ToggleIcon = styled.span`
  position: absolute;
  top: 55%;
  right: 16px;
  transform: translateY(-50%);
  font-size: 18px;
  cursor: pointer;
  user-select: none;
  color: #000;
`;

export const ErrorText = styled.p`
  min-height: 16px;        // ✅ 항상 공간 차지 (1줄 높이)
  font-size: 12px;
  margin-top: 4px;
  color: red;
  transition: opacity 0.2s ease;
  opacity: ${(props) => (props.visible ? 1 : 0)};
`;
