import * as S from "./TodayPlan.style";
import MISSION from "../../../assets/home/todayplan/todaymission.svg";
import { useNavigate } from "react-router-dom";

export default function TodayPlan() {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate(`/todayplan`);
    }

    return (
        <S.TodayScheduleLayout>
            <S.Content>
                <S.Text>
                    <S.Title>오늘, 우리를 위한 하루가 준비되어 있어요</S.Title>
                    <S.Comment>
                        {`매일 당신의 기억 속을 천천히 살펴보는
                        RE:MIND의 감성비서 'RIMI'가 오늘도 우리만을 위한 하루를 선물했어요.
                        함께 걸었던 길, 들었던 노래, 웃었던 순간을 떠올리며

                        지금, 오늘의 데이트 미션을 확인해 볼까요?`}
                    </S.Comment>
                </S.Text>
                <S.CheckBox onClick = { () => handleClick() }>오늘의 일정 보기</S.CheckBox>
            </S.Content>
        <S.Image src = { MISSION }></S.Image>
    </S.TodayScheduleLayout>
    )
}