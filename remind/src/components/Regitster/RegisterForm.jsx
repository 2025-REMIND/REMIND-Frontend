import React, { useState, useEffect } from 'react';
import * as S from './RegisterForm.style';
import Header from '../LoginForm/header/Header';
import IdInput from './input/IdInput';
import PasswordInput from './input/PasswordInput';
import ConfirmPasswordInput from './input/ConfirmPasswordInput';
import createPostApi from '../../api/register/CreatePostApi';
import { useNavigate } from 'react-router-dom';
export const RegisterForm = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // 입력별 에러 상태 분리
  const [idError, setIdError] = useState('');
  const [pwError, setPwError] = useState('');
  const [confirmPwError, setConfirmPwError] = useState('');
  const [apiMessage, setApiMessage] = useState(''); // 기타 메시지

  const handleIdChange = (e) => setId(e.target.value);
  const handlePwChange = (e) => setPw(e.target.value);
  const handleConfirmPwChange = (e) => setConfirmPw(e.target.value);

  const navigate=useNavigate();

  
  useEffect(() => {
    if (confirmPw) {
      setConfirmPwError(pw === confirmPw ? '' : '비밀번호가 일치하지 않습니다.');
    } else {
      setConfirmPwError('');
    }
  }, [pw, confirmPw]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 초기화
    setIdError('');
    setPwError('');
    setConfirmPwError('');
    setApiMessage('');

    // 비밀번호 확인 클라이언트 검사
    if (pw !== confirmPw) {
      setConfirmPwError('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      const result = await createPostApi(id, pw);

      if (result === 'SUCCESS_200') {
        setApiMessage('회원가입 성공!');
        // 성공 후 로그인 페이지 이동 등 추가 가능
        navigate('login');
      } else {
        setApiMessage(result);
      }
    } catch (error) {
      // 서버에서 받은 에러 메시지에 따라 각각 상태 세팅
      const msg = error.message || "서버 오류가 발생했습니다.";

      if (msg.includes("아이디")) {
        setIdError(msg);
      } else if (msg.includes("비밀번호")) {
        setPwError(msg);
      } else {
        setApiMessage(msg);
      }
    }
  };

  return (
    <>
      <Header />
      <S.RegitsterFormLayout>
        <S.Wrapper>
          <h1>회원가입</h1>
          <S.Form onSubmit={handleSubmit}>
            <IdInput id={id} onChange={handleIdChange} error={idError} />
            <PasswordInput
              pw={pw}
              onChange={handlePwChange}
              error={pwError}
              isVisible={isPasswordVisible}
              toggle={() => setIsPasswordVisible((prev) => !prev)}
            />
            <ConfirmPasswordInput
              confirmPw={confirmPw}
              onChange={handleConfirmPwChange}
              error={confirmPwError}
              isVisible={isPasswordVisible}
              toggle={() => setIsPasswordVisible((prev) => !prev)}
            />

            {apiMessage && !idError && !pwError && !confirmPwError && (
              <S.ApiErrorMessage>{apiMessage}</S.ApiErrorMessage>
            )}

            <S.SubmitButton type="submit">회원가입</S.SubmitButton>
            <S.LoginText>로그인</S.LoginText>
          </S.Form>
        </S.Wrapper>
      </S.RegitsterFormLayout>
    </>
  );
};
