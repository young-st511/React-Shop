import styled from "styled-components";

export const StyledItem = styled.div`
  height: 500px;

  border: 1px solid #e6e6e6;
  border-radius: 1rem;

  overflow: hidden;

  .img-area {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 320px;

    img {
      width: 140px;
      &:hover {
        width: 160px;
      }
    }
  }

  .info-area {
    display: flex;
    align-items: center;

    height: 180px;
    padding: 32px;
    box-sizing: border-box;

    background-color: #e6e6e6;

    h3 {
      margin-bottom: 20px;
      font-size: 16px;
      font-weight: 700;
    }
    .price {
      font-size: 16px;
      font-weight: 500;
    }
  }
`;

export default StyledItem;
