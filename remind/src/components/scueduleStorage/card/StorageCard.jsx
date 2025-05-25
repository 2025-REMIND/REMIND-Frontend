import React from 'react';
import * as S from './StorageCard.style';

const StorageCard = ({ date, location, missionTitle, missionList, images, backgroundColor = '#fff' }) => {
  return (
    <S.CardWrapper $bgColor={backgroundColor}>
      <S.CardContent>
        <S.CardLeft>
          <S.DateText>{date}</S.DateText>
          <S.Location>{location}</S.Location>
          <S.MissionTitle>{missionTitle}</S.MissionTitle>
          <S.MissionList>
            {missionList.map((mission, idx) => (
              <S.MissionItem key={idx}>
                <S.MissionCheck>{mission.completed ? '❤️' : '🤍'}</S.MissionCheck>
                {mission.text}
              </S.MissionItem>
            ))}
          </S.MissionList>
        </S.CardLeft>
        <S.CardRight>
          {images.map((src, idx) => (
            <S.Image key={idx} src={src} alt={`추억 ${idx + 1}`} />
          ))}
        </S.CardRight>
      </S.CardContent>
    </S.CardWrapper>
  );
};

export default StorageCard;
