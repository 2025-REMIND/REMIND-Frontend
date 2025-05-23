import styled from 'styled-components';

export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ bgColor }) => bgColor || '#fff'};
  color: ${({ textColor }) => textColor || '#7d2953'};
  padding: 0.74vh 1.5vh;
  border-top-left-radius: 1.5vh;
  border-top-right-radius: 1.5vh;
  font-weight: 500;
  font-size: 1.3vh;
width: clamp(10rem, 15vw, 21rem);
  height: 4vh;
  
  img {
    height: 1.3vh;
    margin-right: 0.55vh;
  }
`;


