import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './LoginForm.style';
import Header from './header/Header';
import UsernameInput from './input/UsernameInput';
import PasswordInput from './input/PasswordInput';
import ToRegisterButton from './button/ToRegisterButton';
import createPostApi from '../../api/login/createPostApi';
export const LoginForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ username: '', password: '' });
  const navigate=useNavigate();
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  // 간단 유효성 검사
  const newErrors = { username: '', password: '' };
  let isValid = true;

  // if (username.trim().length < 4) {
  //   newErrors.username = '아이디가 일치하지 않습니다.';
  //   isValid = false;
  // }

  // if (password.length < 4) {
  //   newErrors.password = '비밀번호가 일치하지 않습니다.';
  //   isValid = false;
  // }

  setErrors(newErrors);
  if (!isValid) return;

  try {
    const result = await createPostApi(username, password);

    if (result.success) {
      // 로그인 성공
      navigate('/home');
    } else {
      // 로그인 실패 처리: 에러 코드에 따라 적절히 오류 메시지 설정
      if (result.code === 'SIGNIN_400_1') {
        setErrors((prev) => ({ ...prev, username: result.message }));
      } else if (result.code === 'SIGNIN_400_2') {
        setErrors((prev) => ({ ...prev, password: result.message }));
      } else if (result.httpStatus === 500) {
        alert('서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
      } else {
        alert(result.message || '로그인 중 알 수 없는 오류가 발생했습니다.');
      }
    }
  } catch (error) {
    console.error('로그인 실패:', error);
    alert('로그인 중 오류가 발생했습니다.');
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
