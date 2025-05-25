import React from 'react';
import * as S from '../RegisterForm.style';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const PasswordInput = ({ pw, onChange, error, isVisible, toggle }) => (
  <S.Row>
    <S.Label>비밀번호 <span>*</span></S.Label>
    <S.InputRow>
      <S.InputWrapper>
        <S.Input
          type={isVisible ? 'text' : 'password'}
          placeholder="비밀번호를 입력해주세요"
          value={pw}
          onChange={onChange}
          $isError={!!error}
        />
        <S.ToggleIcon onClick={toggle}>
          {isVisible ? <FaEye /> : <FaEyeSlash />}
        </S.ToggleIcon>
      </S.InputWrapper>
      <S.Guideline style={{ color: error ? 'red' : '#999' }}>
        {error || '영문 / 숫자 혼용하여 4자~10자 이내로 작성해주세요'}
      </S.Guideline>
    </S.InputRow>
  </S.Row>
);

export default PasswordInput;
