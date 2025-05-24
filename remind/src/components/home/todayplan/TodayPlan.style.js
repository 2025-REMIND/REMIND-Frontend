import styled from "styled-components";

export const TodayScheduleLayout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #D7749B;
    border-radius: 1.56vw;
    width: 100vw;
    height: 45.57vw;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
`

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 2.60vw;
    font-weight: 700;
    color: #FFFAF8;
`

export const Comment = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 140%;
    font-size: 2.08vw;
    font-weight: 400;
    color: #FFFAF8;
    white-space: pre-line;
`

export const CheckBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 6.25vw;
    width: 24.79vw;
    height: 6.77vw;
    border-radius: 1.56vw;
    background-color: #FFFAF8;
    color: #D7749B;
    font-weight: 700;
    font-size: 2.08vw;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

export const Image = styled.img`
    width: 31.14vw;
    height: 31.14vw;
    align-self: flex-end;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`