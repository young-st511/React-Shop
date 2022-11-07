import { Link } from "react-router-dom";
import ItemList from "../components/ItemList";
import { StyledWrapper } from "../components/ItemPageList.styled";

function Fashion() {
  return (
    <StyledWrapper>
      <nav>
        <Link to={"/"}>홈</Link>
        <span>{" > "}</span>
        패션
      </nav>
      <ItemList category="men's clothing" />
      <ItemList category="women's clothing" />
    </StyledWrapper>
  );
}

export default Fashion;

