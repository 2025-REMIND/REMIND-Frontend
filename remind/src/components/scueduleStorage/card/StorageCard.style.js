import styled from 'styled-components';

export const CardWrapper = styled.div`
  background-color: ${({ $bgColor }) => $bgColor || '#fff'};
  border-radius: 20px;
  padding: 2rem;
  margin: 2rem auto;
  width: 50rem;
  
  max-width: 80%;
  box-shadow: 0 0.3vh 0.6vh rgba(0, 0, 0, 0.1);
`;

export const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

export const CardLeft = styled.div`
  flex: 1;
  color: ${({ $textColor }) => $textColor || '#000'};
`;


export const IconRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const RowIcon = styled.img`
  width: 1.2rem;
  height: 1.2rem;
  
  object-fit: contain;
  vertical-align: middle; // ✅ 추가

`;

export const DateText = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  
  padding-bottom: 1rem;
`;

export const Location = styled.div`
  font-size: 1.2rem;
  line-height: 1.2rem;  /* 아이콘과 같은 높이로 맞추기 */
  display: inline-block;
  align-items: center;
`;

export const MissionTitle = styled.div`
  font-size: 1.2rem;
  display: inline-block;
`;

export const MissionList = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 1rem;
`;

export const MissionItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const MissionIcon = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 0.3rem;
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
  padding-top:25px;;
  width: 100%;
  height: 80px;
  object-fit: cover;
  border-radius: 10px;
`;


export const CardContainer = styled.div`
  width: 25rem;      
  margin: 0 auto;

  display: flex;
  flex-direction: column;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
  margin-top: 1rem;
`;

// export const ButtonGroup = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   gap: 2rem;
//   margin-top: 1rem;
//   margin-right: 40rem;
// `;

export const NavigateButton = styled.button`
  background-color: white;
  color: #d7749b;
  padding: 0.6rem 1.4rem;
  border: 1px solid #d7749b;
  width: 14rem;
  height: 4rem;
  border-radius: 12px;
  font-size: 20px;
  cursor: pointer;
  &:hover{
    
    background-color: #d7749b;
    color:white;
  }
`;

export const DeleteButton = styled.button`
  background-color: white;
  
  font-size: 20px;
  color: #d7749b;
  padding: 0.6rem 1.4rem;
  border: 1px solid #d7749b;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 10rem;
  &:hover {
    background-color: #d7749b;
    color: white;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background-color: #f5f5f5;
    color: #aaa;
    border: 1px solid #ddd;
  }
`;

