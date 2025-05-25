import * as S from "./Header.style";
import LOGO from "../../../assets/home/remind.svg";
import AllHeader from "../components/AllHeader";
import { useState } from "react";

export default function Header() {
    const [userName, setUserName] = useState("000");
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return (
        <S.HeaderLayout>
            <AllHeader 
                icon = { LOGO } 
                BGcolor = "#D7749B"
                width = "17.86vw"
            />
            <S.UserBox>
                <AllHeader
                    input = { `안녕하세요 ${ userName } 님` }
                    width = "17.86vw"
                />
                <AllHeader input = "회원가입" BGcolor = "#D7749B" color = "#FFFAF8" />
                <AllHeader input = "로그인" BGcolor = "#D7749B" color = "#FFFAF8" />
            </S.UserBox>
        </S.HeaderLayout>
    )
}