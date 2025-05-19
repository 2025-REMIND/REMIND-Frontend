import * as S from "./MemoryRecord.style";
import HOME from "../../assets/memoryrecord/remind.svg";

export default function MemoryRecord() {
    return (
        <S.RecordLayout>
            <S.LogoBox>
                <S.Logo src = { HOME } />
            </S.LogoBox>     
        </S.RecordLayout>
    )
}