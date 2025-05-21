import { useCallback, useRef, useState } from "react";
import * as S from "./Comment.style";

export default function Comment() {
    const [isSaved, setIsSaved] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [images, setImages] = useState([]);
    const inputRef = useRef(null);

    const saveClick = () => {
        setIsSaved((prev) => !prev);
    };

    const ImageClick = useCallback(() => {
        if (!inputRef.current) return;
        setIsUploading(true);
        inputRef.current.click();

        const Focus = () => {
            setIsUploading(false);
            window.removeEventListener("focus", Focus);
        };

        window.addEventListener("focus", Focus);
    }, []);

    const handleImage = useCallback((e) => {
        if (!e.target.files || e.target.files.length === 0) return;

        const selectFiles = Array.from(e.target.files);
        setImages((prev) => [...prev, ...selectFiles]);
        setIsUploading(false);
    }, []);

    return (
        <S.CommentLayout>
            { isUploading && <S.BlurOverlay /> }
            <S.Text>
                {`마음에 드는 데이트 코스,
                언제든 '일정 보관함'에서 다시 꺼내볼 수 있어요. 

                기억하고 싶은 오늘이라면, 보관함에 쏙ㅡ `}</S.Text>
            <S.ImageBox onClick = { ImageClick }>사진 추가하기</S.ImageBox>
            <input
                type = "file"
                accept = "image/*"
                ref = { inputRef } 
                onChange = { handleImage } 
                style = {{ display: "none" }} 
            />
            <S.SaveBox isSaved = { isSaved } onClick = { saveClick }>일정 보관함에 저장하기</S.SaveBox>
        </S.CommentLayout>
    )
}