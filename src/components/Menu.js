import React from 'react';
import styled from 'styled-components';
import '../fonts/fonts';

const MenuWrapper = styled.div`
    grid-column: span 6;
    @media(max-width: 1000px) {
        grid-column: span 12;
    }
`;

const MenuMenu = styled.div`
    background-color: #F29699;
    width: calc(100% - 20px);
    max-width: 500px;
    padding-bottom: 50px;
    border: 2px solid black;
    box-sizing: border-box;
    position: relative;
    text-transform: uppercase;
    margin: 0 auto;
    @media(min-width: 1000px) {
        max-width: 800px;
        margin: 0 0 0 5px;
    }

    /* Second Border */
    &:before { 
        content: " ";
        position: absolute;
        z-index: 1;
        top: -6px;
        left: -6px;
        width: calc(100% + 8px);
        height: calc(100% + 8px);
        border: 2px solid black;
    }

    h1 {
        text-align: center;
        font-size: 60px;
        filter: drop-shadow(0 0 0.5rem rgba(251, 205, 205, 0.5));
        /* filter: drop-shadow(0px 0px 1px white); */

        @media(min-width: 1000px) {
            font-size: 80px;
            margin: 20px 0;
        }
    }

    h2 {
        font-family: 'PlatonickFont';
        text-align: center;
        font-size: 20px;
        margin-bottom: 0;
        @media(min-width: 1000px) {
            font-size: 30px;   
        }
    }

    p {
        text-align: center;
        margin: 0;
        padding: 0 10px;
        font-size: 11px;
        @media(min-width: 1000px) {
            font-size: 16px;   
        }
    }
    
    /* Alla Pizzor 85 kr */
    span {
        display: block;
        text-align: center;
        margin: 26px 0 0;
        font-size: 16px;
        font-weight: 600;
        @media(min-width: 1000px) {
            font-size: 18px;  
    }
`;

const Menu = () => {
    return (<MenuWrapper id="menuSection">
                <MenuMenu>
                    <h1>Menu</h1>
                    <h2>Marinara</h2>
                    <p>San Marzanotomater, Vitlök, Oregano, Evo</p>
                    <h2>Margherita</h2>
                    <p>San Marzanotomater, Fior di Latte, Pecorino, Basilika, Evo</p>
                    <h2>Margherita Vegan</h2>
                    <p>San Marzanotomater, Greenvie-Mozzarella, Parveggio, Basilika, Evo</p>
                    <h2>Nduja</h2>
                    <p>San Marzanotomater, Fior di Latte, Veg Nduja, Grönkål, Pecorino, Evo</p>
                    <h2>Nduja Vegan</h2>
                    <p>San Marzanotomater, Greenvie-Mozzarella, Veg Nduja, Grönkål, Parveggio, Evo</p>
                    <h2>Blue</h2>
                    <p>(Bianca) Fior di Latte, Pecorino, Gorgonzola, Päron, Valnötter, Honung, Evo</p>
                    <h2>Blue Vegan</h2>
                    <p>(Bianca) Greenvie-Mozzarella, Parveggio, Greenvie-Blue, Päron, Valnötter, Lönnsirap, Evo</p>
                    <span>Alla pizzor 85 kr</span>
                </MenuMenu>
            </MenuWrapper>)
} 

export default Menu;