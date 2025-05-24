import * as S from "./Suggest.style";
import CHECKBOX from "../../../assets/todayplan/checkbox.svg";
import CHECKINGBOX from "../../../assets/todayplan/checkingbox.svg";
import SUGGEST from "../../../assets/todayplan/suggest.svg";
import SuggestPopup from "./SuggestPopup";
import { useState } from "react";

export default function Mission() {
    const [isChecked, setIsChecked] = useState(false);
    const [isLooked, setIsLooked] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const checkClick = () => {
        setIsChecked((prev) => !prev);
    };

    const checkPlan = () => {
        setIsLooked((prev) => !prev);
    };

    const startClick = () => {
        setIsLooked(true);
        setShowPopup(true);
    };

    const closePopup = () => setShowPopup(false);

    return (
        <S.SuggestLayout>
            <S.Check onClick = { checkClick }>
                <S.CheckBox src = { isChecked ? CHECKINGBOX : CHECKBOX } />
            </S.Check>
            <S.SuggestBox>
                <S.Content>
                    <S.BoxText>
                        <S.Suggest>
                            <S.Icon src = { SUGGEST } />
                            <S.Label>추천 데이트 코스</S.Label>
                        </S.Suggest>
                        <S.Text>
                            <S.Title>여의도 한강공원으로 데이트 가기</S.Title>
                            <S.SubTitle>함께 돗자리를 펴고 서로에게 궁금했던 질문 3가지 주고받기</S.SubTitle>
                        </S.Text>
                    </S.BoxText>
                    <S.PlanBox isLooked = { isLooked }>
                        <S.Plan isLooked = { isLooked } onClick = { startClick }>일정 자세히 보기</S.Plan>
                        { showPopup && <SuggestPopup onClose = { closePopup } /> }
                    </S.PlanBox>
                </S.Content>
            </S.SuggestBox>
        </S.SuggestLayout>
    )
}