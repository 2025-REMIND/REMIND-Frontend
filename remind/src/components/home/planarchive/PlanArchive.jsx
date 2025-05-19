import * as S from "./PlanArchive.style";
import DATE from "../../../assets/home/planarchive/date.svg";

export default function PlanArchive() {
    return (
        <S.ArchiveLayout>
            <S.Title>일정 보관함</S.Title>
            <S.SubTitle>추억이 담긴 일정들을 한 곳에, 우리의 시간, 고스란히 모아둘게요.</S.SubTitle>
            <S.Detail>
                <S.DetailText>자세히 보러 가기</S.DetailText>
                <S.IconDetail>→</S.IconDetail>
            </S.Detail>

            <S.ArchiveBox>
                <S.Archive>
                    <S.Info>
                        <S.Icon src = { DATE } />
                        <S.Date>2025. 03. 13.</S.Date>
                    </S.Info>
                    <S.Name>'RIMI'가 추천한 우리 데이트</S.Name>
                    <S.Comment>날씨도 좋은데 한강 데이트 가서 봄바람 같이 쐐기</S.Comment>
                </S.Archive>
                <S.Status>진행중</S.Status>
            </S.ArchiveBox>
        </S.ArchiveLayout>
    )
}