import * as S from "./Intro.style";

export default function Intro() {
    return(
        <S.IntroLayout>
            <S.Title>요즘, 우리 잘 지내고 있는 걸까?</S.Title>
            <S.Comment>{`
                가끔은 무심코 지나친 기억이,
                다시 꺼내 보면 생각보다 따뜻할 때가 있어요.

                함께 웃던 날, 많이 싸웠던 날, 그날의 노래, 그날의 장소, 그날의 우리.
                지금의 우리가 조금 멀게 느껴진다면,
                그때의 기억을 천천히 다시 꺼내봐요.

                RE:MIND가 두 사람의 감정을
                다시 이어 주는 감성 플래너가 되어 줄게요.
            `}</S.Comment>
        </S.IntroLayout>
    )
}