import styled from "styled-components";

export const RecordLayout = styled.div`
    position: relative;
    width: 100vw;
    height: 56.25vw;
`

export const BlurOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    cursor: pointer;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(0.52vw);
    background-color: rgba(0, 0, 0, 0.3);
    pointer-events: none;
`;

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
    z-index: 10;
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
    background-color:${({ $status }) => (
        $status ? "#D7749B" : "#FFFAF8")};
    border: 0.05vw solid #D7749B;
    border-radius: 1.56vw;
    color:${({ $status }) => (
        $status ? "#FFFAF8" : "#D7749B")};
    font-size: 2.08vw;
`

export const BasicPlusImage = styled.img`
    width: 5.20vw;
    height: 5.20vw;
`

export const SaveBox = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    width: 15.20vw;
    height: 5.20vw;
    background-color: #FFFAF8;
    color: #D7749B;
    font-size: 2.08vw;
    font-weight: 600;
    border: 0.05vw solid #D7749B;
    border-radius: 1.56vw;
    position: absolute;
    top: 47.80vw;
    right: 3.75vw;

    &:active {
        background-color: #D7749B; /* 클릭 시 배경 */
        color: #FFFAF8;            /* 클릭 시 글자색 반전 */
    }
`

export const CommentBox = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    width: 48.33vw;
    height: 10.41vw;
    background-color: #fffaF8;
    border: 0.05vw solid #d7749b;
    border-radius: 1.56vw;
    color: #878787;
    font-weight: 200;
    font-size: 1.56vw;
`;

export const SongBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 48.33vw;
    height: 5.20vw;
    background-color: #fffaF8;
    border: 0.05vw solid #d7749b;
    border-radius: 1.56vw;
    color: #878787;
    font-weight: 200;
    font-size: 1.56vw;
    margin: 0 auto;
`;

export const CommentText = styled.textarea`
    width: 100%;
    height: 100%;
    margin-top: 1.92vw;
    margin-left: 3.12vw;
    border: none;
    resize: none;
    background: transparent;
    outline: none;
    font-size: 1.56vw;
    font-weight: 200;
    font-family: inherit;
    color: #878787;

    &:focus {
        color: #D7749B; 
    }
`;

export const SongText = styled.textarea`
    width: 100%;
    height: 100%;
    margin-top: 1.61vw;
    margin-left: 3.12vw;
    border: none;
    resize: none;
    background: transparent;
    outline: none;
    font-size: 1.56vw;
    font-weight: 200;
    font-family: inherit;
    color: #878787;

    &:focus {
        color: #D7749B; 
    }
`;