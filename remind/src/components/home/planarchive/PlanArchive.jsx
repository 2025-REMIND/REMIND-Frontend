import { useNavigate } from "react-router-dom";
import * as S from "./PlanArchive.style";

export default function PlanArchive() {
    const navigate = useNavigate();

    const storageClick = () => {
        navigate(`/storage`);
    };

    return (
        <S.PlanArchiveLayout>
            <S.Text>
                <S.Title>일정 보관함</S.Title>
                <S.Comment>
                    {`우리만의 소중한 순간들이 흐트러지지 않도록,
                    기억 속 일정들을 한데 모아 따뜻하게 보관해 둘 수 있는 공간이에요.
                    함께한 날들의 설렘과 웃음, 때로는 그리움까지ㅡ
                    모든 감정의 파편들을 다시 꺼내어 볼 수 있도록, RE:MIND가 당신의 시간에 감성을 입혀 드릴게요.
                    그날의 풍경, 들었던 노래, 느꼈던 감정들까지 고스란히 담아, 우리의 이야기를 다시 시작해 볼 수 있어요.`}
                </S.Comment>
            </S.Text>
            <S.PlanArchiveBox onClick = { storageClick }>일정 보관함 바로가기</S.PlanArchiveBox>       
        </S.PlanArchiveLayout>
    )
}