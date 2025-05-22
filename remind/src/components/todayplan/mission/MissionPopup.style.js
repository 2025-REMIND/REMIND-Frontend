import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
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
`

export const Label = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 5.93vw;
`

export const Icon = styled.img`
    width: 3.64vw;
    height: 3.64vw;
    margin-right: 0.52vw;
`

export const Title = styled.div`
    color: #D7749B;
    font-size: 3.12vw;
    font-weight: 600;
`

export const SaveButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15.62vw;
    height: 5.20vw;
    margin-left: 40.62vw;
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

export const SubTitle = styled.div`
    color: #FFFAF8;
    font-size: 1.56vw;
    font-weight: 400;
    white-space: pre-line;
    line-height: 140%;
    margin-left: 9.58vw;
    margin-bottom: 4.11vw;
`

export const QuestionBox = styled.div`
    margin-left: 9.58vw;
    margin-bottom: 1.25vw;
`

export const Question = styled.div`
    margin-bottom: 1.04vw;
    color: #D7749B;
    font-size: 2.60vw;
    font-weight: 600;
`

export const AnswerBox = styled.div`
    display: flex;
    width: 70.63vw;
    height: 9.74vw;
    background-color: #FFFAF8;
    border: 0.05vw solid #D7749B;
    border-radius: 0vw 2.60vw 2.60vw 2.60vw;
`

export const Input = styled.textarea`
    width: 100%;
    height: 100%;
    margin-top: 1.82vw;
    margin-left: 3.65vw;
    font-size: 2.08vw;
    font-weight: 200;
    line-height: 140%;
    border: none;
    resize: none;
    background-color: transparent;
    outline: none;
    color: #878787;

    &:focus {
        color: #D7749B; 
    }
`

export const Button = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 2.40vw;
    margin-right: 8.33vw;
    gap: 2.08vw;
`

export const ExampleButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 17.71vw;
    height: 5.20vw;
    background-color: #F6BFCF;
    border: 0.05vw solid #D7749B;
    border-radius: 1.56vw;
    color: #D7749B;
    font-size: 2.08vw;
    font-weight: 400;

    color: ${({ isExample }) => (
        isExample ? "#FFFAF8" : "#D7749B"
    )};

    background-color: ${({ isExample }) => (
        isExample ? "#D7749B" : "#F6BFCF"
    )};
`

export const EndButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 17.71vw;
    height: 5.20vw;
    border: 0.05vw solid #D7749B;
    border-radius: 1.56vw;
    font-size: 2.08vw;
    font-weight: 400;

    color: ${({ isEnded }) => (
        isEnded ? "#FFFAF8" : "#D7749B"
    )};

    background-color: ${({ isEnded }) => (
        isEnded ? "#D7749B" : "#FFFAF8"
    )};
`