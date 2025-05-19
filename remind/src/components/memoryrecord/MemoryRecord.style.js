import styled from "styled-components";

export const RecordLayout = styled.div`
    position: relative;
    width: 100vw;
    height: 56.25vw;
`

export const LogoBox = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 21.14vw;
    height: 5.20vw;
    right: 3.54vw;
    border-radius: 0vw 0vw 2.08vw 2.08vw;
    background-color: #D7749B;
`

export const Logo = styled.img`
    width: 14.06vw;
    height: 2.34vw;
`

export const RecordImage = styled.img`
    position: absolute;
    width: 100vw;
    height: 52.29vw;
    top: 3.95vw;
    z-index: -1;
`

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const Text = styled.div`
`

export const Title = styled.div`
    display: flex;
    margin-top: 6.25vw;
    margin-left: 5.52vw;
    color: #D7749B;
    font-weight: 700;
    font-size: 3.12vw;
    line-height: 140%;
`

export const SubTitle = styled.div`
    display: flex;
    margin-left: 5vw;
    color: #FFFAF8;
    font-size: 1.30vw;
    line-height: 140%;
`

export const Memory = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.82vw;
`

export const ImageBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 36.45vw;
    height: 18.22vw;
    gap: 1.04vw;
    background-color: #FFFAF8;
    border: 0.05vw solid #D7749B;
    border-radius: 1.56vw;
    color: #D7749B;
    font-size: 2.08vw;
    /* margin-left: 31.82vw; */
`

export const BasicPlusImage = styled.img`
    width: 5.20vw;
    height: 5.20vw;
`

export const CommentBox = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    width: 48.33vw;
    height: 10.41vw;
    background-color: #FFFAF8;
    border: 0.05vw solid #D7749B;
    border-radius: 1.56vw;
    color: #878787;
    font-weight: 200;
    font-size: 1.56vw;
`