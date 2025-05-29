import styled from "styled-components";

export const LoginFromLayout = styled.div`
 
  height: 85vh;
  display: flex;
  justify-content: center;
  background-color: #fdf9f7;
`;

  export const LoginFromWrapper = styled.div`
    margin-top: 50px;
    background-color: white;
    border: 1px solid #ecc5d1;
    border-radius: 20px;
    padding: 60px 80px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    width: 50rem;       /* 키움 */
    height: 50rem;       /* 키움 */
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      text-align: center;
      color: #d55b7b;
      margin-bottom: 60px;
      font-size: 40px;
    }
  `;

  export const InputBox = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
  `;

  export const InputBoxText = styled.div`
    color: #3f2e2e;
    font-size: 18px;
    padding-bottom:10px;
  `;

  export const Input = styled.input`
    width: 100%;
    height: 60px;          /* 키움 */
    padding: 12px 40px 12px 16px;
    background-color: ${(props) => (props.$isError ? '#FF000033' : 'white')};
    border: 1px solid ${(props) => (props.$isError ? 'red' : '#555')};
    border-radius: 25px;
    font-size: 14px;
    box-sizing: border-box;
    transition: all 0.2s ease;

    ::placeholder {
      color: #999;
    }

    &:focus {
      outline: none;
      border-color: ${(props) => (props.$isError ? 'red' : '#b55b7b')};
    }
  `;

    export const LoginButton = styled.button`
      width: 30rem;          /* 키움 */
      min-height: 5rem;          /* 키움 */
      border-radius: 20px;
      border: 2px solid #e5b5c5;
      background-color: white;
      color: #d55b7b;
      font-weight: bold;
      margin-top: 40px;
      cursor: pointer;
      font-size: 25px;;
      display: block;           /* 블록 요소로 변경 */

      &:hover {
        background-color: #fce4ec;  
        color:white;
        
      border: none;
      }
    `;

    export const RegisterButton = styled.div`
      text-align: center;
      margin-top: 40px;;
    
      p {
        
      font-size: 18px;
      color: #666;
      text-decoration: underline;
      cursor: pointer;
      }
    `;

  export const ToggleIcon = styled.span`
    position: absolute;
    top: 50%;              /* 살짝 조정 */
    right: 16px;
    transform: translateY(-50%);
    padding-right: 10px;
    font-size: 18px;
    cursor: pointer;
    user-select: none;
    color: #b55b7b;        /* 색상도 맞춤 */
  `;

  export const ErrorText = styled.p`
    min-height: 16px;        /* 항상 공간 차지 */
    font-size: 12px;
    margin-top: 4px;
    color: red;
    transition: opacity 0.2s ease;
    opacity: ${(props) => (props.visible ? 1 : 0)};
  `;
