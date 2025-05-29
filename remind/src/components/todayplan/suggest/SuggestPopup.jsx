import * as S from "./SuggestPopup.style";
import ICON from "../../../assets/todayplan/suggest/suggestpopup.svg";
import CLOSE from "../../../assets/todayplan/popup/closebutton.svg";
import LOCATION from "../../../assets/todayplan/suggest/location.svg";
import TIME from "../../../assets/todayplan/suggest/suggest-time.svg";
import TODO from "../../../assets/todayplan/suggest/todo.svg";
import UNCHECK from "../../../assets/todayplan/checkbox.svg";
import CHECK from "../../../assets/todayplan/checkingbox.svg";
import { useEffect, useState } from "react";
import CourseGetApi from "../../../api/api/todayplan/CourseGetApi";
import CoursePutApi from "../../../api/api/todayplan/CoursePutApi";

export default function SuggestPopup({ memberId, courseId, onClose, onSave, isChecked, setIsChecked, setParentChecked }) {
    const [isSaved, setIsSaved] = useState(false);
    const [place, setPlace] = useState("");
    const [time, setTime] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [courseIds, setCourseIds] = useState([]);

    useEffect(() => {
        const fetchCourse = async () => { 
            const data = await CourseGetApi(memberId, courseId);

            if (data) {
                const list = data.getCourseDetailResList;

                const todoContents = list.map(item => item.content);
                const courseIds = list.map(item => item.courseDetailId);

                const checkStatus = list.map(item => item.status === "DONE");

                setPlace(data.place);
                setTime(data.time);
                setTodoList(todoContents);
                setCourseIds(courseIds);

                setIsChecked(checkStatus);
            }
        };

        fetchCourse();
    }, [memberId, courseId]);

    const saveClick = async () => {
        setIsSaved((prev) => !prev);
        
        try {
            for (let i = 0; i < isChecked.length; i++) {
                if (isChecked[i]) {
                    await CoursePutApi(courseIds[i], memberId);
                }
            }

            if (isChecked.every(Boolean)) {
                onSave();
            }
        } catch (e) {
            console.log(e);
        }
    };

    const checkClick = async (index) => {
        const checkUpdate = [...isChecked];
        checkUpdate[index] = !checkUpdate[index];
        setIsChecked(checkUpdate);

        if (checkUpdate.some(v => v === false)) setParentChecked(false);
    };

    const handleClose = async () => {
        await saveClick();
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
                            <S.Place>{ place }</S.Place>
                        </S.LocationInfo>
                        <S.TimeInfo>
                            <S.Time src = { TIME } />
                            <S.Clock>{ time }</S.Clock>
                        </S.TimeInfo>
                    </S.Info>
                </S.AllInfo>
                <S.TodoBox>
                    <S.TodoText>
                        <S.Todo src = { TODO } />
                        <S.Name>오늘 할 일</S.Name>
                    </S.TodoText>
                    <S.TodoGroup>
                        { todoList.map((todo, idx) => (
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