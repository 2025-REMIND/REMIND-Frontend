import React, { useState, useEffect } from 'react';
import * as S from './RegisterForm.style';
import Header from '../LoginForm/header/Header';
import IdInput from './input/IdInput';
import PasswordInput from './input/PasswordInput';
import ConfirmPasswordInput from './input/ConfirmPasswordInput';

export const RegisterForm = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [idError, setIdError] = useState('');
  const [pwError, setPwError] = useState('');
  const [confirmPwError, setConfirmPwError] = useState('');

  const validateId = (value) => /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{4,10}$/.test(value);
  const validatePassword = (value) => /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{4,10}$/.test(value);

  const handleIdChange = (e) => {
    const val = e.target.value;
    setId(val);
    setIdError(validateId(val) ? '' : '아이디는 영문과 숫자를 포함한 4~10자여야 합니다.');
  };

  const handlePwChange = (e) => {
    const val = e.target.value;
    setPw(val);
    setPwError(validatePassword(val) ? '' : '비밀번호는 영문과 숫자를 포함한 4~10자여야 합니다.');
  };

  const handleConfirmPwChange = (e) => {
    const val = e.target.value;
    setConfirmPw(val);
  };

  useEffect(() => {
    if (confirmPw) {
      setConfirmPwError(pw === confirmPw ? '' : '비밀번호가 일치하지 않습니다.');
    }
  }, [pw, confirmPw]);

  return (
    <>
      <Header />
      <S.RegitsterFormLayout>
        <S.Wrapper>
          <h1>회원가입</h1>

          <S.Form>
            <IdInput 
              id={id} 
              onChange={handleIdChange} 
              error={idError} />
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
            <S.SubmitButton>회원가입</S.SubmitButton>
            <S.LoginText>로그인</S.LoginText>
          </S.Form>
        </S.Wrapper>
      </S.RegitsterFormLayout>
    </>
  );
};
