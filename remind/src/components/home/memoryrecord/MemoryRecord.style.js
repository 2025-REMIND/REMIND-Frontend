import styled from "styled-components";

export const RecordLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 63.75vw;
    overflow-x: hidden;
`

export const Title = styled.div`
    font-weight: 700;
    font-size: 3.38vw;
    margin-top: 9.58vw;
    margin-bottom: 0.67vw;
    color: #D7749B;
`

export const SubTitle = styled.div`
    font-weight: 400;
    font-size: 1.56vw;
    color: #9D8C84;
`

export const Plus = styled.div`
    align-self: flex-end;
    margin-top: 1.61vw;
    margin-bottom: 1.25vw;
    font-weight: 600;
    font-size: 1.30vw;
    color: #9D8C84;
    margin-right: 4.32vw;
`

export const ItemWrapper = styled.div`
    display: flex;
    align-items: center;
    overflow-x: auto;
    width: 100vw;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const Items = styled.div`
    display: flex;
    gap: 3.12vw;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 2.60vw;
    width: 34.68vw;
    height: 41.87vw;
    background-color: #F6BFCF;
`

export const ItemLayout = styled.div`
    margin-left: 3.59vw;
`

export const Name = styled.div`
    margin-top: 3.22vw;
    color: #D7749B;
    font-weight: 700;
    font-size: 2.60vw;
`

export const Detail = styled.div`
    color: #FFFAF8;
    line-height: 140%;
    white-space: pre-line;
`

export const Image = styled.img`
    width: 27.50vw;
    height: 13.54vw;
    margin-top: 2.65vw;
    margin-bottom: 2.65vw;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`