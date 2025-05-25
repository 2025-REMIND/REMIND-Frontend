import * as S from "./SuggestPopup.style";
import ICON from "../../../assets/todayplan/suggest/suggestpopup.svg";
import CLOSE from "../../../assets/todayplan/popup/closebutton.svg";
import LOCATION from "../../../assets/todayplan/suggest/location.svg";
import TIME from "../../../assets/todayplan/suggest/suggest-time.svg";
import TODO from "../../../assets/todayplan/suggest/todo.svg";
import UNCHECK from "../../../assets/todayplan/checkbox.svg";
import CHECK from "../../../assets/todayplan/checkingbox.svg";
import { useState } from "react";

export default function SuggestPopup({ onClose, onSave, isChecked, setIsChecked, setParentChecked }) {
    const lists = [
        "돗자리 펴고 조용한 음악 같이 듣기",
        "노을 보며 맥주 한 잔",
        "산책하기",
        "전화하기"
    ]

    const [answer, setAnswer] = useState([]);
    const [isSaved, setIsSaved] = useState(false);

    const updateAnswer = (index, value) => {
        const answerUpdate = [...answer];
        answerUpdate[index] = value;
        setAnswer(answerUpdate);
    };

    const saveClick = () => {
        setIsSaved((prev) => !prev);
        
        if (isChecked.every(Boolean)) onSave();
    };

    const checkClick = (index) => {
        const checkUpdate = [...isChecked];
        checkUpdate[index] = !checkUpdate[index];
        setIsChecked(checkUpdate);

        if (checkUpdate.some(v => v === false)) setParentChecked(false);
    }

    const handleClose = () => {
        if (isChecked.every(Boolean)) {
            onSave();
        }

        onClose();
    };

    return (
        <S.Overlay>
            <S.SuggestPopupLayout>
                <S.AllInfo>
                    <S.Text>
                        <S.Header>
                            <S.TopLeft>
                                <S.Icon src = { ICON } />
                                <S.Title>추천 데이트 코스</S.Title>
                            </S.TopLeft>
                            <S.CloseButton src = { CLOSE } onClick = { handleClose } />
                        </S.Header>
                        <S.SubTitle>
                        {`어디로 가야 할지 고민될 땐, RE:MIND가 오늘 분위기에 어울리는 데이트 코스를 살포시 추천해 드려요.
                        지금 이 순간에 잘 맞는 장소와 활동으로, 두 사람만의 특별한 하루를 만들 수 있을 거예요 :)`}
                        </S.SubTitle>
                    </S.Text>
                    <S.Info>
                        <S.LocationInfo>
                            <S.Location src = { LOCATION } />
                            <S.Place>여의도 한강 공원</S.Place>
                        </S.LocationInfo>
                        <S.TimeInfo>
                            <S.Time src = { TIME } />
                            <S.Clock>18:00 ~ 21:00</S.Clock>
                        </S.TimeInfo>
                    </S.Info>
                </S.AllInfo>
                <S.TodoBox>
                    <S.TodoText>
                        <S.Todo src = { TODO } />
                        <S.Name>오늘 할 일</S.Name>
                    </S.TodoText>
                    <S.TodoGroup>
                        { lists.map((todo, idx) => (
                            <S.Content key = { idx }>
                                <S.TodoList>
                                    <S.CheckBox src = { isChecked[idx] ? CHECK : UNCHECK } onClick = { () => checkClick(idx) }/>
                                    <S.List>{ todo }</S.List>
                                </S.TodoList>
                            </S.Content>
                        ))}
                    </S.TodoGroup>
                </S.TodoBox>
            </S.SuggestPopupLayout>
        </S.Overlay>
    )
}