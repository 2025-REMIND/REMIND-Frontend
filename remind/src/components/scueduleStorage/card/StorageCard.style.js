import styled from 'styled-components';

export const CardWrapper = styled.div`
  background-color: #f3c8da;
  border-radius: 20px;
  padding: 2rem;
  margin: 2rem auto;
  width: 80%;
  box-shadow: 0 0.3vh 0.6vh rgba(0, 0, 0, 0.1);
`;

export const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

export const CardLeft = styled.div`
  flex: 1;
  color: white;
`;

export const DateText = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const Location = styled.div`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const MissionTitle = styled.div`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const MissionList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const MissionItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const MissionCheck = styled.span`
  font-size: 1.1rem;
`;

export const CardRight = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  width: 180px;
`;

export const Image = styled.img`
  width: 100%;
  height: 80px;
  object-fit: cover;
  border-radius: 10px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
`;

export const NavigateButton = styled.button`
  background-color: white;
  color: #d7749b;
  padding: 0.6rem 1.4rem;
  border: 1px solid #d7749b;
  border-radius: 12px;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  background-color: white;
  color: #d7749b;
  padding: 0.6rem 1.4rem;
  border: 1px solid #d7749b;
  border-radius: 12px;
  cursor: pointer;
`;
