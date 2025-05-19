import * as S from "./MemoryRecord.style";
import ARCHIVE from "../../../assets/home/memoryrecord/archive.svg";

export default function MemoryRecord() {
    return (
        <S.RecordLayout>
            <S.Title>기억 기록하기</S.Title>
            <S.SubTitle>사진과 감정, 그날의 기억까지ㅡ 우리의 순간을 'RIMI'와 함께 기록해 보세요</S.SubTitle>
            <S.Plus>더보기 ＞</S.Plus>
                <S.Item>
                    <S.ItemLayout>
                        <S.Name>오늘, 문득 떠오른 생각</S.Name>
                        <S.Detail>{`
                            함께 했던 순간,
                            문득 떠오른 기억을
                            RE:MIND에 기록해 보아요
                       `}</S.Detail>
                        <S.Image src = { ARCHIVE } />
                        <S.Detail>2025. 03. 13.</S.Detail>
                    </S.ItemLayout>
                </S.Item>
        </S.RecordLayout>
    )
}