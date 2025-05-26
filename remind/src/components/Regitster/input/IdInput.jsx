import React from 'react';
import * as S from '../RegisterForm.style';

const IdInput = ({ id, onChange, error , onCheck}) => (
  <S.Row>
    <S.Label>아이디 <span>*</span></S.Label>
    <S.InputRow>
      <S.InputWithButton>
        <S.Input
          placeholder="아이디를 입력해주세요"
          value={id}
          onChange={onChange}
          $isError={!!error}
        />
        <S.CheckButton type="button" onClick={onCheck}>아이디 중복 확인</S.CheckButton>
      </S.InputWithButton>
      <S.Guideline style={{ color: error ? 'red' : '#999' }}>
        {error || '영문 / 숫자 혼용하여 4자~10자 이내로 작성해주세요'}
      </S.Guideline>
    </S.InputRow>
  </S.Row>
);

export default IdInput;
