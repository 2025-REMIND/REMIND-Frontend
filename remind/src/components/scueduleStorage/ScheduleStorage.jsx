import React from 'react';
import Header from './header/StorageHeader';
import * as S from './ScheduleStorage.style';
import { StorageTitle } from './title/StorageTitle'; // ✅ 명확한 import
import StorageCard from './card/StorageCard';
import StorageCardButtons from './card/StorageCardButton';
export const ScheduleStorage = () => {
  return (
    <>
      <Header />
      <S.StorageLayout>
        <StorageTitle
          title="기록된 순간들"
          subTitle="다시 꺼내보고 싶은 기억이 하나 생겼어요"
        />
        <StorageCard
  date="2024년 05월 25일"
  location="여의도 한강 공원"
  missionTitle="서로에게 궁금했던 점 3가지 질문"
  missionList={[
    { text: '돗자리 펴고 음악 감상', completed: true },
    { text: '노을 보며 맥주 한 잔', completed: true },
    { text: '산책하기', completed: false },
  ]}
  images={[]}
  backgroundColor="#f3c8da"   // ✅ 연분홍 배경
/>

<StorageCardButtons
  onNavigate={() => console.log("바로가기")}
  onDelete={() => console.log("삭제")}
/>

        <StorageTitle
          title="기다리는 일정들"
          subTitle="우리만의 시간이 아직 시작되지 않았어요"
        />
        <StorageCard
  date="0000년 00월 20일"
  location="여의도 한강 공원"
  missionTitle="서로에게 궁금했던 점 3가지 질문"
  missionList={[
    { text: '돗자리 펴고 음악 감상', completed: true },
    { text: '노을 보며 맥주 한 잔', completed: true },
    { text: '산책하기', completed: false },
  ]}
  images={[]}
/>
<StorageCardButtons
  onNavigate={() => console.log("바로가기")}
  onDelete={() => console.log("삭제")}
/>
      </S.StorageLayout>
    </>
  );
};
