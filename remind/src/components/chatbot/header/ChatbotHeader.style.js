import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 11.1vh; /* 120px → 11.1vh */
  background-color: #e9bdcc;
  border-bottom-left-radius: 2.8vh;
  border-bottom-right-radius: 2.8vh;
  position: relative;
`;

export const TabContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  
  justify-content: space-around;

  align-items: flex-end;
`;


export const TabLeftGroup = styled.div`
  display: flex;
`;
