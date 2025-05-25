// ✅ StorageCard.jsx
import React from 'react';
import * as S from './StorageCard.style';
const StorageCard = ({
  date,
  location,
  missionTitle,
  missionList,
  images,
  backgroundColor = '#fff',
  listIcon,
  locationIcon,
  heartIcon,
  textColor = '#000'
}) => {
  return (
    <S.CardWrapper $bgColor={backgroundColor}>
      <S.CardContent>
        <S.CardLeft $textColor={textColor}>
          <S.IconRow>
            <S.DateText>{date}</S.DateText>
          </S.IconRow>
          <S.IconRow>
            <S.RowIcon src={locationIcon} alt="location" />
            <S.Location>{location}</S.Location>
          </S.IconRow>
          <S.IconRow>
            <S.RowIcon src={listIcon} alt="mission" />
            <S.MissionTitle>{missionTitle}</S.MissionTitle>
          </S.IconRow>

          <S.MissionList>
            {missionList.map((mission, idx) => (
              <S.MissionItem key={idx}>
                <S.MissionIcon src={heartIcon} alt="list icon" />
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
