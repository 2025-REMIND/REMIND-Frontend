import React, { useState } from 'react';
import * as S from './RegisterForm.style';
import Header from '../LoginForm/header/Header';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export const RegisterForm = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  // 1. 상태 추가
const [idError, setIdError] = useState('');
const [pwError, setPwError] = useState('');
const [confirmPwError, setConfirmPwError] = useState('');

// 2. 유효성 검사 함수 추가
const validateId = (value) => {
  const regex = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{4,10}$/;
  return regex.test(value);
};

const validatePassword = (value) => {
  const regex = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{4,10}$/;
  return regex.test(value);
};

// 3. 입력 핸들러에 유효성 검사 추가
const handleIdChange = (e) => {
  const val = e.target.value;
  setId(val);
  setIdError(validateId(val) ? '' : '아이디는 영문과 숫자를 포함한 4~10자여야 합니다.');
};

const handlePwChange = (e) => {
  const val = e.target.value;
  setPw(val);
  setPwError(validatePassword(val) ? '' : '비밀번호는 영문과 숫자를 포함한 4~10자여야 합니다.');
  setConfirmPwError(val === confirmPw ? '' : '비밀번호가 일치하지 않습니다.');
};

const handleConfirmPwChange = (e) => {
  const val = e.target.value;
  setConfirmPw(val);
  setConfirmPwError(val === pw ? '' : '비밀번호가 일치하지 않습니다.');
};
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <>
      <Header />
      <S.RegitsterFormLayout>
        <S.Wrapper>
          <h1>회원가입</h1>

          <S.Form>
            <S.Row>
              <S.Label>
                아이디 <span>*</span>
              </S.Label>
              <S.InputRow>
                <S.InputWithButton>
                  <S.Input
  placeholder="아이디를 입력해주세요"
  value={id}
  onChange={handleIdChange}
/>

                  <S.CheckButton>아이디 중복 확인</S.CheckButton>
                </S.InputWithButton>
                <S.Guideline style={{ color: idError ? 'red' : '#999' }}>
  {idError || '영문 / 숫자 혼용하여 4자~10자 이내로 작성해주세요'}
</S.Guideline>
              </S.InputRow>
            </S.Row>

            <S.Row>
              <S.Label>
                비밀번호 <span>*</span>
              </S.Label>
              <S.InputRow>
                <S.InputWrapper>
                  <S.Input
  type={isPasswordVisible ? 'text' : 'password'}
  placeholder="비밀번호를 입력해주세요"
  value={confirmPw}
  onChange={handleConfirmPwChange}
/>
                  <S.ToggleIcon onClick={togglePasswordVisibility}>
                    {isPasswordVisible ? <FaEye /> : <FaEyeSlash />}
                  </S.ToggleIcon>
                </S.InputWrapper>
                <S.Guideline style={{ color: confirmPwError ? 'red' : '#999' }}>
  {confirmPwError || '비밀번호를 다시 입력해주세요'}
</S.Guideline>
              </S.InputRow>
            </S.Row>

            <S.Row>
              <S.Label>비밀번호 확인 <span>*</span></S.Label>
              <S.InputRow>
                <S.InputWrapper>
                  <S.Input
                    type={isPasswordVisible ? 'text' : 'password'} // 비밀번호와 동일하게 토글 적용
                    placeholder="비밀번호를 입력해주세요"
                    value={confirmPw} // confirmPw 상태 사용
                    onChange={(e) => setConfirmPw(e.target.value)} // confirmPw 변경 함수
                  />
                  <S.ToggleIcon onClick={togglePasswordVisibility}>
                    {isPasswordVisible ? <FaEye /> : <FaEyeSlash />}
                  </S.ToggleIcon>
                </S.InputWrapper>
              </S.InputRow>
            </S.Row>

            <S.SubmitButton>회원가입</S.SubmitButton>
            <S.LoginText>로그인</S.LoginText>
          </S.Form>
        </S.Wrapper>
      </S.RegitsterFormLayout>
    </>
  );
};
