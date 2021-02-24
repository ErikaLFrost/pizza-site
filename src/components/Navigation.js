import React from 'react';
import styled from 'styled-components';

const Hamburger = styled.div`

`;

const MenuOpen = styled.div`
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 50vh;
    background: green;
    z-index: 11;

    ul {
        list-style-type: none;
        padding: 0;
        margin 0;
    }

    a {
        color: black;
    }
`;

/* const MenuClosed = styled.div`

`; */

const Navigation = () => {
    return (
        <>
            <Hamburger />
            <MenuOpen>
                <ul>
                    <li><a href="/">Link 1</a></li>
                    <li><a href="/">Link 1</a></li>
                    <li><a href="/">Link 1</a></li>
                    <li><a href="/">Link 1</a></li>
                </ul>
            </MenuOpen>
        </>
    )
} 

export default Navigation;