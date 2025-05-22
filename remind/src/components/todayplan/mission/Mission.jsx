import * as S from "./Mission.style";
import CHECKBOX from "../../../assets/todayplan/checkbox.svg";
import CHECKINGBOX from "../../../assets/todayplan/checkingbox.svg";
import MISSION from "../../../assets/todayplan/mission.svg";
import { useState } from "react";
import MissionPopup from "./MissionPopup";

export default function Mission() {
    const [isChecked, setIsChecked] = useState(false);
    const [isStarted, setIsStarted] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const checkClick = () => {
        setIsChecked((prev) => !prev);
    };

    const startClick = () => {
        setIsStarted((prev) => !prev);
    };

    const openPopup = () => setShowPopup(true);
    const closePopup = () => setShowPopup(false);

    return (
        <S.MissionLayout>
            <S.Check onClick = { checkClick } >
                <S.CheckBox src = { isChecked ? CHECKINGBOX : CHECKBOX } />
            </S.Check>
            <S.MissionBox>
                <S.Content>
                    <S.Mission>
                        <S.Icon src = { MISSION } />
                        <S.Label>오늘의 미션</S.Label>
                    </S.Mission>
                    <S.Title>감정을 함께 나누는 시간</S.Title>
                    <S.SubTitle>서로에게 궁금했던 점 3가지 질문하기</S.SubTitle>
                </S.Content>
                <S.StartBox isStarted = { isStarted }>
                    <S.Start isStarted = { isStarted } onClick = { () => {
                        setIsStarted(true);
                        setShowPopup(true); 
                    }}>미션 시작하기</S.Start>
                    { showPopup && <MissionPopup onClose = { closePopup } /> }
                </S.StartBox>
            </S.MissionBox>
        </S.MissionLayout>
    )
}