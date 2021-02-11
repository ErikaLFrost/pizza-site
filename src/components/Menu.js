import React from 'react';
import styled from 'styled-components';
import '../fonts/fonts';

const MenuWrapper = styled.div`
    grid-column: span 12;
    height: 700px;
    background-color: #FF9999;
`;

const MenuMenu = styled.div`
    width: calc(100% - 20px);
    max-width: 500px;
    height: 600px;
    border: 2px solid black;
    margin: 50px auto;
    box-sizing: border-box;
    position: relative;
    text-transform: uppercase;

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
`;

const MenuTitle = styled.h1`
    text-align: center;
`;

const MenuPizza = styled.p`
    font-family: 'PlatonickFont';
    text-align: center;
    font-size: 20px;
    margin-bottom: 0;
`;

const MenuPizzaIngredients = styled.p`
    text-align: center;
    font-family: 'Menlo';
    margin: 0;
    padding: 0 10px;
    font-size: 11px;
`;


const Menu = () => {
    return (<MenuWrapper>
                <MenuMenu>
                    <MenuTitle>Menu</MenuTitle>
                    <MenuPizza>Marinara</MenuPizza>
                    <MenuPizzaIngredients>San Marzanotomater, Vitlök, Oregano, Evo</MenuPizzaIngredients>
                    <MenuPizza>Margherita</MenuPizza>
                    <MenuPizzaIngredients>San Marzanotomater, Fior di Latte, Pecorino, Basilika, Evo</MenuPizzaIngredients>
                    <MenuPizza>Margherita Vegan</MenuPizza>
                    <MenuPizzaIngredients>San Marzanotomater, Greenvie-Mozzarella, Parveggio, Basilika, Evo</MenuPizzaIngredients>
                    <MenuPizza>Nduja</MenuPizza>
                    <MenuPizzaIngredients>San Marzanotomater, Fior di Latte, Veg Nduja, Grönkål, Pecorino, Evo</MenuPizzaIngredients>
                    <MenuPizza>Nduja Vegan</MenuPizza>
                    <MenuPizzaIngredients>San Marzanotomater, Greenvie-Mozzarella, Veg Nduja, Grönkål, Parveggio, Evo</MenuPizzaIngredients>
                    <MenuPizza>Blue</MenuPizza>
                    <MenuPizzaIngredients>(Bianca) Fior di Latte, Pecorino, Gorgonzola, Päron, Valnötter, Honung, Evo</MenuPizzaIngredients>
                    <MenuPizza>Blue Vegan</MenuPizza>
                    <MenuPizzaIngredients>(Bianca) Greenvie-Mozzarella, Parveggio, Greenvie-Blue, Päron, Valnötter, Lönnsirap, Evo</MenuPizzaIngredients>
                </MenuMenu>
            </MenuWrapper>)
} 

export default Menu;