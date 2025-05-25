import React from 'react'
import * as S from './HeaderComponents.style'

const HeaderComponents = ({input, bgColor, icon,  textColor}) => {
  return (
    <S.HeaderBox bgColor={bgColor} textColor={textColor}>
      {icon && <img src={icon} alt="icon" />}
      {input}
    </S.HeaderBox>
  )
}

export default HeaderComponents;