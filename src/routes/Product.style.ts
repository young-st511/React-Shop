import styled from "styled-components";

export const StyledItem = styled.div`
  .item-container {
    display: flex;
    position: relative;
    align-items: center;

    background-color: ${({ theme }) => theme.theme.bgColor};
    color: ${({ theme }) => theme.theme.fontColor};

    margin: 3.5rem 1rem;

    .img {
      padding: 1rem;
      img {
        height: 18rem;
      }
    }

    .info {
      padding: 0 3rem;
      display: flex;
      flex: 1 1 auto;
      flex-direction: column;
      padding: 2rem;
      gap: 0.5rem;

      h2 {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        font-size: 20px;
        font-weight: 700;
        line-height: 1.75rem;
      }

      p {
        flex-grow: 1;
        font-size: 16px;
        font-weight: 500;
      }

      .price {
        margin: 1rem 0;

        font-size: 30px;
      }

      .button-container {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        gap: 0.5rem;
      }
    }
  }
`;
