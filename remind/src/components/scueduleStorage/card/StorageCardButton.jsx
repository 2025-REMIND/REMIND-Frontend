import React from 'react';
import * as S from './StorageCard.style';
import { useNavigate } from 'react-router-dom';
const StorageCardButtons = ({ onNavigate, onDelete, disableDelete = false }) => (
  <S.CardContainer>
  <S.ButtonGroup>
    <S.NavigateButton onClick={onNavigate}>오늘의 일정 바로가기</S.NavigateButton>
    <S.DeleteButton onClick={onDelete} disabled={disableDelete}>
      삭제
    </S.DeleteButton>
  </S.ButtonGroup>
  </S.CardContainer>
);


export default StorageCardButtons;