import * as S from "./Mission.style";
import UNCHECK from "../../../assets/todayplan/checkbox.svg";
import CHECK from "../../../assets/todayplan/checkingbox.svg";
import MISSION from "../../../assets/todayplan/mission.svg";
import { useEffect, useState } from "react";
import MissionPopup from "./MissionPopup";
import suggestionGetApi from "../../../api/api/suggestionGetApi";

export default function Mission() {
    const [isChecked, setIsChecked] = useState(false);
    const [isStarted, setIsStarted] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [checkedList, setCheckedList] = useState([false, false, false]);
    const [answerList, setAnswerList] = useState(["", "", ""]);
    const [missionData, setMissionData] = useState(null);

    const checkClick = () => {
        setIsChecked((prev) => !prev);
    };

    const startClick = () => {
        setIsStarted(true);
        setShowPopup(true);
    };

    const closePopup = () => setShowPopup(false);

    const handleSave = () => {
        if (checkedList.every(Boolean)) setIsChecked(true);
    }

    useEffect(() => {
        const fetchMission = async () => {
            const data = await suggestionGetApi(1);
            if (data) setMissionData(data.mission);
        };

        fetchMission();
    }, []);

    return (
        <S.MissionLayout>
            <S.CheckBox src = { isChecked ? CHECK : UNCHECK } onClick = { checkClick } />
            <S.MissionBox>
                <S.Content>
                    <S.BoxText>
                        <S.Mission>
                            <S.Icon src = { MISSION } />
                            <S.Label>오늘의 미션</S.Label>
                        </S.Mission>
                        <S.Text>
                            <S.Title>{ missionData?.title }</S.Title>
                            <S.SubTitle>{ missionData?.description }</S.SubTitle>
                        </S.Text>
                    </S.BoxText>
                    <S.StartBox isStarted = { isStarted }>
                        <S.Start isStarted = { isStarted } onClick = { startClick }>미션 시작하기</S.Start>
                        { showPopup && 
                            <MissionPopup 
                                onClose = { closePopup } 
                                onSave = { handleSave } 
                                isChecked = { checkedList }
                                setIsChecked = { setCheckedList }
                                answer = { answerList }
                                setAnswer = { setAnswerList }
                                setParentChecked = { setIsChecked }
                            /> 
                        }
                    </S.StartBox>
                </S.Content>
            </S.MissionBox>
        </S.MissionLayout>
    )
}