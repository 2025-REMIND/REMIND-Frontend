import * as S from "./Rimi.style";

export default function Rimi() {
    return (
        <S.RimiLayout>
            <S.Title>지금, 'RIMI'와 대화를 시작해 볼까요?</S.Title>
            <S.SubTitle>{`
                그 시절 우리가 나눴던 말들, 함께 들었던 노래, 기억 속에 남겨진 작은 감정들까지ㅡ
                'RIMI' 그 모든 조각을 모아 당신과 대화하고 싶어요.
                서로의 마음을 다시 마주보고, 조금은 잊고 지냈던 감정을 되살려보는 시간,
                지금 'RIMI'와 함께 시작해 보세요.
            `}</S.SubTitle>
        </S.RimiLayout>
    )
}