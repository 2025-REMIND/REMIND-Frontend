import { useState } from "react";
import * as S from "./Comment.style";

export default function Comment() {
    const [isSaved, setIsSaved] = useState(false);

    const checkSave = () => {
        setIsSaved((prev) => !prev);
    };

    return (
        <S.CommentLayout>
            <S.Text>
                {`마음에 드는 데이트 코스,
                언제든 '일정 보관함'에서 다시 꺼내볼 수 있어요. 

                기억하고 싶은 오늘이라면, 보관함에 쏙ㅡ `}</S.Text>
            <S.ImageBox>사진 추가하기</S.ImageBox>
            <S.SaveBox isSaved = { isSaved } onClick = { checkSave }>일정 보관함에 저장하기</S.SaveBox>
        </S.CommentLayout>
    )
}