import * as S from "./Header.style";
import HOME from "../../../assets/todayplan/remind.svg";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
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
                <S.MusicBox>
                    <S.Music>안녕하세요 000님</S.Music>
                </S.MusicBox>  
            </S.RightBox>        
        </S.HeaderLayout>
    )
}