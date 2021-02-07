import React from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.div`
    grid-column: span 12;
    height: 50vw;
    background-color: black;
`;


const Hero = () => {
    return (<HeroWrapper />)
} 

export default Hero;