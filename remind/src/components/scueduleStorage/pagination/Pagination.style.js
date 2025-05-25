import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-top: 3rem;
`;

export const PageButton = styled.button`
  width: 32px;
  height: 32px;
  font-size: 0.8rem;
  border: none;
  border-radius: ${({ isActive }) => (isActive ? '50% 50% 0 0' : '50%')};
  background-color: ${({ isActive }) => (isActive ? '#d7749b' : 'transparent')};
  color: ${({ isActive }) => (isActive ? '#ffffff' : '#ababab')};
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
  position: relative;

  ${({ isActive }) =>
    isActive &&
    `
    clip-path: path("M16 29C16 29 4 22 4 13C4 8.58 7.58 5 12 5C14.39 5 16 6.61 16 6.61C16 6.61 17.61 5 20 5C24.42 5 28 8.58 28 13C28 22 16 29 16 29Z");
    width: 34px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const Arrow = styled.button`
  background: transparent;
  border: none;
  color: ${({ disabled }) => (disabled ? '#ddd' : '#d7749b')};
  font-size: 1.5rem;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  padding: 0;
`;
