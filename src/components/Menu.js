import React from 'react';
import styled from 'styled-components';
import '../fonts/fonts';

const MenuWrapper = styled.div`
    grid-column: span 7;
    @media(max-width: 1000px) {
        grid-column: span 12;
    }
`;

const MenuMenu = styled.div`
    width: calc(100% - 20px);
    max-width: 500px;
    padding-bottom: 50px;
    border: 2px solid black;
    box-sizing: border-box;
    position: relative;
    text-transform: uppercase;
    @media(max-width: 1000px) {
        margin: 0 auto;
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

    h1{
        text-align: center;
        font-size: 50px;
    }

    h2{
        font-family: 'PlatonickFont';
        text-align: center;
        font-size: 20px;
        margin-bottom: 0;
    }

    p{
        text-align: center;
        font-family: 'Menlo';
        margin: 0;
        padding: 0 10px;
        font-size: 11px;
    }
`;

const Menu = () => {
    return (<MenuWrapper>
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
                </MenuMenu>
            </MenuWrapper>)
} 

export default Menu;