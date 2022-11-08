import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { CategoryType } from "../../types/categoryType";
import { ItemType } from "../../types/itemType";
import getListName from "../../utils/getListName";
import Item from "./Item";

const fetch = async (category: CategoryType) => {
  try {
    const items = await axios.get<ItemType[]>(
      `https://fakestoreapi.com/products/category/${category}`
    );
    return items.data;
  } catch (error) {
    console.error(error);
  }
};

function PageItemList({ category }: { category: CategoryType }) {
  const [items, setItems] = useState<ItemType[]>([]);
  useEffect(() => {
    fetch(category).then((res) => setItems(res || []));
  }, [category]);

  return (
    <StyledItemList>
      <h2>{getListName("jewelery")}</h2>
      <div className="item-list">
        {items.map((value) => (
          <Item item={value} key={value.id} />
        ))}
      </div>
    </StyledItemList>
  );
}

export default PageItemList;

const StyledItemList = styled.section`
  .item-list {
    display: grid;

    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1.5rem;
  }
`;
