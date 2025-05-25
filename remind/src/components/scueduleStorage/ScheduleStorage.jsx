import React from 'react';
import Header from './header/StorageHeader';
import * as S from './ScheduleStorage.style';

export const ScheduleStorage = () => {
  return (
    <>
      <Header />
      <S.StorageLayout>
        
          <S.StorageTitle>기록된 순간들</S.StorageTitle>
          <S.StorageText>다시 꺼내보고 싶은 기억이 하나 생겼어요</S.StorageText>
        
      </S.StorageLayout>
    </>
  );
};

