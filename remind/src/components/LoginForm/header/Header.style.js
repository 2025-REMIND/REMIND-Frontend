import styled from "styled-components";

export const HeaderLayout = styled.div`
  display: flex;
  justify-content: center;
  gap: 30.36vw;
  background-color: #F6BFCF;
  width: 100vw;
  height: 6.25vw;
`;

export const UserBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Home = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d7749B;
  border-radius: 0vw 0vw 2.08vw 2.08vw;
  width: 21.14vw;
  height: 3.90vw;
`;

export const Tab = styled.div`
  padding: 8px 20px;
  background-color: ${(props) => (props.active ? 'white' : '#d7749b')};
  color: ${(props) => (props.active ? '#d7749b' : 'white')};
  border: 1px solid #bd6f8c;
  border-bottom: none;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  font-weight: 500;
  cursor: pointer;
`;
