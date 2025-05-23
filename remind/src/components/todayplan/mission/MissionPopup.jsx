import * as S from "./MissionPopup.style";
import ICON from "../../../assets/todayplan/mission.svg";
import CLOSE from "../../../assets/todayplan/popup/closebutton.svg";
import UNCHECK from "../../../assets/todayplan/checkbox.svg";
import CHECK from "../../../assets/todayplan/checkingbox.svg";
import { useEffect, useState } from "react";

export default function MissionPopup({ onClose }) {
    const questions = [
        "애인에게 어떤 순간이 가장 좋은지 물어보기",
        "손잡고 걷기",
        "애인에게 mbti 물어보기"
    ]

    const [answer, setAnswer] = useState([]);
    const [isSaved, setIsSaved] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        setAnswer(Array(questions.length).fill(""));
    }, [questions.length]);

    const updateAnswer = (index, value) => {
        const update = [...answer];
        update[index] = value;
        setAnswer(update);
    };

    const saveClick = () => {
        setIsSaved((prev) => !prev);
    };

    const checkClick = () => {
        setIsChecked((prev) => !prev);
    };

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
                        { questions.map((question, idx) => (
                            <S.Content key = { idx }>
                                <S.Question>
                                    <S.Check onClick = { checkClick }>
                                        <S.CheckBox src = { isChecked ? CHECK : UNCHECK } />
                                    </S.Check>
                                    <S.QuestionBox>
                                        { question }
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