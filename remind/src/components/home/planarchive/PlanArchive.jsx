import * as S from "./PlanArchive.style";
import DATE from "../../../assets/home/planarchive/date.svg";
import DRAMA from "../../../assets/home/planarchive/drama.svg";
import LOVE from "../../../assets/home/planarchive/love.svg";
import SONG from "../../../assets/home/planarchive/song.svg";

export default function PlanArchive() {
    return (
        <S.ArchiveLayout>
            <S.Title>일정 보관함</S.Title>
            <S.SubTitle>추억이 담긴 일정들을 한 곳에, 우리의 시간, 고스란히 모아둘게요.</S.SubTitle>
            <S.Detail>
                <S.DetailText>자세히 보러 가기</S.DetailText>
                <S.IconDetail>→</S.IconDetail>
            </S.Detail>
            <S.ArchiveWrapper>
                <S.ArchiveBox status = "ing">
                    <S.Archive>
                        <S.Info>
                            <S.Icon src = { DATE } />
                            <S.Date>2025. 03. 13.</S.Date>
                        </S.Info>
                        <S.Name status = "ing">'RIMI'가 추천한 우리 데이트</S.Name>
                        <S.Comment status = "ing">날씨도 좋은데 한강 데이트 가서 봄바람 같이 쐐기</S.Comment>
                    </S.Archive>
                    <S.Status>진행중</S.Status>
                </S.ArchiveBox>

                <S.ArchiveBox status = "x">
                    <S.Archive>
                        <S.Info>
                            <S.Icon src = { LOVE } />
                            <S.Date>2025. 03. 13.</S.Date>
                        </S.Info>
                        <S.Name status = "x">영화관에서 본 그날그</S.Name>
                        <S.Comment status = "x">
                            {`처음으로 같이 봤던
                            영화 기억나?`}
                        </S.Comment>
                    </S.Archive>
                    <S.Status>미완료</S.Status>
                </S.ArchiveBox>

                <S.ArchiveBox status = "x">
                    <S.Archive>
                        <S.Info>
                            <S.Icon src = { SONG } />
                            <S.Date>2025. 03. 13.</S.Date>
                        </S.Info>
                        <S.Name status = "x">노래방에서 부른 노래</S.Name>
                        <S.Comment status = "x">
                            {`그 시절 즐겨 듣던 노래들
                            다시 불러보기`}</S.Comment>
                    </S.Archive>
                    <S.Status>미완료</S.Status>
                </S.ArchiveBox>

                <S.ArchiveBox status = "detail">
                    <S.Archive>
                        <S.Info>
                            <S.Icon src = { DRAMA } />
                            <S.Date>2025. 03. 13.</S.Date>
                        </S.Info>
                        <S.Name status = "detail">좋아했던 드라마</S.Name>
                        <S.Comment status = "detail">세 번째 데이트 때 본 그 드라마</S.Comment>
                    </S.Archive>
                    <S.Status>자세히</S.Status>
                </S.ArchiveBox>
            </S.ArchiveWrapper>
    </S.ArchiveLayout>
    )
}