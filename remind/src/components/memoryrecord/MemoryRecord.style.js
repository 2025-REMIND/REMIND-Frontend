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

export const Header = styled.div`
    position: absolute;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    right: 3.54vw;
    z-index: 1;
`

export const User = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 21.14vw;
    height: 5.20vw;
    border-radius: 0vw 0vw 2.08vw 2.08vw;
    background-color: #F6BFCF;
    color: #D7749B;
    font-size: 1.56vw;
    font-weight: 700;
    z-index: 10;
`

export const LogoBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 21.14vw;
    height: 5.20vw;
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

export const Text = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 6.25vw;
    left: 5.52vw;
    gap: 0;
`

export const Title = styled.p`
    color: #D7749B;
    font-size: 3.13vw;
    font-weight: 700;
    margin: 0;
`

export const SubTitle = styled.p`
    color: #FFFAF8;
    font-size: 1.30vw;
    font-weight: 400;
    margin: 0;
`

export const Memory = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1.82vw;
    padding-top: 15vw;
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
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
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
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    &:active {
        background-color: #D7749B; 
        color: #FFFAF8; 
    }
`

export const CommentBox = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    padding: 1.93vw 3.13vw;
    width: 42.14vw;
    height: 6.56vw;
    background-color: #fffaF8;
    border: 0.05vw solid #d7749b;
    border-radius: 1.56vw;
    color: #878787;
    font-weight: 200;
    font-size: 1.56vw;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const SongBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 42.14vw;
    height: 2.19vw;
    padding: 1.61vw 3.13vw;
    background-color: #fffaF8;
    border: 0.05vw solid #d7749b;
    border-radius: 1.56vw;
    color: #878787;
    font-weight: 200;
    font-size: 1.56vw;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const CommentText = styled.textarea`
    width: 100%;
    height: 100%;
    border: none;
    resize: none;
    background: transparent;
    outline: none;
    font-size: 1.56vw;
    font-weight: 200;
    color: #878787;

    &:focus {
        color: #D7749B; 
    }
`;

export const SongText = styled.textarea`
    width: 100%;
    height: 100%;
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