import { Link } from "react-router-dom";
import ItemList from "../components/ItemList";
import StyledWrapper from "../components/MiniNav.styled";

function Digital() {
  return (
    <StyledWrapper>
      <nav>
        <Link to={"/"}>홈</Link>
        <span>{" > "}</span>
        디지털
      </nav>
      <ItemList category="electronics" />
    </StyledWrapper>
  );
}

export default Digital;
