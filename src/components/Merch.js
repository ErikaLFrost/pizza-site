import styled from 'styled-components';
import MerchImageComponent from './MerchImageComponent';
import MerchImg from '../images/merch.jpg'
import MerchImg2 from '../images/merch2.jpg'
import MerchImg3 from '../images/merch3.jpg'
import MerchImg4 from '../images/merch4.jpg'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    /* Man kan göra fler breakpoints, men jag tycker 1 funkar bäst på stor och liten skärm */
    mobile: {
      breakpoint: { max: 4000, min: 0 },
      items: 1
    }
  };

const MerchWrapper = styled.div`
    grid-column: span 5;
    grid-column-end: 13;
    width: 100%;
    height: 0;
    margin-top: 40px;
    padding-top: 116.5%;
    position: relative;
    margin-top: -326px;
    @media(max-width: 1000px) {
        grid-column: span 12;
        margin-top: 29px;
    }
`;

const MerchTitle = styled.h2`
    position: absolute;
    top: 50px;
    left: calc(50% - 65px);
    z-index: 10;
    margin: 0;
    font-size: 60px;
    text-shadow: 0 1px 1px rgba(255, 255, 255, 0.5), 0 0 5px rgba(255, 255, 255, 0.4), 0 0 30px rgba(255, 255, 255, 0.7);
`;

const Merch = () => {
    return (
        <MerchWrapper id="merchSection">
            <MerchTitle>Merch</MerchTitle>
            <Carousel 
                responsive={responsive}
                infinite={true}
                containerClass="carousel-container"
                itemClass="carousel-item-padding-40-px"
                showDots
            >
                <MerchImageComponent merchImage={MerchImg} />
                <MerchImageComponent merchImage={MerchImg2} />
                <MerchImageComponent merchImage={MerchImg3} />
                <MerchImageComponent merchImage={MerchImg4} />
            </Carousel>
        </MerchWrapper>
    )
}

export default Merch;
