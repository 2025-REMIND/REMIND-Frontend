import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './Header.style';
import Icon from '../../../assets/icon.png';
import AllHeader from '../../home/components/AllHeader';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const isLogin = location.pathname === '/login' || location.pathname === '/';
  const isRegister = location.pathname === '/register';

  return (
    <S.HeaderLayout>
      {/* 로고 영역 (Home) */}
      <S.Home onClick={() => navigate('/')}>
        <img src={Icon} alt="로고" style={{ height: '60%', marginRight: '8px' }} />
      </S.Home>

      {/* 회원가입, 로그인 영역 */}
      <S.UserBox>
        <AllHeader
          input="회원가입"
          BGcolor={isRegister ? "white" : "#d7749b"}
          color={isRegister ? "#d7749b" : "white"}
          weight={500}
          width="9.06vw"
          onClick={() => navigate('/register')}
          icon={null}
          iconWidth="14.11vw"
        />
        <AllHeader
          input="로그인"
          BGcolor={isLogin ? "white" : "#d7749b"}
          color={isLogin ? "#d7749b" : "white"}
          weight={500}
          width="9.06vw"
          onClick={() => navigate('/login')}
          icon={null}
          iconWidth="14.11vw"
        />
      </S.UserBox>
    </S.HeaderLayout>
  );
}
