import React, { useState } from 'react';
import * as S from './LoginForm.style';
import Header from './header/Header';
import UsernameInput from './input/UsernameInput';
import PasswordInput from './input/PasswordInput';
import ToRegisterButton from './button/ToRegisterButton';
export const LoginForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ username: '', password: '' });

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = { username: '', password: '' };
    let isValid = true;

    if (username.trim().length < 4) {
      newErrors.username = '아이디가 일치하지 않습니다.';
      isValid = false;
    }

    if (password.length < 8) {
      newErrors.password = '비밀번호가 일치하지 않습니다.';
      isValid = false;
    }

    setErrors(newErrors);
    if (isValid) {
      // 로그인 처리 로직 (ex. API 호출)
      console.log('로그인 시도:', username, password);
    }
  };

  return (
    <>
      <Header />
      <S.LoginFromLayout>
        <S.LoginFromWrapper>
          <form onSubmit={handleSubmit}>
            <h1>로그인</h1>

            <UsernameInput
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              error={errors.username}
            />

            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password}
              isVisible={isPasswordVisible}
              toggle={togglePasswordVisibility}
            />

            <S.LoginButton type="submit">로그인</S.LoginButton>

            <ToRegisterButton/>
          </form>
        </S.LoginFromWrapper>
      </S.LoginFromLayout>
    </>
  );
};
