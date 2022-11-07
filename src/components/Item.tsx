import { Link } from "react-router-dom";
import styled from "styled-components";
import { ItemType } from "../types/itemType";

function Item({ item }: { item: ItemType }) {
  return (
    <StyledItem>
      <Link to={`product/${item.id}`}>
        <div className="img-area">
          <img src={item.image} />
        </div>
        <div className="info-area">
          <div>
            <h3>{item.title}</h3>
            <span className="price">$ {item.price}</span>
          </div>
        </div>
      </Link>
    </StyledItem>
  );
}

export default Item;

const StyledItem = styled.div`
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
