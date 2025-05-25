import React from 'react';
import Header from './header/StorageHeader';
import * as S from './ScheduleStorage.style';
import { StorageTitle } from './title/StorageTitle';
import StorageCard from './card/StorageCard';
import StorageCardButtons from './card/StorageCardButton';

// 아이콘 경로 불러오기
import ListWhite from '../../assets/storage/list-white.png';
import ListPink from '../../assets/storage/list-pink.svg';
import LocationWhite from '../../assets/storage/location-white.png';
import LocationPink from '../../assets/storage/location-pink.png';
import HeartPink from '../../assets/storage/heart-pink.svg';

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
          backgroundColor="#f3c8da"
          listIcon={ListWhite}
          locationIcon={LocationWhite}
          heartIcon={HeartPink}
          textColor="#ffffff"   // ✅ 흰색 텍스트

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
          listIcon={ListPink}
          locationIcon={LocationPink}
          heartIcon={HeartPink}
          textColor='#d7749b'   // ✅ 흰색 텍스트

        />
        <StorageCardButtons
          onNavigate={() => console.log("바로가기")}
          onDelete={() => console.log("삭제")}
        />
      </S.StorageLayout>
    </>
  );
};
