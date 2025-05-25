import React from 'react';
import * as S from './ChatbotHeader.style';
import Icon from '../../../assets/icon.png';
import HeaderComponents from './Components/HeaderComponents';
import { useNavigate } from 'react-router-dom';
export default function ChatbotHeader() {
  const navigate=useNavigate();
  return (
    <S.HeaderLayout>
      <S.Header>
        <S.TabContainer>
          <S.TabLeftGroup>
            <div onClick={()=>navigate('../home') }>
              <HeaderComponents
                bgColor="#bd6f8c"
                icon={Icon}
              />
            </div>
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
    </S.HeaderLayout>
  );
}
