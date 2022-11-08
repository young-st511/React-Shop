import { Link } from "react-router-dom";
import ItemList from "../components/ItemList";
import StyledWrapper from "../components/MiniNav.styled";

function Accessory() {
  return (
    <StyledWrapper>
      <nav>
        <Link to={"/"}>홈</Link>
        <span>{" > "}</span>
        패션
      </nav>
      <ItemList category="jewelery" />
    </StyledWrapper>
  );
}

export default Accessory;
