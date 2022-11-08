import { Link } from "react-router-dom";
import { useRecoilValue, useResetRecoilState } from "recoil";
import styled from "styled-components";
import Button from "../components/Button.Style";
import CartItem from "../components/Cart/CartItem";
import { StyledMiniNav } from "../components/MiniNav.styled";
import { cartListArrayState, cartListState } from "../recoil_state";

function Cart() {
  const cartList = useRecoilValue(cartListArrayState);
  const cartReset = useResetRecoilState(cartListState);

  const handlePurchaseClick = () => {
    cartReset();
  };

  return (
    <>
      <StyledMiniNav>
        <Link to="/">홈</Link>
        <span>{" > "}</span>
        장바구니
      </StyledMiniNav>
      <StyledCart>
        <div className="items-area">
          {cartList.map((elem) => (
            <CartItem item={elem} key={elem.id} />
          ))}
        </div>
        <div className="cart-button-area">
          <span className="total-price">
            총 : ${" "}
            {cartList
              ? `${cartList
                  .reduce((sum, item) => item.price * item.number + sum, 0)
                  .toFixed(2)}`
              : 0}
          </span>
          <Button onClick={handlePurchaseClick}>구매하기</Button>
        </div>
      </StyledCart>
    </>
  );
}

export default Cart;

const StyledCart = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 3.5rem;
  margin-bottom: 5rem;

  background-color: ${({ theme }) => theme.theme.bgColor};
  color: ${({ theme }) => theme.theme.fontColor};

  .cart-button-area {
    display: flex;
    justify-content: space-evenly;
    align-self: flex-start;
    align-items: center;
    flex-shrink: 0;

    margin-top: 2.5rem;
    margin-bottom: 5rem;

    .price {
      font-size: 1.5rem;
      line-height: 2rem;
    }
    button {
      margin-left: 1.25rem;
    }
  }
`;
