import styled from "styled-components";
import CarouselSection from "../components/Home/CarouselSection";
import HomeItemList from "../components/Home/HomeItemList";
import Navigation from "../components/Navigation";

function Root() {
  return (
    <StyledRoot>
      <Navigation />
      <CarouselSection />
      <HomeItemList category={"men's clothing"} />
      <HomeItemList category={"women's clothing"} />
      <HomeItemList category={"jewelery"} />
      <HomeItemList category={"electronics"} />
    </StyledRoot>
  );
}

export default Root;

const StyledRoot = styled.div`
  
`