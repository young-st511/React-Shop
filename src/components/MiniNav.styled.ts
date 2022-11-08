import styled from "styled-components";

export const StyledItemPage = styled.div`
  background: none;
  color: ${({ theme }) => theme.theme.fontColor};
  nav {
    height: 30px;

    margin-top: 20px;
    padding-left: 20px;

    font-size: 14px;
    font-weight: 500;

    span {
      margin: 0 10px;
    }
  }
`;
export const StyledMiniNav = styled.nav`
  background: none;
  color: ${({ theme }) => theme.theme.fontColor};
  height: 30px;

  margin-top: 20px;
  padding-left: 20px;

  font-size: 14px;
  font-weight: 500;

  span {
    margin: 0 10px;
  }
`;

export default StyledItemPage;
