import React from 'react';
import * as S from '../LoginForm.style';

const UsernameInput = ({ value, onChange, error }) => (
  <S.InputBox>
    <S.InputBoxText>ID</S.InputBoxText>
    <S.Input
      type="text"
      placeholder="Username"
      value={value}
      onChange={onChange}
      $isError={!!error}
      required
    />
    {error && <S.ErrorText visible>{error}</S.ErrorText>}
  </S.InputBox>
);

export default UsernameInput;
