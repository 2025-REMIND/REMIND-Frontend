import * as S from "./MemoryRecord.style";
import HOME from "../../assets/memoryrecord/remind.svg";
import RECORD from "../../assets/memoryrecord/memory.svg";
import BASIC_PLUS from "../../assets/memoryrecord/basic-plusimage.svg";
import UPLOADING_PLUS from "../../assets/memoryrecord/uploading-plusimage.svg";
import AllHeader from "../home/components/AllHeader";
import React, { useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import diaryPostApi from "../../api/api/memoryrecord/diaryPostApi";

export default function MemoryRecord() {
    const [isUploading, setIsUploading] = useState(false);
    const [userName, setUserName] = useState("000");
    const inputRef = useRef(null);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        content: "",
        song: "",
        image: [],
    });
    
    const logoClick = () => {
        navigate(`/home`);
    }

    const onUploadImage = useCallback((e) => {
        setIsUploading(false);
        if (!e.target.files || e.target.files.length === 0) return;
        
        const files = Array.from(e.target.files);
        setFormData(prev => ({
            ...prev,
            image: [...prev.image, ...files],
        }))
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

    const Save = async () => {
        const { content, song, image } = formData;
        const memberId = Number(localStorage.getItem("memberId"));

        if (!memberId) {
            alert("로그인이 필요합니다.");
            navigate("/login");
            return;
        }

        const diaryId = await diaryPostApi(memberId, content, song, image);

        if (diaryId) {
            alert(`${ diaryId } 기억이 저장되었습니다!`);
            setFormData({
                content: "",
                song: "",
                image: [],
            });
        } else {
            alert("저장에 실패했습니다. 다시 시도해 주세요.");
        }
    };
    
    return (
        <S.RecordLayout>
            {isUploading && <S.BlurOverlay />}
            <S.Header>
                <AllHeader
                    input = { `안녕하세요 ${ userName } 님` }
                    weight = "700"
                    BGcolor = "#F6BFCF"
                    width = "17.86vw"
                />
                <AllHeader 
                    icon = { HOME } 
                    BGcolor = "#D7749B"
                    width = "17.86vw"
                    onClick = { logoClick }
                />
            </S.Header> 
            <S.RecordImage src = { RECORD } /> 
            <S.Content>
                <S.Text>
                    <S.Title>기억을 기록해요</S.Title>
                    <S.SubTitle>그날의 온도와 마음을 여기에 남겨 보세요.</S.SubTitle>
                </S.Text>
                <S.Memory>
                    <S.ImageBox $status = { isUploading }>
                        <S.BasicPlusImage 
                            src = { isUploading ? UPLOADING_PLUS : BASIC_PLUS } 
                            onClick = { onUploadImageButtonClick } 
                        />
                        사진을 첨부해 주세요
                        <input 
                            type = "file" 
                            accept = "image/*" 
                            ref = { inputRef } 
                            onChange = { onUploadImage } 
                            style = {{ display: "none" }} 
                        />
                    </S.ImageBox>  
                    <S.CommentBox>
                        <S.CommentText
                            value = { formData.comment }
                            onChange = { (e) => 
                                setFormData((prev) => ({
                                    ...prev,
                                    comment: e.target.value,
                                })) 
                            }
                            placeholder = "이때 어떤 일이 있었는지, 지금은 어땠는지 자유롭게 남겨보세요."
                        />
                    </S.CommentBox>
                    <S.SongBox>
                        <S.SongText
                            value = { formData.song }
                            onChange = { (e) => 
                                setFormData((prev) => ({
                                    ...prev,
                                    song: e.target.value,
                                }))
                            }
                            placeholder = "이때 들었던 노래나, 생각나는 노래가 있으면 입력해 주세요."
                        />
                    </S.SongBox>
                </S.Memory>
                <S.SaveBox onClick = { Save }>저장하기</S.SaveBox>
            </S.Content> 
        </S.RecordLayout>
    )
}