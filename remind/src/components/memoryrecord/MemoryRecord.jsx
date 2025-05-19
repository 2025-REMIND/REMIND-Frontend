import * as S from "./MemoryRecord.style";
import HOME from "../../assets/memoryrecord/remind.svg";
import RECORD from "../../assets/memoryrecord/memory.svg";

export default function MemoryRecord() {
    return (
        <S.RecordLayout>
            <S.LogoBox>
                <S.Logo src = { HOME } />
            </S.LogoBox>   
            <S.RecordImage src = { RECORD } /> 
            <S.Content>
                <S.Text>
                    <S.Title>기억을 기록해요</S.Title>
                    <S.SubTitle>그날의 온도와 마음을 여기에 남겨보세요.</S.SubTitle>
                </S.Text>
            </S.Content> 
        </S.RecordLayout>
    )
}