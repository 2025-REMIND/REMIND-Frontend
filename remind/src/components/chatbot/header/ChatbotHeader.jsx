import React from 'react';
import * as S from './ChatbotHeader.style';
import Icon from '../../../assets/icon.png';
import HeaderComponents from './Components/HeaderComponents';
export default function ChatbotHeader() {
  return (
    <S.Header>
      <S.TabContainer>
        <S.TabLeftGroup>
          <HeaderComponents
            bgColor="#bd6f8c"
            icon={Icon}
          />
          <HeaderComponents
            input="'RIMI'와 소통해요"
            bgColor="#fffaf8"
          />
        </S.TabLeftGroup>
        <HeaderComponents
          input="안녕하세요 000 님"
          bgColor="#fffaf8"
        />
      </S.TabContainer>
    </S.Header>
  );
}
