import styled from 'styled-components';
import MerchImageComponent from './MerchImageComponent';
import MerchImg from '../images/merch.jpg'
import MerchImg2 from '../images/merch2.jpg'
import MerchImg3 from '../images/merch3.jpg'
import MerchImg4 from '../images/merch4.jpg'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    mobile: {
      breakpoint: { max: 4000, min: 0 },
      items: 1
    }
  };

const MerchWrapper = styled.div`
    grid-column: span 12;
    grid-column-end: 13;
    width: 100%;
    height: 0;
    margin-top: 40px;
    padding-top: 116.5%;
    position: relative;
    margin-top: 29px;

    @media(min-width: 1000px) {
        grid-column: span 5/13;
        margin-top: -356px;
    }
`;

const MerchTitle = styled.h2`
    position: absolute;
    top: 70px;
    left: calc(50% - 65px);
    z-index: 10;
    margin: 0;
    font-size: 60px;
    color: #f9e3e4;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5), 0 0 5px rgba(0, 0, 0, 0.4), 0 0 30px rgba(0, 0, 0, 0.7);
`;

const MerchText = styled.p`
    text-align: center;
    position: absolute;
    bottom: 40px;
    left: 0;
    z-index: 10;
    margin: 0;
    font-size: 20px;
    color: white;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5), 0 0 5px rgba(0, 0, 0, 0.4), 0 0 30px rgba(0, 0, 0, 0.7);

    :before {
        content: "";
        position: absolute;
        top: -10px;
        left: 0;
        width: 100%;
        height: calc(100% + 20px);
        z-index: -1;
        opacity: 0.5;
        backdrop-filter: blur(30px);
    }
`;

const Merch = () => {
    return (
        <MerchWrapper id="merchSection">
            <MerchTitle>Merch</MerchTitle>
            <MerchText>{`Vi trycker och säljer våra egna t-shirts också! Tröjorna finns i vit & svart, men finns många färger på trycket man kan välja på. \n Maila oss vid intresse: lapiccolanonna@gmail.com`}</MerchText>
            <Carousel 
                responsive={responsive}
                infinite={true}
                containerClass="carousel-container"
                itemClass="carousel-item-padding-40-px"
                showDots
            >
                <MerchImageComponent merchImage={MerchImg4} />
                <MerchImageComponent merchImage={MerchImg} />
                <MerchImageComponent merchImage={MerchImg2} />
                <MerchImageComponent merchImage={MerchImg3} />
            </Carousel>
        </MerchWrapper>
    )
}

export default Merch;
