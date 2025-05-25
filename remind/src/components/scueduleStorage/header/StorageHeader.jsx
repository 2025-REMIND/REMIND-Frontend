import React from 'react';
import * as S from '../../chatbot/header/ChatbotHeader.style';
import Icon from '../../../assets/icon.png';
import HeaderComponents from '../../chatbot/header/Components/HeaderComponents';
import { useNavigate } from 'react-router-dom';
export default function StorageHeader() {
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
              input="일정 보관함"
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
