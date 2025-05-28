import styled from "styled-components";

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 84.73vw;
    backdrop-filter: blur(0.52vw);
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const MissionPopupLayout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 88.54vw;
    height: 76.71vw;
    background-color: #F6BFCF;
    border: 0.05vw solid #D7749B;
    border-radius: 2.60vw;
    overflow-y: auto;
`

export const Label = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 32.66vw;
`

export const TopLeft = styled.div`
    display: flex;
    gap: 0.52vw;
`

export const TopRight = styled.div`
    display: flex;
    gap: 1.56vw;
`

export const Icon = styled.img`
    width: 3.64vw;
    height: 3.64vw;
`

export const Title = styled.div`
    color: #D7749B;
    font-size: 3.12vw;
    font-weight: 600;
`

export const SaveButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15.62vw;
    height: 5.20vw;
    border: 0.05vw solid #D7749B;
    border-radius: 1.56vw;
    font-size: 2.34vw;
    font-weight: 600;

    color: ${({ isSaved }) => (
        isSaved ? "#FFFAF8" : "#D7749B"
    )};

    background-color: ${({ isSaved }) => (
        isSaved ? "#D7749B" : "#FFFAF8"
    )};
`

export const CloseButton = styled.img`
    width: 3.65vw;
    height: 3.65vw;
`

export const Detail = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5.52vw;
`

export const SubTitle = styled.p`
    position: relative;
    left: 9.58vw;
    display: flex;
    align-items: center;
    width: 70.63vw;
    height: 4.38vw;
    color: #FFFAF8;
    font-size: 1.56vw;
    font-weight: 400;
    white-space: pre-line;
    line-height: 140%;
    margin: 0;
`

export const QuestionGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.40vw;
`

export const Check = styled.div`
`

export const CheckBox = styled.img`
    width: 3.65vw;
    height: 3.65vw;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.56vw;
`

export const Question = styled.div`
    display: flex;
    align-items: center;
    width: 70.63vw;
    gap: 1.56vw;
`

export const QuestionBox = styled.p`
    display: flex;
    align-items: center;
    color: #D7749B;
    font-size: 2.60vw;
    font-weight: 600;
    margin: 0;
`

export const AnswerBox = styled.div`
    display: flex;
    width: 70.63vw;
    height: 9.74vw;
    padding: 1.82vw 3.64vw;
    background-color: #FFFAF8;
    border: 0.05vw solid #D7749B;
    border-radius: 0vw 2.60vw 2.60vw 2.60vw;
    box-sizing: border-box;
`

export const Input = styled.textarea`
    width: 100%;
    height: 100%;
    font-size: 2.08vw;
    font-weight: 200;
    line-height: 140%;
    border: none;
    resize: none;
    background-color: transparent;
    outline: none;
    color: #878787;

    &:focus {
        color: #3F2E2E; 
    }
`