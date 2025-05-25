import styled from 'styled-components';

export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ bgColor }) => bgColor || '#fff'};
  color: ${({ textColor }) => textColor || '#7d2953'};

  
  font-weight: 500;
  font-size: 1.5vw;
  width: 18.38vw;
  height: 3.90vw;
  border-radius: 2.08vw 2.08vw 0vw 0vw;
  
  img {
    width: 14.11vw;
    height: 2.34vw;
  }
`;


