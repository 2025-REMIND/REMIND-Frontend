import * as S from "./MemoryRecord.style";
import HOME from "../../assets/memoryrecord/remind.svg";
import RECORD from "../../assets/memoryrecord/memory.svg";
import BASIC_PLUS from "../../assets/memoryrecord/basic-plusimage.svg";
import UPLOADING_PLUS from "../../assets/memoryrecord/uploading-plusimage.svg";
import React, { useCallback, useRef, useState } from "react";

export default function MemoryRecord() {
    const [isUploading, setIsUploading] = useState(false);
    const inputRef = useRef(null);

    const [comment, setComment] = useState("이때 어떤 일이 있었는지, 지금은 어땠는지 자유롭게 남겨보세요.");
    const [song, setSong] = useState("이때 들었던 노래나, 생각나는 노래가 있으면 입력해 주세요.");
    
    const onUploadImage = useCallback((e) => {
        setIsUploading(false);
        if (!e.target.files || e.target.files.length === 0) return;
        // const file = e.target.files[0];
    }, []);

    const onUploadImageButtonClick = useCallback(() => {
        setIsUploading(true);

        if (!inputRef.current) return;
        inputRef.current.value = "";
        inputRef.current.click();

        const handleFocusBack = () => {
            setIsUploading(false);
            window.removeEventListener("focus", handleFocusBack);
        };

        window.addEventListener("focus", handleFocusBack);
    }, []);
    
    return (
        <S.RecordLayout>
            {isUploading && <S.BlurOverlay />}
            <S.LogoBox>
                <S.Logo src = { HOME } />
            </S.LogoBox>   
            <S.RecordImage src = { RECORD } /> 
            <S.Content>
                <S.Title>기억을 기록해요</S.Title>
                <S.SubTitle>그날의 온도와 마음을 여기에 남겨보세요.</S.SubTitle>
                <S.Memory>
                    <S.ImageBox $status = { isUploading }>
                        <S.BasicPlusImage src = { isUploading ? UPLOADING_PLUS : BASIC_PLUS } onClick = { onUploadImageButtonClick } />
                        사진을 첨부해 주세요
                        <input type = "file" accept = "image/*" ref = { inputRef } onChange = { onUploadImage } style = {{ display: "none" }} />
                    </S.ImageBox>  
                    <S.CommentBox>
                        <S.CommentText
                            value = { comment }
                            onChange = { (e) => setComment(e.target.value) }
                        />
                    </S.CommentBox>
                    <S.SongBox>
                        <S.SongText
                            value = { song }
                            onChange = { (e) => setSong(e.target.value) }
                        />
                    </S.SongBox>
                </S.Memory>
                <S.SaveBox>
                    저장하기
                </S.SaveBox>
            </S.Content> 
        </S.RecordLayout>
    )
}