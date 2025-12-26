import styled from "styled-components";

export const MemoryRecordLayout = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 74.17vw;
    width: 100vw;
    gap: 3.59vw;
`

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.08vw;
`

export const MemoryGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 72.19vw;
    height: 46.88vw;
    border: 0.05vw solid #F6BFCF;
    border-radius: 2.60vw;
    gap: 2.06vw;
`

export const Img = styled.img`
    width: 65.63vw;
    height: 17.78vw;
`

export const Title = styled.p`
    display: flex;
    justify-content: center;
    font-weight: 700;
    font-size: 3.38vw;
    color: #d7749b;
    margin: 0;
`

export const SubTitle = styled.p`
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #9D8C84;
    font-size: 1.56vw;
    font-weight: 400;
    line-height: 140%;
    white-space: pre-line;
    margin: 0;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4.70vw;
`

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.03vw;
`

export const SongBox = styled.div`
    display: flex;
    align-items: center;
    gap: 1.04vw;
`

export const Icon = styled.img`
    width: 3.65vw;
    height: 3.65vw;
`

export const Detail = styled.p`
    color: #D7749B;
    font-size: 2.06vw;
    font-weight: 400;
    margin: 0;
`

export const EditBox = styled.div`
    display: flex;
    align-items: center;
    gap: 1.04vw;
`

export const GoBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26.04vw;
    height: 7.29vw;
    border: 0.05vw solid #D7749B;
    border-radius: 2.08vw;
    color: #D7749B;
    font-size: 2.60vw;
    font-weight: 600;

    
    &:active {
        background-color: #F6BFCF;
        color: #FFFAF8;
    }
`