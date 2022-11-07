import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { CategoryType } from "../../types/categoryType";
import { ItemType } from "../../types/itemType";
import Item from "../Item";

type HomeItemListProps = { category: CategoryType };

const fetch = async (category: CategoryType) => {
  try {
    const items = await axios.get<ItemType[]>(
      `https://fakestoreapi.com/products/category/${category}?limit=4`
    );
    return items.data;
  } catch (error) {
    console.error(error);
  }
};

const getListName = (category: CategoryType) => {
  switch (category) {
    case "men's clothing":
      return "남성 의류";
    case "women's clothing":
      return "여성 의류";
    case "electronics":
      return "디지털";
    case "jewelery":
      return "악세서리";

    default:
      return "error";
  }
};

function HomeItemList({ category }: HomeItemListProps) {
  const [items, setItems] = useState<ItemType[]>([]);
  useEffect(() => {
    fetch(category).then((res) => setItems(res || []));
  }, [category]);

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

export default HomeItemList;

const StyledHomeItemList = styled.section`
  width: 100%;
  margin: 20px;
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
