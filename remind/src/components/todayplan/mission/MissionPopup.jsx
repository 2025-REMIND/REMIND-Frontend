import * as S from "./MissionPopup.style";
import ICON from "../../../assets/todayplan/mission.svg";
import CLOSE from "../../../assets/todayplan/popup/closebutton.svg";
import { useEffect, useState } from "react";

export default function MissionPopup({ onClose }) {
    const questions = [
        "요즘 애인과 가장 좋았던 순간은 언제였어?",
        "요즘 애인과 가장 좋았던 순간은 언제였어?",
        "요즘 애인과 가장 좋았던 순간은 언제였어?"
    ]

    const [answer, setAnswer] = useState([]);
    const [isSaved, setIsSaved] = useState(false);
    const [isEnded, setIsEnded] = useState(false);
    const [isExample, setIsExample] = useState(false);

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

    const endClick = () => {
        setIsEnded((prev) => !prev);
    };

    const exampleClick = () => {
        setIsExample((prev) => !prev);
    };

    return (
        <S.Overlay>
            <S.MissionPopupLayout>
                <S.Label>
                    <S.Icon src = { ICON } />
                    <S.Title>오늘의 미션</S.Title>
                    <S.SaveButton isSaved = { isSaved } onClick = { saveClick }>저장하기</S.SaveButton>
                    <S.CloseButton src = { CLOSE } onClick = { onClose } />
                </S.Label>
                <S.SubTitle>
                    {`질문은 마음의 문을 여는 열쇠가 되어 줄지도 몰라요.
                    천천히 솔직하게, 오늘은 감정을 나누는 연습을 해 봐요`}
                </S.SubTitle>
                { questions.map((question, idx) => (
                    <S.QuestionBox key = { idx }>
                        <S.Question>
                            Q. { question }
                        </S.Question>
                        <S.AnswerBox>
                            <S.Input
                                value = { answer[idx] }
                                onChange = { (e) => updateAnswer(idx, e.target.value) }
                                placeholder = "답변을 입력해 주세요."
                            />
                        </S.AnswerBox>
                    </S.QuestionBox>
                ))}
                <S.Button>
                    <S.ExampleButton isExample = { isExample } onClick = { exampleClick }>예시 보기</S.ExampleButton>
                    <S.EndButton isEnded = { isEnded } onClick = { endClick }>미션 완료</S.EndButton>
                </S.Button>
            </S.MissionPopupLayout>
        </S.Overlay>
    )
}