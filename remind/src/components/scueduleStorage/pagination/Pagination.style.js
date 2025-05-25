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
  font-size: 1rem;
  border: none;
  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? '#d7749b' : 'transparent')};
  color: ${({ isActive }) => (isActive ? '#fff' : '#888')};
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;
  position: relative;

  &::before {
    content: ${({ isActive }) => (isActive ? '"❤️"' : '""')};
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.5rem;
    color: #d7749b;
    opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const Arrow = styled.button`
  background: transparent;
  border: none;
  color: ${({ disabled }) => (disabled ? '#ddd' : '#d7749b')};
  font-size: 1.5rem;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
`;
