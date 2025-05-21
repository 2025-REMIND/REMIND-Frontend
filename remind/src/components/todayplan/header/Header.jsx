import * as S from "./Header.style";
import HOME from "../../../assets/todayplan/remind.svg";
import MUSIC from "../../../assets/todayplan/music.svg";
import TIME from "../../../assets/todayplan/time.svg"

export default function Header() {
    return (
        <S.HeaderLayout>
            <S.LogoBox>
                <S.Logo src = { HOME } />
            </S.LogoBox>
            <S.Title>오늘의 일정</S.Title>
            <S.TimeBox>
                <S.Icon src = { TIME } />
                <S.Time></S.Time>
            </S.TimeBox>
            <S.MusicBox>
                <S.Icon src = { MUSIC } />
                오늘의 노래 추천
            </S.MusicBox>          
        </S.HeaderLayout>
    )
}