import * as S from "./MemoryRecord.style";
import HOME from "../../assets/memoryrecord/remind.svg";
import RECORD from "../../assets/memoryrecord/memory.svg";
import BASIC_PLUS from "../../assets/memoryrecord/basic-plusimage.svg";

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
                <S.Memory>
                    <S.ImageBox>
                        <S.BasicPlusImage src = { BASIC_PLUS } />
                        사진을 첨부해 주세요
                    </S.ImageBox>  
                    <S.CommentBox>
                        이때 어떤 일이 있었는지, 지금은 어땠는지 자유롭게 남겨보세요.    
                    </S.CommentBox>
                    <S.SongBox>
                        이때 들었던 노래나, 생각나는 노래가 있으면 입력해 주세요.
                    </S.SongBox> 
                </S.Memory>
            </S.Content> 
        </S.RecordLayout>
    )
}