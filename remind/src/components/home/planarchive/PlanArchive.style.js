import styled from "styled-components";

export const ArchiveLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80.98vw;
`

export const Title = styled.div`
    font-weight: 700;
    font-size: 3.38vw;
    margin-top: 6.25vw;
    margin-bottom: 0.67vw;
    color: #d7749b;
`

export const SubTitle = styled.div`
    font-weight: 400;
    font-size: 1.56vw;
    color: #9D8C84;
`

export const Detail = styled.div`
    display: flex;
    align-self: flex-end;
    margin-top: 2.34vw;
    margin-right: 17.05vw;
    gap: 0.13vw;
`

export const DetailText = styled.div`
    font-weight: 400;
    font-size: 1.30vw;
    color: #9D8C84;
    border-bottom: 0.1vw solid #9D8C84;
`

export const IconDetail = styled.div`
    font-weight: 400;
    font-size: 1.30vw;
    color: #9D8C84;
`

export const ArchiveWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.60vw
`

export const ArchiveBox = styled.div`
    position: relative;
    width: 31.25vw;
    height: 26.04vw;
    margin-top: 1.04vw;
    border-radius: 1.56vw;

    background-color: ${({ status }) => {
        if (status === "ing" || status === "detail") return "#F6BFCF";
        else if (status === "x") return "#FFFAF8";
    }};

    border: ${({ status }) => {
        if (status === "x") return "0.05vw solid #D7749B";
    }};
`

export const Archive = styled.div`
    margin-left: 2.08vw;
    margin-right: 2.08vw;
`

export const Info = styled.div`
    display: flex;
    margin-top: 2.39vw;
    margin-bottom: 1.56vw;
    gap: 1.14vw;
`

export const Icon = styled.img`
    width: 2.76vw;
    height: 2.76vw;
`

export const Date = styled.div`
    display: flex;
    align-items: center;
    color: #d7749b;
`

export const Name = styled.div`
    font-weight: 700;
    font-size: 2.60vw;
    color: ${({ status }) => {
        if (status === "ing" || status === "detail") return "#FFFAF8";
        else if (status === "x") return "#D7749B";
    }};
    margin-bottom: 1.25vw;
    white-space: nowrap;
    overflow: hidden; 
    text-overflow: ellipsis; 
`

export const Comment = styled.div`
    font-weight: 400;
    font-size: 2.08vw;
    color: ${({ status }) => {
        if (status === "ing" || status === "detail") return "#FFFAF8";
        else if (status === "x") return "#D7749B";
    }};
    line-height: 140%;
    white-space: pre-line;
`

export const Status = styled.div`
    position: absolute;
    bottom: 2.08vw;
    right: 2.08vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFFAF8;
    border: 0.05vw solid #D7749B;
    border-radius: 0.75vw;
    color: #D7749B;
    font-size: 1.56vw;
    width: 8.85vw;
    height: 4.16vw;
`