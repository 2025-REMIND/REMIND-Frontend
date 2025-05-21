import * as S from "./Suggest.style";
import CHECKBOX from "../../../assets/todayplan/checkbox.svg";
import SUGGEST from "../../../assets/todayplan/suggest.svg";

export default function Mission() {
    return (
        <S.SuggestLayout>
            <S.Check>
                <S.CheckBox src = { CHECKBOX } />
            </S.Check>
            <S.SuggestBox>
                <S.Content>
                    <S.Suggest>
                        <S.Icon src = { SUGGEST } />
                        <S.Label>추천 데이트 코스</S.Label>
                    </S.Suggest>
                    <S.Title>여의도 한강공원으로 데이트 가기</S.Title>
                    <S.SubTitle>함께 돗자리를 펴고 서로에게 궁금했던 질문 3가지 주고받기</S.SubTitle>
                </S.Content>
                <S.PlanBox>
                    <S.Plan>일정 자세히 보기</S.Plan>
                </S.PlanBox>
            </S.SuggestBox>
        </S.SuggestLayout>
    )
}