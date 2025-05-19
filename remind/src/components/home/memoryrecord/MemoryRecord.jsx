import * as S from "./MemoryRecord.style";
import ARCHIVE from "../../../assets/home/memoryrecord/archive.svg";
import { useEffect, useRef } from "react";

export default function MemoryRecord() {
    // const memoryList = response.data.memories;
    const memoryList = [1, 2, 3, 4];

    const mainRef = useRef(null);

    useEffect(() => {
        if (mainRef.current) {
            const itemWidth = 34.68;
            const gap = 3.1;
            const vw = window.innerWidth / 100;

            const itemAllWidth = (itemWidth + gap) * vw;
            const gapCenter = (gap * vw) / 2;

            const myMain = itemAllWidth * 2 - gapCenter;

            const center = window.innerWidth / 2;
            const scroll = myMain - center;

            mainRef.current.scrollLeft = scroll;
        }
    }, []);

    return (
        <S.RecordLayout>
            <S.Title>기억 기록하기</S.Title>
            <S.SubTitle>
                사진과 감정, 그날의 기억까지ㅡ 우리의 순간을 'RIMI'와 함께 기록해 보세요
            </S.SubTitle>
            <S.Plus>더보기 ＞</S.Plus>

            <S.ItemWrapper ref = { mainRef }>
                <S.Items>
                    { memoryList.map((_, i) => (
                        <S.Item key = { i }>
                            <S.ItemLayout>
                                <S.Name>오늘, 문득 떠오른 생각</S.Name>
                                <S.Detail>{`
                                함께 했던 순간,
                                문득 떠오른 기억을
                                RE:MIND에 기록해 보아요
                                `}</S.Detail>
                                <S.Image src = { ARCHIVE } />
                            <   S.Detail>2025. 03. 13.</S.Detail>
                            </S.ItemLayout>
                        </S.Item>
                    ))}
                </S.Items>
            </S.ItemWrapper>
        </S.RecordLayout>
    );
}
