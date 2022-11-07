import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ItemType } from "../types/itemType";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { cartListState } from "../recoil_state";

const fetchItem = async (itemId: number) => {
  try {
    const item = await axios.get<ItemType>(
      `https://fakestoreapi.com/products/${itemId}`
    );
    return item.data;
  } catch (error) {
    console.error(error);
  }
};

function Product() {
  const [item, setItem] = useState<ItemType>({} as ItemType);
  const { id: itemIdParam } = useParams();
  const itemId = Number(itemIdParam);
  const [cartList, setCartList] = useRecoilState(cartListState);

  useEffect(() => {
    fetchItem(itemId).then((res) => setItem(res ?? ({} as ItemType)));
  }, [itemId]);

  const handleAddClick = () => {
    if (itemId === null || itemId === undefined) {
      return;
    }

    if (cartList[itemId]) {
      const itemNum = cartList[itemId].number;
      setCartList({
        ...cartList,
        [itemId]: { ...cartList[itemId], number: itemNum + 1 },
      });
    } else {
      setCartList({
        ...cartList,
        [itemId]: {
          id: item.id,
          image: item.image,
          price: item.price,
          number: 1,
        },
      });
    }
  };

  return (
    <StyledItem>
      <div className="img">
        <img src={item.image} />
      </div>
      <div className="info">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <span className="price">$ {item.price}</span>
        <div className="button-container">
          <Button onClick={handleAddClick}>장바구니에 담기</Button>
          <Button className="move">장바구니로 이동</Button>
        </div>
      </div>
    </StyledItem>
  );
}

export default Product;

const Button = styled.button`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  height: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;

  font-size: 0.875rem;
  line-height: 1em;
  font-weight: 600;

  border-radius: 0.5rem;

  background-color: #000000;
  border: 1px solid #000;
  color: #ffffff;

  &:hover {
    background-color: #464646;
  }

  &.move {
    background-color: #fff;
    border-color: #e6e6e6;
    color: #000;
    &:hover {
      background-color: #e6e6e6;
    }
  }
`;

const StyledItem = styled.div`
  display: flex;
  align-items: center;

  margin-top: 3.5rem;
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
`;
