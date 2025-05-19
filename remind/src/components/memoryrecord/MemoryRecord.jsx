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
        </S.RecordLayout>
    )
}