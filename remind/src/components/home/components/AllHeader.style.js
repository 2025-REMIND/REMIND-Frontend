import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ hasText, BGcolor }) => hasText ? BGcolor || "#FFFAF8" : "transparent" };
    color: ${({ color }) => color || "#D7749B"};
    border-radius: 0vw 0vw 2.08vw 2.08vw;
    font-weight: 500;
    font-size: 1.56vw;
    width: ${({ width }) => width || "9.06vw" };
    height: 3.90vw;

    img {
        width: 14.11vw;
        height: 2.34vw;
    }
`