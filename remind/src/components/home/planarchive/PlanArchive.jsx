import * as S from "./PlanArchive.style";
import DATE from "../../../assets/home/planarchive/date.svg";
import DRAMA from "../../../assets/home/planarchive/drama.svg";
import LOVE from "../../../assets/home/planarchive/love.svg";
import SONG from "../../../assets/home/planarchive/song.svg";
import { useState } from "react";

export default function PlanArchive() {
    const [archiveList] = useState([
        {
            id: 1,
            icon: DATE,
            date: "2025. 03. 13.",
            name: "'RIMI'가 추천한 우리 데이트",
            comment: "날씨도 좋은데 한강 데이트 가서 봄바람 같이 쐐기",
            status: "ing",
        },
        {
            id: 2,
            icon: LOVE,
            date: "2025. 03. 13.",
            name: "영화관에서 본 그날그",
            comment: "처음으로 같이 봤던\n영화 기억나?",
            status: "x",
        },
        {
            id: 3,
            icon: SONG,
            date: "2025. 03. 13.",
            name: "노래방에서 부른 노래",
            comment: "그 시절 즐겨 듣던 노래들\n다시 불러보기",
            status: "x",
        },
        {
            id: 4,
            icon: DRAMA,
            date: "2025. 03. 13.",
            name: "좋아했던 드라마",
            comment: "세 번째 데이트 때 본 그 드라마",
            status: "detail",
        },
    ]);

    const planStatus = (status) => {
        switch (status) {
            case "ing":
                return "진행중";
            case "x":
                return "미완료";
            case "detail":
                return "자세히";
        }
    }

    return (
        <S.ArchiveLayout>
            <S.Title>일정 보관함</S.Title>
            <S.SubTitle>추억이 담긴 일정들을 한 곳에, 우리의 시간, 고스란히 모아둘게요.</S.SubTitle>
            <S.Detail>
                <S.DetailText>자세히 보러 가기</S.DetailText>
                <S.IconDetail>→</S.IconDetail>
            </S.Detail>
            <S.ArchiveWrapper>
                { archiveList.map((item) => (
                    <S.ArchiveBox  key = { item.id } status = { item.status }>
                        <S.Archive>
                            <S.Info>
                                <S.Icon src = { item.icon } />
                                <S.Date>2025. 03. 13.</S.Date>
                            </S.Info>
                            <S.Name status = { item.status }>{ item.name }</S.Name>
                            <S.Comment status = { item.status }>{ item.comment }</S.Comment>
                        </S.Archive>
                        <S.Status>{ planStatus(item.status) }</S.Status>
                    </S.ArchiveBox>
                ))}
            </S.ArchiveWrapper>
    </S.ArchiveLayout>
    )
}