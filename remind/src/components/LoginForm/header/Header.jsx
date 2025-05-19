import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './Header.style';
import Icon from '../../../assets/icon.png';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const isLogin = location.pathname === '/login' ||  location.pathname==='/';
  const isRegister = location.pathname === '/register';

  return (
    <S.Header>
      <S.HeaderWrapper>
        <S.LogoBox>
          <img src={Icon} alt="로고" style={{ marginRight: '8px', height: '20px' }} />
          RE:MIND
        </S.LogoBox>
        <S.MenuBox>
          <S.Tab active={isRegister} onClick={() => navigate('/register')}>회원가입</S.Tab>
          <S.Tab active={isLogin} onClick={() => navigate('/login')}>로그인</S.Tab>
        </S.MenuBox>
      </S.HeaderWrapper>
    </S.Header>
  );
}
