import styled from "styled-components";

export const CommentLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 23.81vw;
    gap: 1.25vw;
`

export const Text = styled.p`
    width: 40.93vw;
    height: 12.86vw;
    color: #9D8C84;
    font-size: 2.08vw;
    font-weight: 400;
    line-height: 140%;
    white-space: pre-line;
    margin: 0;
`

export const Box = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.04vw;
`

export const ImageBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16.97vw;
    height: 7.81vw;
    border: 0.05vw solid #D7749B;
    border-radius: 2.08vw;
    color: #D7749B;
    font-size: 2.34vw;
    font-weight: 600;
    box-shadow: 0vw 0.2vw 0.2vw rgba(215, 116, 155, 0.25);

    &:hover {
        background-color: #D7749B;
        color: #FFFAF8;
    }
`

export const SaveBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26.04vw;
    height: 7.81vw;
    background-color: ${({ isSaved }) => (
        isSaved ? "#D7749B" : "#FFFAF8"
    )};
    border: 0.05vw solid #D7749B;
    border-radius: 2.08vw;
    color: ${({ isSaved }) => (
        isSaved ? "#FFFAF8" : "#D7749B"
    )};
    font-size: 2.34vw;
    font-weight: 600;
    box-shadow: 0vw 0.2vw 0.2vw rgba(215, 116, 155, 0.25);
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