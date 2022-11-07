import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { CategoryType } from "../types/categoryType";
import { ItemType } from "../types/itemType";
import getListName from "../utils/getListName";
import Item from "./Item";

type ItemListProps = { category: CategoryType; limit?: number };

const fetch = async (category: CategoryType, limit: number | undefined) => {
  try {
    const items = await axios.get<ItemType[]>(
      `https://fakestoreapi.com/products/category/${category}${
        limit ? `?limit=${limit}` : ""
      }`
    );
    return items.data;
  } catch (error) {
    console.error(error);
  }
};

function ItemList({ category, limit }: ItemListProps) {
  const [items, setItems] = useState<ItemType[]>([]);
  useEffect(() => {
    fetch(category, limit).then((res) => setItems(res || []));
  }, [category, limit]);

  return (
    <StyledHomeItemList>
      <h2>{getListName(category)}</h2>
      <div className="item-list">
        {items.map((value) => (
          <Item item={value} key={value.id} />
        ))}
      </div>
    </StyledHomeItemList>
  );
}

export default ItemList;

const StyledHomeItemList = styled.section`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  h2 {
    width: 200px;
    margin: 70px auto;

    font-size: 36px;
    font-weight: 700;
  }
  .item-list {
    display: grid;

    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1.5rem;
  }
`;
