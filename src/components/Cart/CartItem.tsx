import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { cartListState } from "../../recoil_state";
import { CartItemType } from "../../types/cartType";
import Button from "../Button.Style";

function CartItem({ item }: { item: CartItemType }) {
  const [cartList, setCartList] = useRecoilState(cartListState);

  const handleAddClick = () => {
    const itemNumber = cartList[item.id].number;

    setCartList({ ...CartItem, [item.id]: itemNumber + 1 });
  };

  const handleSubClick = () => {
    const itemNumber = cartList[item.id].number;

    setCartList({ ...CartItem, [item.id]: { number: itemNumber - 1 } });
  };

  return (
    <>
      <StyledCartItem>
        <div className="img">
          <img src={item.image} />
        </div>
        <div className="info">
          <h2>{item.title}</h2>
          <p className="price">$ {item.price}</p>
          <div className="item-button">
            <CartButton onClick={handleSubClick} className="sub">
              -
            </CartButton>
            <span>{item.number}</span>
            <CartButton onClick={handleAddClick} className="add">
              +
            </CartButton>
          </div>
        </div>
      </StyledCartItem>
    </>
  );
}

export default CartItem;

const StyledCartItem = styled.div`
  display: flex;
  align-items: center;

  margin: 1rem 1rem;

  .img {
    img {
      padding: 1rem;
      background-color: #fff;
      border-radius: 1rem;
      overflow: hidden;
      width: 14rem;
    }
  }
  .info {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    gap: 0.5rem;

    padding: 2rem 3rem;

    h2 {
      font-size: 1.4rem;
      line-height: 1.75rem;
      font-weight: 700;
    }

    .price {
      font-size: 1.875rem;
      font-weight: 500;
      line-height: 2.25rem;
    }

    .item-button {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      gap: 0.5rem;

      span {
        margin-left: 1px;

        display: inline-flex;
        flex-shrink: 0;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

        height: 3rem;
        padding-left: 1rem;
        padding-right: 1rem;

        font-size: 0.875rem;
        line-height: 1em;
        font-weight: 600;
      }
    }
  }
`;

const CartButton = styled(Button)`
  &.sub {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  &.add {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
`;
