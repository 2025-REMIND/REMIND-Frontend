import React from 'react';
import * as S from '../ScheduleStorage.style';

export const StorageTitle = ({ title, subTitle }) => {
  return (
    <S.StorageLayout>
    <S.TitleBlock>
      <S.StorageTitle>{title}</S.StorageTitle>
      <S.StorageText>{subTitle}</S.StorageText>
    </S.TitleBlock>
    </S.StorageLayout>
  );
};
