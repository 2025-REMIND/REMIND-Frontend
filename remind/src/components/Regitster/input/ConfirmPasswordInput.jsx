import React from 'react';
import * as S from '../RegisterForm.style';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const ConfirmPasswordInput = ({ confirmPw, onChange, error, isVisible, toggle }) => (
  <S.Row>
    <S.Label>비밀번호 확인 <span>*</span></S.Label>
    <S.InputRow>
      <S.InputWrapper>
        <S.Input
          type={isVisible ? 'text' : 'password'}
          placeholder="비밀번호를 입력해주세요"
          value={confirmPw}
          onChange={onChange}
          $isError={!!error}
        />
        <S.ToggleIcon onClick={toggle}>
          {isVisible ? <FaEye /> : <FaEyeSlash />}
        </S.ToggleIcon>
      </S.InputWrapper>
      {error && (
        <S.Guideline style={{ color: 'red' }}>
          {error}
        </S.Guideline>
      )}
    </S.InputRow>
  </S.Row>
);

export default ConfirmPasswordInput;
