import styled from "styled-components";

export const StorageLayout=styled.div`
  display: flex;
  flex-direction:column;
  gap:1rem;
  height: 100%;
  width:100%;
`

export const TitleBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap:1rem;
  padding-left: 20%;
`;

export const StorageTitle = styled.div`
  font-size: 2.4rem;
  color: #d7749b;
  margin: 5rem 0 0 3rem;
  font-weight: bold;
`;

export const StorageText = styled.div`
  font-size: 1rem;
  color: #9d8c84;
`;

export const EmptyImageBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 4rem 0;
  

  img {
    width: 50rem;
    max-width: 80%;
    object-fit: contain;
  }
`;
