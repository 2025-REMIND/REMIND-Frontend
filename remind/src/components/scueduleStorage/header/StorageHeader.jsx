import * as S from "./Header.style";
import HOME from "../../../assets/todayplan/remind.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
    const [userName, setUserName] = useState("");

    const navigate = useNavigate();
    const logoClick = () => {
        navigate(`/home`);
    }

    useEffect(() => {
        const storedName = localStorage.getItem("userNickname");
        if (storedName) setUserName(storedName);
    }, []);

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
                <S.MusicBox>
                    <S.Music>안녕하세요 {userName} 님</S.Music>
                </S.MusicBox>  
            </S.RightBox>        
        </S.HeaderLayout>
    )
}