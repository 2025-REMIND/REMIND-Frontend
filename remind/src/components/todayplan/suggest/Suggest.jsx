import * as S from "./Suggest.style";
import CHECKBOX from "../../../assets/todayplan/checkbox.svg";
import CHECKINGBOX from "../../../assets/todayplan/checkingbox.svg";
import SUGGEST from "../../../assets/todayplan/suggest.svg";
import SuggestPopup from "./SuggestPopup";
import suggestionGetApi from "../../../api/api/todayplan/suggestionGetApi";
import { useEffect, useState } from "react";

export default function Suggest() {
    const [isChecked, setIsChecked] = useState(false);
    const [isLooked, setIsLooked] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [checkedList, setCheckedList] = useState([false, false, false, false]);
    const [courseData, setCourseData] = useState(null);

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

    const handleSave = () => {
        if (checkedList.every(Boolean)) setIsChecked(true);
    }

    useEffect(() => {
        const fetchCourse = async () => {
            const memberId = Number(localStorage.getItem("userId"));
            const data = await suggestionGetApi(memberId);
            if (data) setCourseData(data);
        };

        fetchCourse();
    }, []);

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
                            <S.Title>{ courseData?.course?.title }</S.Title>
                            <S.SubTitle>{ courseData?.course?.description }</S.SubTitle>
                        </S.Text>
                    </S.BoxText>
                    <S.PlanBox isLooked = { isLooked }>
                        <S.Plan isLooked = { isLooked } onClick = { startClick }>일정 자세히 보기</S.Plan>
                        { showPopup && 
                            <SuggestPopup 
                                memberId = { Number(localStorage.getItem("userId")) }
                                courseId = { courseData?.courseId }
                                onClose = { closePopup } 
                                onSave = { handleSave }
                                isChecked = { checkedList }
                                setIsChecked = { setCheckedList }
                                setParentChecked = { setIsChecked }
                            /> 
                        }
                    </S.PlanBox>
                </S.Content>
            </S.SuggestBox>
        </S.SuggestLayout>
    )
}