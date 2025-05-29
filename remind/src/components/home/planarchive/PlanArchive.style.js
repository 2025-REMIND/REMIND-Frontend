import styled from "styled-components";

export const PlanArchiveLayout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 44.32vw;
    gap: 6.25vw;
`

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.06vw;
`

export const Title = styled.p`
    display: flex;
    justify-content: center;
    font-weight: 700;
    font-size: 3.38vw;
    color: #d7749b;
    margin: 0;
`

export const Comment = styled.p`
    display: flex;
    text-align: center;
    color: #9D8C84;
    font-size: 1.56vw;
    font-weight: 400;
    line-height: 140%;
    white-space: pre-line;
    margin: 0;
`

export const PlanArchiveBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 26.04vw;
    height: 7.81vw;
    border: 0.05vw solid #D7749B;
    border-radius: 1.56vw;
    color: #D7749B;
    font-size: 2.08vw;
    font-weight: 600;

    &:active {
        background-color: #F6BFCF;
        color: #FFFAF8;
    }
`