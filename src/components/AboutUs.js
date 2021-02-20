import React from 'react';
import styled from 'styled-components';
import AboutUsImg from '../images/LPNOm.png';

const AboutUsWrapper = styled.div`
    grid-column: span 5;
    background: 
    linear-gradient(
    rgba(251, 205, 205, 0.52), 
    rgba(251, 205, 205, 0.52)
    ),
    url(${AboutUsImg});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 0;
    margin-top: 50px;
    padding-top: 99.5%;
    position: relative;
    @media(max-width: 1000px) {
        grid-column: span 12;
    }
`;

const AboutUsContent = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    white-space: pre-line;
    h2{
        margin: 0;
        padding-top: 20px;
        font-family: 'PlatonickFont';
        font-size: 50px;
    }
    span{
        text-align: center;
        p{
            margin-top: 0;
            margin-bottom: .5rem;
            font-size: 1.5rem;
            padding: 0 10px;
        }
    }
`;


const AboutUs = () => {
    return (
        <AboutUsWrapper>
            <AboutUsContent>
                <h2>Om oss</h2>
                <span><p>This is where you finally can get a vegan authentic Neapolitan pizza in Stockholm. It started with three great friends selling Neapolitan pizzas from a bike truck to finally moving in to a small spot in the heart of Södermalm.</p></span>
            </AboutUsContent>
        </AboutUsWrapper>)
}

export default AboutUs;