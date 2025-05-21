import styled from 'styled-components';
export const Header=styled.div`
  background-color: #fdf9f7;
`
export const HeaderWrapper = styled.header`
  position: relative; /* ✅ 기준점으로 설정 */
  background-color: #e9bdcc;
  height: 100px;
  padding: 0 40px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
`;

export const LogoBox = styled.div`
  position: absolute; /* ✅ 하단 왼쪽 고정 */
  bottom: 0;
  left: 40px;
  background-color: #bd6f8c;
  color: white;
  padding: 10px 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 14px;

  img {
    margin-right: 10px;
    height: 18px;
  }
`;

export const MenuBox = styled.div`
  position: absolute; /* ✅ 하단 오른쪽 고정 */
  bottom: 0;
  right: 40px;
  display: flex;
  
`;


export const Tab = styled.div`
  padding: 8px 20px;
  background-color: ${(props) => (props.active ? 'white' : '#bd6f8c')};
  color: ${(props) => (props.active ? '#bd6f8c' : 'white')};
  border: 1px solid #bd6f8c;
  border-bottom: none;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  font-weight: 500;
  cursor: pointer;
`;
