import CarouselSection from "./CarouselSection";
import ItemList from "../ItemList";

function Home() {
  return (
    <div>
      <CarouselSection />
      <ItemList category={"men's clothing"} limit={4} />
      <ItemList category={"women's clothing"} limit={4} />
      <ItemList category={"jewelery"} limit={4} />
      <ItemList category={"electronics"} limit={4} />
    </div>
  );
}

export default Home;
