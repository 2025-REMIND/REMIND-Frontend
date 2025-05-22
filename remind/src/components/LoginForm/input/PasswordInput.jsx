import React from 'react';
import * as S from '../LoginForm.style';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const PasswordInput = ({ value, onChange, error, isVisible, toggle }) => (
  <S.InputBox>
    <S.InputBoxText>PASSWORD</S.InputBoxText>
    <S.Input
      type={isVisible ? 'text' : 'password'}
      placeholder="Password"
      value={value}
      onChange={onChange}
      $isError={!!error}
      required
    />
    <S.ToggleIcon onClick={toggle}>
      {isVisible ? <FaEye /> : <FaEyeSlash />}
    </S.ToggleIcon>
    {error && <S.ErrorText visible>{error}</S.ErrorText>}
  </S.InputBox>
);

export default PasswordInput;
