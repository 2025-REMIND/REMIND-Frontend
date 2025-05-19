import React, { useState } from 'react';
import * as S from './RegisterForm.style';
import Header from '../LoginForm/header/Header';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export const RegisterForm  = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({ username: '', password: '' });

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    const newErrors = { username: '', password: '' };

    // 아이디 유효성
    if (username.trim().length < 4) {
      newErrors.username = '아이디가 일치하지 않습니다.';
      isValid = false;
    }

    // 비밀번호 유효성
    if (password.length < 8) {
      newErrors.password = '비밀번호가 일치하지 않습니다.';
      isValid = false;
    }

    setErrors(newErrors);
  };

  return (
    <>
      <Header />
      <S.LoginFromLayout>
        <S.LoginFromWrapper>
          <form onSubmit={handleSubmit}>
            <h1>로그인</h1>

            <S.InputBox>
              <S.InputBoxText>ID</S.InputBoxText>
              <S.Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                error={!!errors.username}
              />
              <S.ErrorText visible={!!errors.username}>{errors.username}</S.ErrorText>

            </S.InputBox>

            <S.InputBox>
              <S.InputBoxText>PASSWORD</S.InputBoxText>
              <S.Input
                type={isPasswordVisible ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                error={!!errors.password}
              />
              <S.ToggleIcon onClick={togglePasswordVisibility}>
                {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
              </S.ToggleIcon>
              <S.ErrorText visible={!!errors.password}>{errors.password}</S.ErrorText>


            </S.InputBox>

            <S.LoginButton type="submit">로그인</S.LoginButton>

            <S.RegisterButton>
              <p>회원가입 하기</p>
            </S.RegisterButton>
          </form>
        </S.LoginFromWrapper>
      </S.LoginFromLayout>
    </>
  );
};
