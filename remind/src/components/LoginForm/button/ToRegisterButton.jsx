import React from 'react'
import { useNavigate } from 'react-router-dom';
import * as S from '../LoginForm.style';

const ToRegisterButton = () => {
  const navigate = useNavigate();

  return (
    <S.RegisterButton onClick={() => navigate('/register')}>
      <p>회원가입 하기</p>
    </S.RegisterButton>
  );
};


export default ToRegisterButton;