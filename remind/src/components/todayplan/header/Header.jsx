import * as S from "./Header.style";
import HOME from "../../../assets/todayplan/remind.svg";
import MUSIC from "../../../assets/todayplan/music.svg";
import TIME from "../../../assets/todayplan/time.svg"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const [time, setTime] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const time = now.toLocaleTimeString('ko-KR', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            });

            setTime(time);
        };

        updateTime();
        const ing = setInterval(updateTime, 1000);

        return () => clearInterval(ing);
    }, []);

    const logoClick = () => {
        navigate(`/home`);
    }

    return (
        <S.HeaderLayout>
            <S.LeftBox>
                <S.LogoBox onClick = { logoClick }>
                    <S.Logo src = { HOME } />
                </S.LogoBox>
                <S.Title>
                    <p>오늘의 일정</p>
                </S.Title>
            </S.LeftBox>

            <S.RightBox>
                <S.TimeBox>
                    <S.Icon src = { TIME } />
                    <S.Time>{ time }</S.Time>
                </S.TimeBox>
                <S.MusicBox>
                    <S.Icon src = { MUSIC } />
                    <S.Music>오늘의 노래 추천</S.Music>
                </S.MusicBox>  
            </S.RightBox>        
        </S.HeaderLayout>
    )
}