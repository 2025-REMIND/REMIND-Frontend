import * as S from "./Header.style";
import LOGO from "../../../assets/home/remind.svg";
import AllHeader from "../components/AllHeader";
import TIME from "../../../assets/todayplan/time.svg"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const [userName, setUserName] = useState("");
    const [time, setTime] = useState("");

    const navigate = useNavigate();

    const loginClick = () => {
        navigate(`/login`);
    };

    const signupClick = () => {
        navigate(`/register`);
    };

    useEffect(() => {
        const storedName = localStorage.getItem("userNickname");
        if (storedName) setUserName(storedName);
    }, []);

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
                    weight = "700"
                    width = "17.86vw"
                />
                <AllHeader
                    icon = { TIME }
                    input = { time }
                    BGcolor = "#D7749B"
                    color = "#FFFAF8"
                    weight = "700"
                    iconWidth = "3vw"
                />
            </S.UserBox>
        </S.HeaderLayout>
    )
}