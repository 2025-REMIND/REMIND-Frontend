import * as S from "./Header.style";
import LOGO from "../../../assets/home/remind.svg";

export default function Header() {
    return (
        <S.HeaderLayout>
            <S.Home>
                <S.Image src = { LOGO } />
            </S.Home>
            <S.User>
                안녕하세요 000 님  
            </S.User>
            <S.Account>
                회원가입
            </S.Account>
            <S.Account>
                로그인
            </S.Account>
        </S.HeaderLayout>
    )
}