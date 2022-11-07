import { Carousel } from "react-responsive-carousel";
import fashionImg from "../../assets/img_shop_fashion.jpeg";
import digitalImg from "../../assets/img_shop_digital.jpeg";
import groceryImg from "../../assets/img_shop_grocery.jpeg";
import { Link } from "react-router-dom";
import StyledCarouselSection from "./CarouselSection.style";

function CarouselSection() {
  return (
    <StyledCarouselSection>
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}>
        <div className="carousel-item">
          <img src={fashionImg} alt="Fashion" />
          <div className="carousel-tag">
            <h2>물빠진 청바지!</h2>
            <p>이제 막 도착한 패션 청바지를 구경해보세요.</p>
            <Link to={"fashion"} className="carousel-button">
              {"바로가기 >"}
            </Link>
          </div>
        </div>
        <div className="carousel-item">
          <img src={digitalImg} alt="Digital" />
          <div className="carousel-tag">
            <h2>신속한 업무처리!</h2>
            <p>다양한 디지털 상품을 둘러보세요.</p>
            <Link to={"digital"} className="carousel-button">
              {"바로가기 >"}
            </Link>
          </div>
        </div>
        <div className="carousel-item">
          <img src={groceryImg} alt="Grocery" />
          <div className="carousel-tag">
            <h2>신선한 식품!</h2>
            <p>농장 직배송으로 더욱 신선한 식료품을 만나보세요.</p>
            <Link to={"accessory"} className="carousel-button">
              {"바로가기 >"}
            </Link>
          </div>
        </div>
      </Carousel>
    </StyledCarouselSection>
  );
}

export default CarouselSection;
