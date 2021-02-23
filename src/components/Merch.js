import React from 'react';
import styled from 'styled-components';
import MerchImg from '../images/merch.jpg'
import MerchImg2 from '../images/merch2.jpg'
import MerchImg3 from '../images/merch3.jpg'
import MerchImg4 from '../images/merch4.jpg'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    /* superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    }, */
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
    margin-top: 50px;
    padding-top: 116.5%;
    position: relative;
    @media(max-width: 1000px) {
        grid-column: span 12;
    }
`;

const MerchImgage1 = styled.div`
    grid-column: span 5;
    grid-column-end: 13;
    background: url(${MerchImg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 0;
    margin-top: 50px;
    padding-top: 116.5%;
    @media(max-width: 1000px) {
        grid-column: span 12;
`;

const MerchImgage2 = styled.div`
    grid-column: span 5;
    grid-column-end: 13;
    background: url(${MerchImg2});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 0;
    margin-top: 50px;
    padding-top: 116.5%;
    @media(max-width: 1000px) {
        grid-column: span 12;
`;

const MerchImgage3 = styled.div`
    grid-column: span 5;
    grid-column-end: 13;
    background: url(${MerchImg3});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 0;
    margin-top: 50px;
    padding-top: 116.5%;
    @media(max-width: 1000px) {
        grid-column: span 12;
`;

const MerchImgage4 = styled.div`
    grid-column: span 5;
    grid-column-end: 13;
    background: url(${MerchImg4});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 0;
    margin-top: 50px;
    padding-top: 116.5%;
    @media(max-width: 1000px) {
        grid-column: span 12;
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
        <MerchWrapper>
            <MerchTitle>Merch</MerchTitle>
            <Carousel 
                responsive={responsive}
                infinite={true}
                containerClass="carousel-container"
                itemClass="carousel-item-padding-40-px"
                showDots
            >
                <MerchImgage1></MerchImgage1>
                <MerchImgage2></MerchImgage2>
                <MerchImgage3></MerchImgage3>
                <MerchImgage4></MerchImgage4>
            </Carousel>
        </MerchWrapper>
    )
}

export default Merch;
