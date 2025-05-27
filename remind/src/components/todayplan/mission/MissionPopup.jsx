import * as S from "./MissionPopup.style";
import ICON from "../../../assets/todayplan/mission.svg";
import CLOSE from "../../../assets/todayplan/popup/closebutton.svg";
import UNCHECK from "../../../assets/todayplan/checkbox.svg";
import CHECK from "../../../assets/todayplan/checkingbox.svg";
import { useEffect, useState } from "react";
import MissionGetApi from "../../../api/api/todayplan/MissionGetApi";
import MissionPostApi from "../../../api/api/todayplan/MissionPostApi";

export default function MissionPopup({ memberId, missionId, onClose, onSave, isChecked, setIsChecked, answer, setAnswer, setParentChecked }) {
    const [isSaved, setIsSaved] = useState(false);
    const [missionData, setMissionData] = useState([]);
    const [missionIds, setMissionIds] = useState([]);

    useEffect(() => {
        const fetchMission = async () => {
            const result = await MissionGetApi(memberId, missionId);

            if (result) {
                const missionContents = result.getMissionDetailResList.map((item) => item.content);
                const id = result.getMissionDetailResList.map((item) => item.missionDetailId);
                
                setMissionData(missionContents);
                setMissionIds(id);

                setIsChecked(Array(missionContents.length).fill(false));
                setAnswer(Array(missionContents.length).fill(""));
            }
        };

        fetchMission();
    }, [memberId, missionId]);

    const updateAnswer = (index, value) => {
        const answerUpdate = [...answer];
        answerUpdate[index] = value;
        setAnswer(answerUpdate);
    };

    const saveClick = async () => {
        const requestBody = {
            memberId,
            missionDetailId1: missionIds[0],
            memo1: answer[0],
            missionDetailId2: missionIds[1],
            memo2: answer[1],
            missionDetailId3: missionIds[2],
            memo3: answer[2]
        };

        const response = await MissionPostApi(missionId, requestBody);

        if (response?.httpStatus === 200) {
            setIsSaved(true);
            onSave();
        }
    };

    const checkClick = (index) => {
        const checkUpdate = [...isChecked];
        checkUpdate[index] = !checkUpdate[index];
        setIsChecked(checkUpdate);

        if (checkUpdate.some(v => !v)) setParentChecked(false);
    }

    return (
        <S.Overlay>
            <S.MissionPopupLayout>
                <S.Label>
                    <S.TopLeft>
                        <S.Icon src = { ICON } />
                        <S.Title>오늘의 미션</S.Title>
                    </S.TopLeft>
                    <S.TopRight>
                        <S.SaveButton isSaved = { isSaved } onClick = { saveClick }>저장하기</S.SaveButton>
                        <S.CloseButton src = { CLOSE } onClick = { onClose } />
                    </S.TopRight>
                </S.Label>
                <S.Detail>
                    <S.SubTitle>
                        {`질문은 마음의 문을 여는 열쇠가 되어 줄지도 몰라요.
                        천천히 솔직하게, 오늘은 감정을 나누는 연습을 해 봐요.`}
                    </S.SubTitle>
                    <S.QuestionGroup>
                        { missionData.map((mission, idx) => (
                            <S.Content key = { idx }>
                                <S.Question>
                                    <S.Check onClick = { () => checkClick(idx) }>
                                        <S.CheckBox src = { isChecked[idx] ? CHECK : UNCHECK } />
                                    </S.Check>
                                    <S.QuestionBox>
                                        { mission }
                                    </S.QuestionBox>
                                </S.Question>
                                <S.AnswerBox>
                                    <S.Input
                                        value = { answer[idx] }
                                        onChange = { (e) => updateAnswer(idx, e.target.value) }
                                        placeholder = "답변을 입력해 주세요."
                                    />
                                </S.AnswerBox>
                            </S.Content>
                        ))}
                    </S.QuestionGroup>
                </S.Detail>
            </S.MissionPopupLayout>
        </S.Overlay>
    )
}