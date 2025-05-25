import styled from "styled-components";

export const HeaderLayout = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    background-color: #F6BFCF;
    width: 100vw;
    height: 6.25vw;
    border-radius: 0vw 0vw 4.68vw 4.68vw;
`

export const LeftBox = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 6.88vw;
`

export const LogoBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #D7749B;
    width: 18.38vw;
    height: 3.90vw;
    border-radius: 2.08vw 2.08vw 0vw 0vw;
`

export const Logo = styled.img`
    width: 14.11vw;
    height: 2.34vw;
`

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    width: 13.54vw;
    height: 3.90vw;
    background-color: #FFFAF8;
    border-radius: 2.08vw 2.08vw 0vw 0vw;

    p {
        color: #D7749B;
        font-size: 2.08vw;
        font-weight: 800;
        margin: 0;
    }
`

export const RightBox = styled.div`
    display: flex;
    flex-direction: row;
    padding-right: 6.88vw;
`

export const TimeBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 13.54vw;
    height: 4.06vw;
    background-color: #D7749B;
    border-radius: 2.08vw 2.08vw 0vw 0vw;
    gap: 0.78vw;
`

export const Time = styled.div`
    font-size: 2.08vw;
    font-weight: 700;
    color: #FFFAF8;
`

export const MusicBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 17.08vw;
    height: 4.06vw;
    background-color: #D7749B;
    border-radius: 2.08vw 2.08vw 0vw 0vw;
    gap: 0.78vw;
`

export const Icon = styled.img`
    width: 3.12vw;
    height: 3.12vw;
`

export const Music = styled.p`
    color: #FFFAF8;
    font-size: 1.56vw;
    font-weight: 700;
    margin: 0;
`