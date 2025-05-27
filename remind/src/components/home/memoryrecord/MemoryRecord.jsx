import * as S from "./MemoryRecord.style";
import RECORD from "../../../assets/home/memoryrecord/record.svg";
import SONG from "../../../assets/home/memoryrecord/home-song.svg";
import EDIT from "../../../assets/home/memoryrecord/home-edit.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import RecentGetApi from "../../../api/api/home/RecentGetApi";

export default function MemoryRecord() {
    const navigate = useNavigate();
    const [recentDiary, setRecentDiary] = useState(null);

    const memoryClick = () => {
        navigate(`/memoryrecord`);
    };

    useEffect(() => {
        const fetchDiary = async () => {
            const memberId = Number(localStorage.getItem("memberId"));
            const diaryList = await RecentGetApi(memberId);

            if (diaryList && diaryList.length > 0)
                setRecentDiary(diaryList[0]);
        };

        fetchDiary();
    }, []);

    return (
        <S.MemoryRecordLayout>
            <S.Text>
                <S.Title>기억 기록하기</S.Title>
                <S.SubTitle>
                    {`사진, 감정, 음악까지ㅡ그날의 순간을 온전히 담아 보세요.
                    직접 사진을 올리고, 그날의 기분과 함께 듣던 노래를 적어 당신만의 소중한 기억을 기록할 수 있어요.`}
                </S.SubTitle>
            </S.Text>
            <S.MemoryGroup>
                <S.Content>
                    <S.Img src = { RECORD } />
                    <S.InputBox>
                        <S.SongBox>
                            <S.Icon src = { SONG } />
                            <S.Detail>{ recentDiary?.song }</S.Detail>
                        </S.SongBox>
                        <S.EditBox>
                            <S.Icon src = { EDIT } />
                            <S.Detail>{ recentDiary?.content }</S.Detail>
                        </S.EditBox>
                    </S.InputBox>
                </S.Content>
                <S.GoBox onClick = { memoryClick }>기록하러 가기</S.GoBox>
            </S.MemoryGroup>
    </S.MemoryRecordLayout>
    )

}