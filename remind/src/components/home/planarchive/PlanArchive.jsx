import * as S from "./PlanArchive.style";

export default function PlanArchive() {
    return (
        <S.ArchiveLayout>
            <S.Title>일정 보관함</S.Title>
            <S.SubTitle>추억이 담긴 일정들을 한 곳에, 우리의 시간, 고스란히 모아둘게요.</S.SubTitle>
            <S.Detail>
                <S.DetailText>자세히 보러 가기</S.DetailText>
                <S.IconDetail>→</S.IconDetail>
            </S.Detail>
        </S.ArchiveLayout>
    )
}