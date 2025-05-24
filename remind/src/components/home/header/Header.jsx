import * as S from "./Header.style";
import LOGO from "../../../assets/home/remind.svg";
import { useState } from "react";

export default function Header() {
    const [userName, setUserName] = useState("000");
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return (
        <S.HeaderLayout>
            <S.Home>
                <S.Image src = { LOGO } />
            </S.Home>
            <S.UserBox>
                <S.User>안녕하세요 { isLoggedIn && userName ? `${ userName } 님` : "" }</S.User>
                <S.Account>회원가입</S.Account>
                <S.Account>로그인</S.Account>
            </S.UserBox>
        </S.HeaderLayout>
    )
}