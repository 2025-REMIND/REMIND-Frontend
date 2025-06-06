import styled from "styled-components";

export const MissionLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 28.69vw;
    gap: 5.31vw;
`

export const CheckBox = styled.img`
    width: 5.20vw;
    height: 5.20vw;
`

export const MissionBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 62.50vw;
    height: 22.23vw;
    border: 0.05vw solid #D7749B;
    border-radius: 2.60vw;
    box-shadow: 0vw 0.2vw 0.2vw rgba(215, 116, 155, 0.25);
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 3.54vw;
    gap: 0.63vw;
`

export const BoxText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.30vw;
`

export const Mission = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.52vw;
`

export const Icon = styled.img`
    width: 2.08vw;
    height: 2.08vw;
`

export const Label = styled.p`
    color: #D7749B;
    font-size: 1.56vw;
    font-weight: 500;
    margin: 0;
`

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.83vw;
`

export const Title = styled.p`
    color: #D7749B;
    font-size: 2.60vw;
    font-weight: 800;
    margin: 0;
`

export const SubTitle = styled.p`
    color: #D7749B;
    font-size: 2.08vw;
    font-weight: 400;
    margin: 0;
`

export const StartBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    width: 15.62vw;
    height: 4.68vw;   
    background-color: #FFFAF8;
    border: 0.05vw solid #D7749B;
    border-radius: 1.56vw;
    box-shadow: 0vw 0.2vw 0.2vw rgba(215, 116, 155, 0.25);

    &:active {
        background-color: #D7749B;
    }
`

export const Start = styled.div`
    color: #D7749B;
    font-size: 2.08vw;
    font-weight: 600;

    &:active {
        color: #FFFAF8;
    }
`