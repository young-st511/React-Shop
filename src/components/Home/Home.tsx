import CarouselSection from "./CarouselSection";
import ItemList from "../ItemList";
import styled from "styled-components";

function Home() {
  return (
    <StyledHome>
      <CarouselSection />
      <div className="home-items">
        <ItemList category={"men's clothing"} limit={4} />
        <ItemList category={"women's clothing"} limit={4} />
        <ItemList category={"jewelery"} limit={4} />
        <ItemList category={"electronics"} limit={4} />
      </div>
    </StyledHome>
  );
}

export default Home;

const StyledHome = styled.div`
  .home-items {
    max-width: 1360px;
    margin: 0 auto;
  }
`;
