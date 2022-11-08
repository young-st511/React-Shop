import { Link } from "react-router-dom";
import { ItemType } from "../../types/itemType";
import StyledItem from "./StyledItem.style";

function Item({ item }: { item: ItemType }) {
  return (
    <StyledItem>
      <Link to={`/product/${item.id}`}>
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
